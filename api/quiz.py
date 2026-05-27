"""
api/quiz.py — GET /api/quiz
Retorna todas as perguntas com opções e pontuações.
"""

from http.server import BaseHTTPRequestHandler
import json
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
from data_loader import get_perguntas


def _cors(handler):
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")


class handler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200)
        _cors(self)
        self.end_headers()

    def do_GET(self):
        try:
            perguntas = get_perguntas()
            body = json.dumps(
                {"total": len(perguntas), "perguntas": perguntas},
                ensure_ascii=False,
            ).encode("utf-8")
            self.send_response(200)
            _cors(self)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except Exception as exc:
            err = json.dumps({"error": str(exc)}).encode()
            self.send_response(500)
            _cors(self)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(err)

    def log_message(self, *args):  # silencia logs no Vercel
        pass
