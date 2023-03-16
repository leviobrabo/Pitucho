function happinessCommand(bot, message) {
    const felicidade = Math.floor(Math.random() * 101);
  
    let frase;
    if (felicidade <= 20) {
      frase = 'Estou me sentindo um pouco triste hoje...';
    } else if (felicidade <= 40) {
      frase = 'Não estou muito feliz...';
    } else if (felicidade <= 60) {
      frase = 'Estou me sentindo feliz.';
    } else if (felicidade <= 80) {
      frase = 'Estou me sentindo muito feliz!';
    } else {
      frase = 'Estou me sentindo extremamente feliz!!!';
    }
  
    let emoji;
    if (felicidade <= 20) {
      emoji = '😔';
    } else if (felicidade <= 40) {
      emoji = '😕';
    } else if (felicidade <= 60) {
      emoji = '😊';
    } else if (felicidade <= 80) {
      emoji = '😃';
    } else {
      emoji = '😃';
    }
  
    let grafico = '';
    for (let i = 0; i < 10; i++) {
      if (felicidade >= i * 10) {
        grafico += '🟩';
      } else {
        grafico += '⬜️';
      }
    }
  
    const resposta = `*Nível de Felicidade* \n\nSua felicidade hoje está em ${felicidade}% \n\n${frase}${emoji}\n${grafico} *${felicidade}%*`;
  
    bot.sendMessage(message.chat.id, resposta, { reply_to_message_id: message.message_id, parse_mode: 'Markdown' });
  }
  
  module.exports = {
    happinessCommand
  };
  