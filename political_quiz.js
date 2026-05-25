const perguntas_quiz = [
 {
  pergunta: "Pergunta 1. Qual deve ser o papel das empresas estatais no Brasil?",
  opcoes: [
    { 
      texto: "A) Privatizar o máximo possível de empresas estatais.", 
      score: 1.0 
    },
    { 
      texto: "B) Privatizar parte das estatais, mas manter empresas estratégicas como Petrobrás e Banco do Brasil.", 
      score: 0.5 
    },
    { 
      texto: "C) Manter as estatais atuais como estão hoje.", 
      score: -0.5 
    },
    { 
      texto: "D) O governo deveria criar e ampliar mais empresas estatais.", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 2. Você é a favor da redução da maioridade penal para 16 anos?",
  opcoes: [
    { 
      texto: "A) Sim, para todos os crimes.", 
      score: 1.0 
    },
    { 
      texto: "B) Sim, mas apenas para crimes hediondos.", 
      score: 0 
    },
    { 
      texto: "C) Não, deve continuar como é hoje.", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 3. Como o aborto deve ser tratado no Brasil?",
  opcoes: [
    { 
      texto: "A) O aborto deve ser amplamente legalizado até 12 semanas da formação do feto. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) O aborto deve continuar permitido apenas nos casos previstos hoje em lei, como estupro e risco à vida da gestante. (0)", 
      score: 0 
    },
    { 
      texto: "C) O aborto deve ser totalmente proibido. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 4. Como deve funcionar o SUS no futuro?",
  opcoes: [
    { 
      texto: "A) Reduzir o SUS e incentivar mais planos de saúde privados, inclusive com apoio do governo. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Manter o SUS gratuito, mas com mais parceria entre governo e rede privada. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter o SUS atual, focando em melhorar a gestão e reduzir desperdícios. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "D) Aumentar os investimentos e ampliar o atendimento público e gratuito do SUS. (-1.0)", 
      score: -1.0 
    }
  ]
},
  {
  pergunta: "Pergunta 5. Qual deve ser o papel das escolas cívico-militares?",
  opcoes: [
    { 
      texto: "A) Expandir o modelo de escolas cívico-militares em todo o país. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Manter escolas cívico-militares apenas em regiões com mais violência. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Permitir o modelo como opção, mas sem prioridade do governo. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "D) Encerrar o modelo e investir apenas em escolas civis tradicionais. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 6. Como devem ser as leis trabalhistas no Brasil?",
  opcoes: [
    { 
      texto: "A) Mais liberdade para empresas e trabalhadores negociarem contratos, com pouca intervenção do governo.", 
      score: 1.0 
    },
    { 
      texto: "B) Mais flexibilidade nas contratações, mas com forte proteção social e seguro-desemprego.", 
      score: 0.5 
    },
    { 
      texto: "C) Dar mais força para acordos entre empresas e trabalhadores do que para regras gerais da lei.", 
      score: 0 
    },
    { 
      texto: "D) Manter a CLT quase como está hoje, com pequenas mudanças. ", 
      score: -0.5 
    },
    { 
      texto: "E) Reforçar a CLT, ampliando direitos e proteções aos trabalhadores.", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 7. Como o Brasil deve explorar minerais estratégicos, como terras-raras?",
  opcoes: [
    { 
      texto: "A) Abrir o setor para empresas privadas e investimento estrangeiro, com pouca intervenção do governo. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Permitir empresas privadas, mas com forte fiscalização e participação estratégica do Estado. (0)", 
      score: 0 
    },
    { 
      texto: "C) Deixar a exploração principalmente nas mãos de empresas estatais e sob controle nacional. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 8. Qual deve ser o papel do ensino religioso na educação brasileira?",
  opcoes: [
    { 
      texto: "A) O governo deve financiar bolsas em escolas religiosas privadas para ampliar a liberdade de escolha das famílias. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) O ensino religioso deve ter mais espaço nas escolas públicas, mas sem ser obrigatório. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) O ensino religioso pode existir, mas deve ser pago apenas pelas famílias e instituições privadas. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "D) O governo não deve financiar nem ampliar o ensino religioso na educação. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 9. O Brasil deve adotar prisão perpétua para crimes graves?",
  opcoes: [
    { 
      texto: "A) Sim, para crimes hediondos de extrema gravidade. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Não, as penas devem ter limite. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 10. Como o Brasil deve lidar com redes sociais, fake news e liberdade de expressão?",
  opcoes: [
    { 
      texto: "A) Priorizar ampla liberdade de expressão, com punição apenas para crimes concretos e objetivos previstos em lei (como ameaças e exploração infantil), sem controle sobre opiniões.", 
      score: 1.0 
    },
    { 
      texto: "B) Ter liberdade de expressão, com fiscalização estatal limitada para coibir apenas conteúdos claramente ilegais ou de alto risco.", 
      score: 0.5 
    },
    { 
      texto: "C) Ampliar a regulação das plataformas para reduzir desinformação e conteúdos considerados prejudiciais, com maior atuação do Estado.", 
      score: -0.5 
    },
    { 
      texto: "D) Dar amplo poder ao Estado e ao Judiciário para remover conteúdos e combater fake news de forma mais ativa. ", 
      score: -1.0 
    }
  ]
},
 {
  pergunta: "Pergunta 11. Como deve ser o papel do Judiciário no Brasil?",
  opcoes: [
    { 
      texto: "A) O Congresso deve ter mais poder que o STF em decisões políticas. Ministros teriam mandatos temporários. ", 
      score: 1.0 
    },
    { 
      texto: "B) O Judiciário deve interferir menos em decisões do Congresso e do governo, atuando mais na aplicação técnica da lei.", 
      score: 0.5 
    },
    { 
      texto: "C) Manter o modelo atual, com equilíbrio entre os poderes e o STF fazendo controle da Constituição.", 
      score: 0 
    },
    { 
      texto: "D) O Judiciário deve ter mais força para revisar leis e proteger direitos, com STF mais atuante.", 
      score: -0.5 
    },
    { 
      texto: "E) O Judiciário deve poder intervir mais em políticas públicas e decisões do Congresso quando achar necessário.", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 12. Qual deve ser a política de impostos e gastos públicos no Brasil?",
  opcoes: [
    { 
      texto: "A) Reduzir fortemente impostos e gastos públicos, com menor atuação do Estado na economia e foco em equilíbrio fiscal. ", 
      score: 1.0 
    },
    { 
      texto: "B) Reduzir impostos aos poucos e cortar alguns gastos, mantendo serviços essenciais e controle fiscal flexível. ", 
      score: 0.5 
    },
    { 
      texto: "C) Manter impostos e gastos como estão, focando em melhorar a eficiência do gasto público.", 
      score: 0 
    },
    { 
      texto: "D) Aumentar impostos sobre altas rendas e empresas para ampliar serviços públicos e investimentos sociais. ", 
      score: -0.5 
    },
    { 
      texto: "E) Aumentar bastante impostos e gastos públicos para expandir o Estado e reduzir desigualdades. ", 
      score: -1.0 
    }
  ]
},
 {
  pergunta: "Pergunta 13. Como o Brasil deve financiar e manter as rodovias?",
  opcoes: [
    { 
      texto: "A) Ampliar concessões privadas, com pedágios em grande parte das rodovias e gestão principalmente privada.", 
      score: 1.0 
    },
    { 
      texto: "B) Modelo misto, com parcerias público-privadas e pedágios apenas em rodovias de maior uso.", 
      score: 0 
    },
    { 
      texto: "C) Financiamento principalmente público, com o Estado responsável pela construção e manutenção e pouca cobrança de pedágios.", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 14. Qual deve ser a política do Brasil para o Bolsa Família e outros programas de renda?",
  opcoes: [
    { 
      texto: "A) Reduzir ou substituir o Bolsa Família por políticas de emprego e incentivo ao trabalho. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Reduzir gradualmente o programa, focando mais na inserção das pessoas no mercado de trabalho. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter o programa como está, com ajustes e controle contra fraudes. (0)", 
      score: -0.5 
    },
    { 
      texto: "D) Ampliar o programa, aumentando cobertura e valores para mais famílias. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 15. Qual deve ser a política do Brasil sobre posse e porte de armas por civis?",
  opcoes: [
    { 
      texto: "A) Ampliar o acesso à posse e ao porte de armas, com menos burocracia e mais liberdade para cidadãos sem antecedentes. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Facilitar a posse e o porte em casos específicos, com critérios mais flexíveis, mas mantendo controle estatal. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter as regras atuais de posse e porte de armas. (0)", 
      score: 0 
    },
    { 
      texto: "D) Endurecer as regras para porte e manter a posse mais restrita. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "E) Restringir fortemente a posse e proibir o porte para civis. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 16. Qual deve ser o papel do governo na regulação de preços de itens essenciais?",
  opcoes: [
    { 
      texto: "A) O governo não deve interferir nos preços, deixando o mercado definir valores mesmo em altas. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) O governo deve intervir apenas em crises ou situações excepcionais para estabilizar preços. (0)", 
      score: 0 
    },
    { 
      texto: "C) O governo deve controlar ou regular continuamente preços de itens essenciais para garantir valores mais baixos. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 17. Como deve ser a gestão e o financiamento das universidades públicas no Brasil?",
  opcoes: [
    { 
      texto: "A) Transformar universidades públicas em instituições privadas, com cobrança de mensalidade e gestão independente do Estado, usando vouchers para acesso. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Transformar universidades em empresas públicas, com maior autonomia administrativa e possibilidade de financiamento misto e cobrança proporcional à renda. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter as universidades como fundações públicas, com gratuidade e financiamento estatal principal, mas com maior flexibilidade de gestão. (0)", 
      score: -0.5 
    },
    { 
      texto: "D) Reforçar o modelo de autarquias públicas, com financiamento direto do Estado e menor abertura a parcerias e mecanismos privados de financiamento. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 18. Qual deve ser a política de cotas em universidades e concursos públicos?",
  opcoes: [
    { 
      texto: "A) Encerrar as cotas e usar apenas critérios de desempenho e provas. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Manter cotas principalmente por renda e escola pública, com revisão periódica e redução gradual das cotas por identidade. (0)", 
      score: 0 
    },
    { 
      texto: "C) Ampliar e manter cotas por critérios raciais, étnicos e de identidade como política permanente de inclusão. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 19. Como deve funcionar a administração pública no Brasil em relação à burocracia, concursos e estabilidade?",
  opcoes: [
    { 
      texto: "A) Reduzir a burocracia, flexibilizar contratações e demissões e focar em desempenho e eficiência, com menos estabilidade. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Modernizar a gestão pública com digitalização e avaliação de desempenho, mantendo estabilidade apenas em funções essenciais. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter o modelo atual de concursos e estabilidade, com ajustes para melhorar eficiência. (0)", 
      score: 0 
    },
    { 
      texto: "D) Reforçar concursos e estabilidade como base do serviço público, ampliando carreiras e estrutura estatal. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "E) Expandir o funcionalismo público e a burocracia estatal para aumentar a atuação direta do Estado. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 20. Como o Brasil deve equilibrar meio ambiente e agronegócio?",
  opcoes: [
    { 
      texto: "A) Priorizar o agronegócio, com regras ambientais mais flexíveis e licenciamento mais rápido para aumentar produção e exportações. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Buscar equilíbrio entre produção agrícola e proteção ambiental, com regras ambientais mais flexíveis, mas com controle básico. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter as regras ambientais atuais, equilibrando preservação e produção agrícola sem mudanças estruturais. (0)", 
      score: 0 
    },
    { 
      texto: "D) Priorizar fortemente a preservação ambiental, com regras mais rígidas e maior controle sobre expansão agrícola em áreas sensíveis. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 21. Qual deve ser a orientação da política externa do Brasil em relação a alianças e comércio internacional?",
  opcoes: [
    { 
      texto: "A) Alinhamento mais próximo com países desenvolvidos da OCDE, buscando integração econômica e diplomática mais intensa com EUA, Europa e Japão. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Política externa pragmática, com aproximação de países desenvolvidos, mas mantendo autonomia para parcerias com outros países quando for vantajoso. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Diplomacia equilibrada entre países desenvolvidos e em desenvolvimento, mantendo neutralidade e autonomia nas decisões. (0)", 
      score: 0 
    },
    { 
      texto: "D) Priorizar relações com países em desenvolvimento e blocos como o BRICS, reduzindo a dependência de EUA e Europa. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "E) Reduzir fortemente a participação em acordos e blocos internacionais, com foco principalmente no mercado interno. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 22. Qual deve ser a política do Brasil em relação à maconha (uso recreativo e medicinal)?",
  opcoes: [
    { 
      texto: "A) Legalização ampla e modelo liberal de mercado, com produção, venda e consumo regulados de forma leve pelo Estado. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Legalização com forte controle estatal, com regras rígidas de produção e distribuição. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Descriminalização do uso recreativo e liberação controlada do uso medicinal. (0)", 
      score: 0 
    },
    { 
      texto: "D) Aumentar a repressão ao tráfico e ao uso recreativo, com penas mais severas. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "E) Proibição total e política de repressão ao uso e circulação da substância. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 23. Qual deve ser a política do Brasil em relação ao Bitcoin e ao mercado de criptomoedas?",
  opcoes: [
    { 
      texto: "A) Livre mercado para criptomoedas, com mínima regulação estatal, aceitando uso amplo (inclusive para pagamentos e pagamento de impostos), com regras claras para ativos apreendidos (não vendidos até trânsito em julgado) e possibilidade de formação de reserva estratégica pelo Banco Central em Bitcoin. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Regulação intermediária, com regras claras para exchanges, tributação e prevenção de crimes financeiros, mantendo equilíbrio entre liberdade de uso e supervisão estatal. (0)", 
      score: 0 
    },
    { 
      texto: "C) Forte controle estatal sobre criptomoedas, com restrições ao uso e negociação, priorizando o sistema financeiro tradicional e limitando a circulação do Bitcoin. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 24. Qual deve ser o modelo de atuação do Banco Central do Brasil?",
  opcoes: [
    { 
      texto: "A) Manter a independência do Banco Central, com foco em controle da inflação e estabilidade do sistema financeiro, com menor interferência política. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Retornar a um modelo com maior influência do governo, priorizando crescimento econômico e combate ao desemprego. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 25. Qual deve ser o modelo de votação nas eleições brasileiras?",
  opcoes: [
    { 
      texto: "A) Voto totalmente eletrônico, sem impressão, com auditoria digital das urnas. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Voto eletrônico com comprovante impresso para conferência e auditoria. (0)", 
      score: 0 
    },
    { 
      texto: "C) Voto em papel ou contagem manual, priorizando verificação física dos resultados. (-1.0)", 
      score: -1.0 
    }
  ]
},
{
  pergunta: "Pergunta 26. Qual deve ser o modelo da previdência social no Brasil?",
  opcoes: [
    { 
      texto: "A) Sistema de capitalização individual, em que cada trabalhador acumula sua própria aposentadoria, com o Estado garantindo apenas renda mínima na velhice. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Capitalização administrada pelo governo, com contas individuais geridas pelo Estado com base nas contribuições de cada pessoa. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) Manter o sistema atual do INSS, com ajustes para melhorar regras e reduzir déficits. (-0.5)", 
      score: -0.5 
    },
    { 
      texto: "D) Ampliar a previdência pública, aumentando benefícios e a participação do Estado no financiamento das aposentadorias. (-1.0)", 
      score: -1.0 
    }
  ]
},

{
  pergunta: "Pergunta 27. Qual deve ser a política do Brasil em relação às facções criminosas?",
  opcoes: [
    { 
      texto: "A) Tratar facções criminosas como organizações terroristas, aplicando leis de segurança nacional e combate máximo do Estado.", 
      score: 1.0 
    },
    { 
      texto: "B) Manter combate rígido às facções com legislação específica (como leis antifacção), sem enquadrá-las como terrorismo.", 
      score: 0 
    },
    { 
      texto: "C) Tratar facções como organizações criminosas comuns, aplicando leis penais padrão sem endurecimento específico.", 
      score: -1.0 
    }
  ]
},

{
  pergunta: "Pergunta 28. Qual deve ser a política do Brasil sobre exploração de petróleo na Amazônia e no litoral?",
  opcoes: [
    { 
      texto: "A) Expandir fortemente a exploração de petróleo para aumentar crescimento econômico e arrecadação, mesmo em áreas ambientalmente sensíveis. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Permitir exploração com forte regulação ambiental e estudos de impacto, equilibrando economia e meio ambiente. (0)", 
      score: 0 
    },
    { 
      texto: "C) Restringir fortemente a exploração de petróleo em áreas sensíveis, priorizando preservação ambiental e transição energética. (-1.0)", 
      score: -1.0 
    }
  ]
},

{
  pergunta: "Pergunta 29. O que o Brasil deve fazer para melhorar as oportunidades para os jovens?",
  opcoes: [
    { 
      texto: "A) Reduzir burocracia e impostos para facilitar empregos, empreendedorismo e entrada dos jovens no mercado de trabalho. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) Combinar incentivos ao emprego com programas de educação, estágio e qualificação profissional para jovens. (0)", 
      score: 0 
    },
    { 
      texto: "C) Ampliar programas sociais, bolsas e apoio estatal como principal forma de garantir oportunidades para os jovens. (-1.0)", 
      score: -1.0 
    }
  ]
}

{
  pergunta: "Pergunta 30. Qual deve ser a postura do Brasil em relação à natalidade (ter filhos)?",
  opcoes: [
    { 
      texto: "A) O Estado deve incentivar fortemente a natalidade, com subsídios, benefícios e políticas culturais para estimular famílias a terem mais filhos. (+1.0)", 
      score: 1.0 
    },
    { 
      texto: "B) O Estado deve incentivar moderadamente a natalidade, com apoio às famílias e educação sobre planejamento familiar. (+0.5)", 
      score: 0.5 
    },
    { 
      texto: "C) O Estado deve ser neutro, sem incentivar nem desincentivar a natalidade, focando apenas em planejamento familiar e serviços básicos. (0)", 
      score: -0.5 
    },
    { 
      texto: "D) O Estado deve evitar incentivar a natalidade e priorizar políticas de redução do crescimento populacional, com foco em sustentabilidade e controle demográfico. (-1.0)", 
      score: -1.0 
    }
  ]
}




];

module.exports = perguntas_quiz;
