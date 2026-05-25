export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  return res.status(200).json({
    api: 'Quiz Político Brasil',
    versao: '1.0.0',
    endpoints: {
      'GET /api/quiz': 'Retorna todas as perguntas e opções',
      'POST /api/resultado': 'Calcula o resultado com base nas respostas enviadas',
    },
    exemplo_post: {
      url: '/api/resultado',
      body: {
        respostas: [
          { pergunta_index: 0, opcao_index: 1 },
          { pergunta_index: 1, opcao_index: 0 },
        ],
      },
    },
  });
}
