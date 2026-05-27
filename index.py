"""
api/index.py — GET /api
Informações gerais da API.
"""

from http.server import BaseHTTPRequestHandler
import json


class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        body = json.dumps(
            {
                "api": "Quiz Político Brasil",
                "versao": "2.0.0",
                "runtime": "Python",
                "endpoints": {
                    "GET /api/quiz":      "Retorna todas as perguntas e opções",
                    "POST /api/resultado": "Calcula o resultado com base nas respostas enviadas",
                },
                "exemplo_post": {
                    "url": "/api/resultado",
                    "body": {
                        "respostas": [
                            {"pergunta_index": 0, "opcao_index": 1},
                            {"pergunta_index": 1, "opcao_index": 0},
                        ]
                    },
                },
            },
            ensure_ascii=False,
        ).encode("utf-8")

        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *args):
        pass
