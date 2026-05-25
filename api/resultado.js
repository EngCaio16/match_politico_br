const perguntas_quiz = require('../political_quiz.js');

// ===============================
// ARCHETYPES (30D VECTORS)
// ===============================
const ARCHETYPES = [
  {
    name: "Direita Conservadora",
    emoji: "🏛️",
    descricao: "Defende valores tradicionais, livre mercado com Estado mínimo, segurança pública rigorosa e costumes conservadores.",
    vector: [
       1,  1, -1, 0.5,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1
    ]
  },
  {
    name: "Libertário",
    emoji: "🗽",
    descricao: "Máxima liberdade individual — tanto econômica quanto de costumes. Mínimo de Estado em todas as áreas.",
    vector: [
       1,  1,  1,  1,  0,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1
    ]
  },
  {
    name: "Esquerda Progressista",
    emoji: "✊",
    descricao: "Defende ampliação do Estado de bem-estar, direitos civis progressistas, regulação da economia e combate às desigualdades.",
    vector: [
      -1, -1,  1, -1, -0.5, -1, -1, -1, -1, -0.5,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -0.5, -0.5, -1, -1, -1, -1, -1, -1, -0.5, -1
    ]
  },
  {
    name: "Esquerda Nacionalista",
    emoji: "🌿",
    descricao: "Prioriza soberania nacional, estatização de setores estratégicos e proteção social, com postura mais tradicional em costumes.",
    vector: [
      -0.5, -1,  0, -1,  0, -0.5, -1, -1, -1, -0.5,
      -0.5, -1, -1, -1, -1, -1, -1, -1, -0.5, -1,
       0,  0, -0.5, -1, -0.5, -1, -1, -1,  0, -0.5
    ]
  }
];

// ===============================
// COSINE SIMILARITY
// ===============================
function dot(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}
function magnitude(v) {
  return Math.sqrt(v.reduce((s, x) => s + x * x, 0));
}
function cosineSimilarity(a, b) {
  const denom = magnitude(a) * magnitude(b);
  if (denom === 0) return 0;
  return dot(a, b) / denom;
}

// ===============================
// HANDLER
// ===============================
module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  const { respostas } = req.body;

  if (!Array.isArray(respostas) || respostas.length === 0) {
    return res.status(400).json({
      error: 'Envie um array "respostas" com os índices das perguntas e opções escolhidas.',
    });
  }

  // Monta vetor do usuário (30 posições, null se não respondeu)
  const userVector = new Array(perguntas_quiz.length).fill(0);
  const detalhes = [];
  let pontuacaoTotal = 0;

  for (const resposta of respostas) {
    const { pergunta_index, opcao_index } = resposta;

    const pergunta = perguntas_quiz[pergunta_index];
    if (!pergunta) {
      return res.status(400).json({
        error: `pergunta_index ${pergunta_index} inválido. O quiz tem ${perguntas_quiz.length} perguntas (0 a ${perguntas_quiz.length - 1}).`,
      });
    }

    const opcao = pergunta.opcoes[opcao_index];
    if (!opcao) {
      return res.status(400).json({
        error: `opcao_index ${opcao_index} inválido para a pergunta ${pergunta_index}. Ela tem ${pergunta.opcoes.length} opções.`,
      });
    }

    userVector[pergunta_index] = opcao.score;
    pontuacaoTotal += opcao.score;

    detalhes.push({
      pergunta: pergunta.pergunta,
      opcao_escolhida: opcao.texto,
      score: opcao.score,
    });
  }

  // Espectro geral (escala linear)
  const maxPossivel = respostas.length;
  const minPossivel = -respostas.length;
  const range = maxPossivel - minPossivel;
  const percentual = range > 0 ? ((pontuacaoTotal - minPossivel) / range) * 100 : 50;
  const espectro = calcularEspectro(percentual);

  // Matches por similaridade de cosseno
  const matches = ARCHETYPES
    .map(a => {
      const sim = cosineSimilarity(userVector, a.vector);
      // Normaliza de [-1,1] → [0,100]
      const matchPercent = parseFloat((((sim + 1) / 2) * 100).toFixed(1));
      return {
        name: a.name,
        emoji: a.emoji,
        descricao: a.descricao,
        similaridade_raw: parseFloat(sim.toFixed(4)),
        match_percent: matchPercent,
      };
    })
    .sort((a, b) => b.similaridade_raw - a.similaridade_raw);

  return res.status(200).json({
    pontuacao_total: parseFloat(pontuacaoTotal.toFixed(2)),
    pontuacao_maxima_possivel: maxPossivel,
    pontuacao_minima_possivel: minPossivel,
    percentual_espectro: parseFloat(percentual.toFixed(1)),
    espectro,
    total_respondidas: respostas.length,
    total_perguntas: perguntas_quiz.length,
    matches,
    detalhes,
  });
}

function calcularEspectro(percentual) {
  if (percentual >= 80) return 'Direita / Liberal-conservador';
  if (percentual >= 60) return 'Centro-direita';
  if (percentual >= 40) return 'Centro';
  if (percentual >= 20) return 'Centro-esquerda';
  return 'Esquerda / Progressista-estatista';
}
