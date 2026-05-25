const perguntas_quiz = require('../political_quiz.js');

// ===============================
// ARCHETYPES (30D VECTORS)
// ===============================
const ARCHETYPES = [
  {
    name: "Gato Patriota",
    emoji: "🏛️",
    descricao:
      "Defende valores tradicionais, livre mercado com Estado mínimo, segurança pública rigorosa e costumes conservadores.",
    vector: [
       1,  1, -1, 0.5,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1
    ]
  },

  {
    name: "Gato Liber",
    emoji: "🗽",
    descricao:
      "Máxima liberdade individual — tanto econômica quanto de costumes. Mínimo de Estado em todas as áreas.",
    vector: [
       1,  1,  1,  1,  0,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1
    ]
  },

  {
    name: "Gato Woke",
    emoji: "✊",
    descricao:
      "Defende ampliação do Estado de bem-estar, direitos civis progressistas, regulação da economia e combate às desigualdades.",
    vector: [
      -1, -1,  1, -1, -0.5, -1, -1, -1, -1, -0.5,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -0.5, -0.5, -1, -1, -1, -1, -1, -1, -0.5, -1
    ]
  },

  {
    name: "Gato Trabalhista",
    emoji: "🌿",
    descricao:
      "Prioriza soberania nacional, estatização de setores estratégicos e proteção social, com postura mais tradicional em costumes.",
    vector: [
      -0.5, -1,  0, -1,  0, -0.5, -1, -1, -1, -0.5,
      -0.5, -1, -1, -1, -1, -1, -1, -1, -0.5, -1,
       0,  0, -0.5, -1, -0.5, -1, -1, -1,  0, -0.5
    ]
  }
];

// ===============================
// VECTOR MATH
// ===============================
function dot(a, b) {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
}

function magnitude(v) {
  return Math.sqrt(
    v.reduce((sum, value) => sum + value * value, 0)
  );
}

function cosineSimilarity(a, b) {
  const magA = magnitude(a);
  const magB = magnitude(b);

  if (magA === 0 || magB === 0) {
    return 0;
  }

  return dot(a, b) / (magA * magB);
}

// ===============================
// API HANDLER
// ===============================
module.exports = function handler(req, res) {

  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ONLY POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método não permitido. Use POST.'
    });
  }

  const { respostas } = req.body;

  // VALIDATION
  if (!Array.isArray(respostas) || respostas.length === 0) {
    return res.status(400).json({
      error:
        'Envie um array "respostas" com os índices das perguntas e opções escolhidas.'
    });
  }

  // ===============================
  // USER VECTOR
  // ===============================
  const userVector = new Array(perguntas_quiz.length).fill(0);

  const detalhes = [];

  for (const resposta of respostas) {

    const {
      pergunta_index,
      opcao_index
    } = resposta;

    // Validate question
    const pergunta = perguntas_quiz[pergunta_index];

    if (!pergunta) {
      return res.status(400).json({
        error:
          `pergunta_index ${pergunta_index} inválido.`
      });
    }

    // Validate option
    const opcao = pergunta.opcoes[opcao_index];

    if (!opcao) {
      return res.status(400).json({
        error:
          `opcao_index ${opcao_index} inválido para a pergunta ${pergunta_index}.`
      });
    }

    // Fill vector position
    userVector[pergunta_index] = opcao.score;

    // Save details
    detalhes.push({
      pergunta: pergunta.pergunta,
      opcao_escolhida: opcao.texto,
      score: opcao.score
    });
  }

  // ===============================
  // COSINE MATCHING ONLY
  // ===============================
  const matches = ARCHETYPES
    .map(archetype => {

      const similarity = cosineSimilarity(
        userVector,
        archetype.vector
      );

      // Compatibilidade política prática
      // Negativos viram 0%
      const compatibility = Math.max(0, similarity);

      return {
        name: archetype.name,
        emoji: archetype.emoji,
        descricao: archetype.descricao,

        // Valor matemático real
        similaridade_raw: Number(
          similarity.toFixed(4)
        ),

        // Valor amigável pro usuário
        compatibilidade_percentual: Number(
          (compatibility * 100).toFixed(1)
        )
      };

    })
    .sort(
      (a, b) =>
        b.similaridade_raw - a.similaridade_raw
    );

  // ===============================
  // MAIN RESULT
  // ===============================
  const resultadoPrincipal = matches[0];

  // ===============================
  // RESPONSE
  // ===============================
  return res.status(200).json({

    resultado_principal: resultadoPrincipal,

    matches,

    total_respondidas: respostas.length,

    total_perguntas: perguntas_quiz.length,

    vetor_usuario: userVector,

    detalhes
  });
};
