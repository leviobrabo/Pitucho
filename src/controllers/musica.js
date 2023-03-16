const estilosMusicais = [
    {
      nome: 'Rock',
      emoji: '🎸',
      caracteristica: 'Música com guitarras e bateria',
    },
    {
      nome: 'Pop',
      emoji: '🎤',
      caracteristica: 'Música popular e comercial',
    },
    {
      nome: 'Hip Hop',
      emoji: '🎧',
      caracteristica: 'Ritmo com batidas de rap e vocais',
    },
    {
      nome: 'Eletrônica',
      emoji: '🎧',
      caracteristica: 'Música eletrônica com batidas e sintetizadores',
    },
  ];
  
  async function musicCommand(bot, message) {

    const randomIndex = Math.floor(Math.random() * estilosMusicais.length);
    const estilo = estilosMusicais[randomIndex];
    bot.sendMessage(message.chat.id, `*🎼Seu estilo musical🎼* \n\n*Nome:* ${estilo.nome} ${estilo.emoji}  \n\n*Característica:* ${estilo.caracteristica}`, {reply_to_message_id: message.message_id, parse_mode: 'Markdown' });
  }
  
  module.exports = {
    musicCommand
  };
