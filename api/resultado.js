const perguntas_quiz = require('../political_quiz.js');

const TOTAL_QUESTOES = perguntas_quiz.length;

function normalizeVector(vector) {
  const v = [...vector];
  while (v.length < TOTAL_QUESTOES) v.push(0);
  return v.slice(0, TOTAL_QUESTOES);
}

const ARCHETYPES = [
  {
    name: "Gato Patriota", emoji: "🏛️",
    descricao: "Defende valores tradicionais, livre mercado, segurança rígida e costumes conservadores.",
    vector: normalizeVector([ 1, 1,-1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ])
  },
  {
    name: "Gato Liber", emoji: "🗽",
    descricao: "Máxima liberdade individual e econômica. Estado mínimo.",
    vector: normalizeVector([ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ])
  },
  {
    name: "Gato Woke", emoji: "✊",
    descricao: "Estado forte, pautas progressistas e redução das desigualdades.",
    vector: normalizeVector([-1,-1, 1,-1,-0.5,-1,-1,-1,-1,-0.5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-0.5,-0.5,-1,-1,-1,-1,-1,-1,-1,-1])
  },
  {
    name: "Gato Trabalhista", emoji: "🌿",
    descricao: "Nacionalismo econômico, proteção social e soberania nacional.",
    vector: normalizeVector([-0.5,-1, 0,-1, 0,-0.5,-1,-1,-1,-0.5,-0.5,-1,-1,-1,-1,-1,-1,-1,-0.5,-1, 0, 0,-0.5,-1,-0.5,-1,-0.5,-0.5,-1,-1])
  }
];

function cosineSimilarity(a, b) {
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });

  const { respostas } = req.body;
  if (!respostas || !Array.isArray(respostas))
    return res.status(400).json({ error: 'Campo "respostas" ausente ou inválido.' });

  const userVector = new Array(TOTAL_QUESTOES).fill(0);
  respostas.forEach(({ pergunta_index, opcao_index }) => {
    const pergunta = perguntas_quiz[pergunta_index];
    if (!pergunta) return;
    const opcao = pergunta.opcoes[opcao_index];
    if (!opcao) return;
    userVector[pergunta_index] = opcao.score;
  });

  const matches = ARCHETYPES.map(arch => {
    const sim = cosineSimilarity(userVector, arch.vector);
    return {
      name: arch.name,
      emoji: arch.emoji,
      descricao: arch.descricao,
      match_percent: parseFloat((((sim + 1) / 2) * 100).toFixed(1)),
    };
  }).sort((a, b) => b.match_percent - a.match_percent);

  return res.status(200).json({ matches });
};
