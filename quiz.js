import perguntas_quiz from '../political_quiz.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      total: perguntas_quiz.length,
      perguntas: perguntas_quiz,
    });
  }

  return res.status(405).json({ error: 'Método não permitido.' });
}
