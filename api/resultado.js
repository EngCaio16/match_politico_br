import perguntas_quiz from '../political_quiz.js';

// ===============================
// TOTAL DE DIMENSÕES
// ===============================
const TOTAL_QUESTOES = perguntas_quiz.length;

// ===============================
// HELPER
// Completa vetor automaticamente
// ===============================
function normalizeVector(vector) {

  // Clona
  const v = [...vector];

  // Completa com zeros
  while (v.length < TOTAL_QUESTOES) {
    v.push(0);
  }

  // Corta excesso
  return v.slice(0, TOTAL_QUESTOES);
}

// ===============================
// ARCHETYPES
// ===============================
const ARCHETYPES = [
  {
    name: "Gato Patriota",
    emoji: "🏛️",
    descricao:
      "Defende valores tradicionais, livre mercado, segurança rígida e costumes conservadores.",

    vector: normalizeVector([
       1,  1, -1, 0.5,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,

     
       1, 1, 1, 1
    ])
  },

  {
    name: "Gato Liber",
    emoji: "🗽",
    descricao:
      "Máxima liberdade individual e econômica. Estado mínimo.",

    vector: normalizeVector([
       1,  1,  1,  1,  0,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
       1,  1,  1,  1,  1,  1,

       1, 1, 1, 1
    ])
  },

  {
    name: "Gato Woke",
    emoji: "✊",
    descricao:
      "Estado forte, pautas progressistas e redução das desigualdades.",

    vector: normalizeVector([
      -1, -1,  1, -1, -0.5, -1, -1, -1, -1, -0.5,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -0.5, -0.5, -1, -1, -1, -1,

      -1, -1, -1, -1
    ])
  },

  {
    name: "Gato Trabalhista",
    emoji: "🌿",
    descricao:
      "Nacionalismo econômico, proteção social e soberania nacional.",

    vector: normalizeVector([
      -0.5, -1,  0, -1,  0, -0.5, -1, -1, -1, -0.5,
      -0.5, -1, -1, -1, -1, -1, -1, -1, -0.5, -1,
       0,  0, -0.5, -1, -0.5, -1,

      
       -0.5, -0.5, -1, -1
    ])
  }
];
