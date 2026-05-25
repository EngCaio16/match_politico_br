# Quiz Político Brasil — API

API REST para o Quiz Político Brasileiro. Deploy no Vercel.

---

## Estrutura do projeto

```
/
├── api/
│   ├── index.js        → GET  /api          (info e endpoints)
│   ├── quiz.js         → GET  /api/quiz     (todas as perguntas)
│   └── resultado.js    → POST /api/resultado (calcula resultado)
├── political_quiz.js   → perguntas e pontuações (não editar)
├── package.json
├── vercel.json
└── README.md
```

---

## Deploy no Vercel (via GitHub)

1. Suba este projeto num repositório GitHub (público ou privado).
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New → Project**.
3. Importe o repositório do GitHub.
4. Não precisa configurar nada — o `vercel.json` já cuida do resto.
5. Clique em **Deploy**. ✅

---

## Endpoints

### `GET /api`
Retorna informações da API e lista de endpoints.

---

### `GET /api/quiz`
Retorna todas as perguntas com opções e pontuações.

**Resposta:**
```json
{
  "total": 30,
  "perguntas": [
    {
      "pergunta": "Pergunta 1. Qual deve ser o papel das empresas estatais no Brasil?",
      "opcoes": [
        { "texto": "A) Privatizar o máximo possível...", "score": 1.0 },
        ...
      ]
    },
    ...
  ]
}
```

---

### `POST /api/resultado`
Recebe as respostas e retorna a pontuação e espectro político.

**Body (JSON):**
```json
{
  "respostas": [
    { "pergunta_index": 0, "opcao_index": 1 },
    { "pergunta_index": 1, "opcao_index": 0 },
    { "pergunta_index": 2, "opcao_index": 2 }
  ]
}
```

- `pergunta_index`: posição da pergunta (0 a 29)
- `opcao_index`: posição da opção escolhida dentro da pergunta (começa em 0)

**Resposta:**
```json
{
  "pontuacao_total": 1.5,
  "pontuacao_maxima_possivel": 3.0,
  "pontuacao_minima_possivel": -3.0,
  "percentual_espectro": 75.0,
  "espectro": "Centro-direita",
  "total_respondidas": 3,
  "total_perguntas": 30,
  "matches": [
    { "name": "Libertário",             "emoji": "🗽", "descricao": "...", "similaridade_raw": 0.91, "match_percent": 95.5 },
    { "name": "Direita Conservadora",   "emoji": "🏛️", "descricao": "...", "similaridade_raw": 0.78, "match_percent": 89.0 },
    { "name": "Esquerda Nacionalista",  "emoji": "🌿", "descricao": "...", "similaridade_raw": -0.4, "match_percent": 30.0 },
    { "name": "Esquerda Progressista",  "emoji": "✊", "descricao": "...", "similaridade_raw": -0.9, "match_percent": 5.0 }
  ],
  "detalhes": [ ... ]
}
```

`matches` vem **ordenado do mais ao menos similar**. Use `match_percent` para exibir ao usuário (0–100%).

---

## Exemplo com `fetch` (frontend)

```js
// Buscar perguntas
const res = await fetch('https://sua-url.vercel.app/api/quiz');
const { perguntas } = await res.json();

// Enviar respostas
const resultado = await fetch('https://sua-url.vercel.app/api/resultado', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    respostas: [
      { pergunta_index: 0, opcao_index: 0 },
      { pergunta_index: 1, opcao_index: 2 },
    ]
  })
});
const data = await resultado.json();
console.log(data.espectro); // "Centro-direita"
```
