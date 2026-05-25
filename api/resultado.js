import perguntas_quiz from '../political_quiz.js';

// ===============================
// ARCHETYPES (26D VECTORS - Adjusted for 26 questions)
// ===============================
const ARCHETYPES = [
  {
    name: "Gato Patriota",
    emoji: "🏛️",
    descricao: "Defende valores tradicionais, livre mercado com Estado mínimo, segurança pública rigorosa e costumes conservadores.",
    vector: [
       1,  1, -1, 0.5,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1
    ]
  },
  {
    name: "Gato Liber",
    emoji: "🗽",
    descricao: "Máxima liberdade individual — tanto econômica quanto de costumes. Mínimo de Estado em todas as áreas.",
    vector: [
       1,  1,  1,  1,  0,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1
    ]
  },
  {
    name: "Gato Woke",
    emoji: "✊",
    descricao: "Defende ampliação do Estado de bem-estar, direitos civis progressistas, regulação da economia e combate às desigualdades.",
    vector: [
      -1, -1,  1, -1, -0.5, -1, -1, -1, -1, -0.5,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -0.5, -0.5, -1, -1, -1, -1
    ]
  },
  {
    name: "Gato Trabalhista",
    emoji: "🌿",
    descricao: "Prioriza soberania nacional, estatização de setores estratégicos e proteção social, com postura mais tradicional em costumes.",
    vector: [
      -0.5, -1,  0, -1,  0, -0.5, -1, -1, -1, -0.5,
      -0.5, -1, -1, -1, -1, -1, -1, -1, -0.5, -1,
       0,  0, -0.5, -1, -0.5, -1
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
  return Math.sqrt(v.reduce((sum, value) => sum + value * value, 0));
}

function cosineSimilarity(a, b) {
  const magA = magnitude(a);
  const magB = magnitude(b);
  if (magA === 0 || magB === 0) return 0;
  return dot(a, b) / (magA * magB);
}

// ===============================
// API HANDLER
// ===============================
export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido. Use POST.' });

  const { respostas } = req.body;

  if (!Array.isArray(respostas) || respostas.length === 0) {
    return res.status(400).json({ error: 'Envie um array "respostas".' });
  }

  const userVector = new Array(perguntas_quiz.length).fill(0);
  const detalhes = [];
  let pontuacao_total = 0;

  for (const resposta of respostas) {
    const { pergunta_index, opcao_index } = resposta;
    const pergunta = perguntas_quiz[pergunta_index];
    if (!pergunta) continue;
    const opcao = pergunta.opcoes[opcao_index];
    if (!opcao) continue;

    userVector[pergunta_index] = opcao.score;
    pontuacao_total += opcao.score;

    detalhes.push({
      pergunta: pergunta.pergunta,
      opcao_escolhida: opcao.texto,
      score: opcao.score
    });
  }

  const matches = ARCHETYPES.map(archetype => {
    const similarity = cosineSimilarity(userVector, archetype.vector);
    const compatibility = Math.max(0, similarity);
    return {
      name: archetype.name,
      emoji: archetype.emoji,
      descricao: archetype.descricao,
      similaridade_raw: Number(similarity.toFixed(4)),
      match_percent: Number((compatibility * 100).toFixed(1)) // Campo esperado pelo index.html
    };
  }).sort((a, b) => b.similaridade_raw - a.similaridade_raw);

  const resultadoPrincipal = matches[0];

  // Adicionando campos extras para compatibilidade com o index.html anterior
  return res.status(200).json({
    resultado_principal: resultadoPrincipal,
    espectro: resultadoPrincipal.name, // Campo esperado pelo index.html
    pontuacao_total: pontuacao_total, // Campo esperado pelo index.html
    matches,
    total_respondidas: respostas.length,
    total_perguntas: perguntas_quiz.length,
    detalhes
  });
}
