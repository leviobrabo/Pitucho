const frutas = [
    {
      nome: 'Banana',
      emoji: '🍌',
      beneficios: 'Rica em potássio e vitaminas C e B6. Ajuda na digestão e regula o intestino.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e pode ser prejudicial para quem tem diabetes.',
      local_tipico: 'Originária do sudeste asiático, a banana é cultivada em diversas regiões tropicais do mundo.'
    },
    {
      nome: 'Maçã',
      emoji: '🍎',
      beneficios: 'Rica em fibras, vitaminas C e K. Ajuda a prevenir doenças cardíacas e melhora a digestão.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e pode ser prejudicial para quem tem diabetes.',
      local_tipico: 'A maçã é uma fruta originária do Cáucaso, mas é cultivada em diversas partes do mundo.'
    },
    {
      nome: 'Abacaxi',
      emoji: '🍍',
      beneficios: 'Rico em vitamina C e bromelina, ajuda na digestão e fortalece o sistema imunológico.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e pode ser prejudicial para quem tem problemas gastrointestinais.',
      local_tipico: 'Originário da América do Sul, o abacaxi é cultivado em diversas partes do mundo.'
    },
    {
      nome: 'Laranja',
      emoji: '🍊',
      beneficios: 'Rica em vitamina C e antioxidantes, ajuda a fortalecer o sistema imunológico e reduzir o risco de doenças crônicas.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas dentários.',
      local_tipico: 'A laranja é uma fruta originária da Ásia, mas é cultivada em diversas partes do mundo.'
    },
    {
      nome: 'Morango',
      emoji: '🍓',
      beneficios: 'Rico em vitamina C e antioxidantes, ajuda a fortalecer o sistema imunológico e reduzir o risco de doenças crônicas.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas digestivos.',
      local_tipico: 'O morango é uma fruta originária da Europa, mas é cultivado em diversas partes do mundo.'
    },
    {
      nome: 'Manga',
      emoji: '🥭',
      beneficios: 'Rica em vitamina A e antioxidantes, ajuda a manter a saúde dos olhos e da pele.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas digestivos.',
      local_tipico: 'A manga é uma fruta originária da Ásia, mas é cultivada em diversas partes do mundo.'
    },
    {
      nome: 'Kiwi',
      emoji: '🥝',
      beneficios: 'Rico em vitamina C e fibras, ajuda a melhorar a digestão e a fortalecer o sistema imunológico.',
      maleficios: 'Pode causar alergias em pessoas sensíveis e o consumo excessivo pode levar a problemas digestivos.',
      local_tipico: 'O kiwi é uma fruta originária da China, mas é cultivado em diversas partes do mundo.'
    }
  ];
  
  
  
  
  function frutCommand(bot, message) {
    const chatId = message.chat.id;
      const fruta = frutas[Math.floor(Math.random() * frutas.length)];
      const mensagem = `Sua fruta preferida é *${fruta.nome}* ${fruta.emoji}\n\n*Benefícios:* ${fruta.beneficios}\n*Malefícios:* ${fruta.maleficios}\n*Local típico:* ${fruta.local_tipico}`;
      
      bot.sendMessage(chatId, mensagem, {reply_to_message_id: message.message_id, parse_mode: 'Markdown'});
    }
  
    module.exports = {
        frutCommand
      };