"""
data_loader.py — Carrega perguntas e arquétipos do GitHub (com cache em memória).

Configure as URLs abaixo para apontar ao seu repositório.
"""

import json
import urllib.request
from functools import lru_cache


GITHUB_BASE = "https://raw.githubusercontent.com/EngCaio16/match_politico_br/main"
PERGUNTAS_URL  = f"{GITHUB_BASE}/perguntas.json"
ARQUETIPOS_URL = f"{GITHUB_BASE}/arquetipos.json"


@lru_cache(maxsize=1)
def get_perguntas() -> list:
    with urllib.request.urlopen(PERGUNTAS_URL) as r:
        return json.loads(r.read().decode())


@lru_cache(maxsize=1)
def get_arquetipos() -> list:
    with urllib.request.urlopen(ARQUETIPOS_URL) as r:
        return json.loads(r.read().decode())
