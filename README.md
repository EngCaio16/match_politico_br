# Quiz Político Brasil — Python API

API REST em Python puro para o Quiz Político Brasileiro. Deploy no Vercel.

---

## Estrutura do projeto

```
/
├── api/
│   ├── index.py        → GET  /api           (info e endpoints)
│   ├── quiz.py         → GET  /api/quiz      (todas as perguntas)
│   ├── resultado.py    → POST /api/resultado  (calcula resultado)
│   └── data_loader.py  → carrega JSONs do GitHub (cache em memória)
├── perguntas.json      → perguntas e pontuações
├── arquetipos.json     → arquétipos/candidatos e vetores ideológicos
├── index.html          → frontend (opcional)
├── requirements.txt
├── vercel.json
└── README.md
```

---

## ⚙️ Configuração obrigatória

Antes de fazer o deploy, abra `api/data_loader.py` e troque a URL base:

```python
GITHUB_BASE = "https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPO/main"
```

Os arquivos `perguntas.json` e `arquetipos.json` precisam estar acessíveis
nessa URL (repositório público, ou privado com token de leitura).

---

## Deploy no Vercel (via GitHub)

1. Suba este projeto num repositório GitHub (público ou privado).
2. Acesse [vercel.com](https://vercel.com) → **Add New → Project**.
3. Importe o repositório.
4. Em **Framework Preset** selecione **Other**.
5. Nenhuma variável de ambiente é necessária (as URLs estão em `data_loader.py`).
6. Clique em **Deploy**. ✅

---

## Endpoints

### `GET /api`
Informações da API e lista de endpoints.

---

### `GET /api/quiz`
Retorna todas as perguntas com opções e pontuações.

**Resposta:**
```json
{
  "total": 30,
  "perguntas": [
    {
      "pergunta": "Pergunta 1. ...",
      "opcoes": [
        { "texto": "A) ...", "score": 1.0 },
        ...
      ]
    }
  ]
}
```

---

### `POST /api/resultado`
Recebe as respostas e retorna os matches por similaridade de cosseno.

**Body (JSON):**
```json
{
  "respostas": [
    { "pergunta_index": 0, "opcao_index": 1 },
    { "pergunta_index": 1, "opcao_index": 0 }
  ]
}
```

**Resposta:**
```json
{
  "matches": [
    { "name": "Gato Liber",      "emoji": "🗽", "descricao": "...", "match_percent": 91.5 },
    { "name": "Gato Patriota",   "emoji": "🏛️", "descricao": "...", "match_percent": 78.0 },
    { "name": "Gato Trabalhista","emoji": "🌿", "descricao": "...", "match_percent": 32.0 },
    { "name": "Gato Woke",       "emoji": "✊", "descricao": "...", "match_percent": 12.5 }
  ]
}
```

`matches` vem ordenado do mais ao menos similar. Use `match_percent` (0–100 %) para exibir ao usuário.

---

## Editar perguntas ou arquétipos

Basta editar `perguntas.json` ou `arquetipos.json` no GitHub — sem precisar re-fazer o deploy.
O cache em memória (`lru_cache`) é renovado a cada cold start da função Vercel.

---

## Exemplo com `fetch` (frontend)

```js
// Buscar perguntas
const { perguntas } = await fetch('/api/quiz').then(r => r.json());

// Enviar respostas
const { matches } = await fetch('/api/resultado', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    respostas: [
      { pergunta_index: 0, opcao_index: 0 },
      { pergunta_index: 1, opcao_index: 2 },
    ]
  })
}).then(r => r.json());

console.log(matches[0].name); // arquétipo mais similar
```
