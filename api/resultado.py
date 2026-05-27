"""
api/resultado.py — POST /api/resultado
Recebe as respostas e devolve os matches por similaridade de cosseno.
"""

from http.server import BaseHTTPRequestHandler
import json
import math
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from data_loader import get_perguntas, get_arquetipos


# ── helpers ──────────────────────────────────────────────

def _cors(h):
    h.send_header("Access-Control-Allow-Origin", "*")
    h.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    h.send_header("Access-Control-Allow-Headers", "Content-Type")


def _cosine(a: list, b: list) -> float:
    dot  = sum(x * y for x, y in zip(a, b))
    magA = math.sqrt(sum(x * x for x in a))
    magB = math.sqrt(sum(x * x for x in b))
    if magA == 0 or magB == 0:
        return 0.0
    return dot / (magA * magB)


def _normalize_vector(vec: list, size: int) -> list:
    v = list(vec) + [0.0] * size
    return v[:size]


def _calcular_matches(respostas: list) -> dict:
    perguntas  = get_perguntas()
    arquetipos = get_arquetipos()
    total = len(perguntas)

    # Monta vetor do usuário
    user_vector = [0.0] * total
    for r in respostas:
        pi = r.get("pergunta_index")
        oi = r.get("opcao_index")
        if pi is None or oi is None:
            continue
        if not (0 <= pi < total):
            continue
        opcoes = perguntas[pi].get("opcoes", [])
        if not (0 <= oi < len(opcoes)):
            continue
        user_vector[pi] = opcoes[oi]["score"]

    # Calcula similaridade com cada arquétipo
    matches = []
    for arq in arquetipos:
        arq_vec = _normalize_vector(arq["vector"], total)
        sim = _cosine(user_vector, arq_vec)
        matches.append({
            "name":          arq["name"],
            "emoji":         arq["emoji"],
            "descricao":     arq["descricao"],
            "match_percent": round(((sim + 1) / 2) * 100, 1),
        })

    matches.sort(key=lambda x: x["match_percent"], reverse=True)
    return {"matches": matches}


# ── handler Vercel ────────────────────────────────────────

class handler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        _cors(self)
        self.end_headers()

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", 0))
            body   = json.loads(self.rfile.read(length) if length else b"{}")
        except json.JSONDecodeError:
            self._send(400, {"error": "JSON inválido."})
            return

        respostas = body.get("respostas")
        if not isinstance(respostas, list):
            self._send(400, {"error": 'Campo "respostas" ausente ou inválido.'})
            return

        try:
            result = _calcular_matches(respostas)
            self._send(200, result)
        except Exception as exc:
            self._send(500, {"error": str(exc)})

    def _send(self, status: int, data: dict):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        _cors(self)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *args):
        pass
