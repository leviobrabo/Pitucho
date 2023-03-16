function heightCommand(bot, message) {
    const altura = (Math.floor(Math.random() * 81) + 130) / 100; 
    const alturaEmojis = ['👶', '🧍', '👧', '👨', '🧑', '👴', '🏋️‍♂️', '🚀', '🦍', '🦒']; 
    let emoji = alturaEmojis[0];
    let frase = 'Altura abaixo da média'; 
  
    if (altura >= 1.31 && altura <= 1.40) {
      emoji = alturaEmojis[1];
      frase = 'Altura de um(a) hobbit';
    } else if (altura >= 1.41 && altura <= 1.50) {
      emoji = alturaEmojis[2];
      frase = 'Altura de uma pessoa baixa';
    } else if (altura >= 1.51 && altura <= 1.60) {
      emoji = alturaEmojis[3];
      frase = 'Altura de uma pessoa média';
    } else if (altura >= 1.61 && altura <= 1.70) {
      emoji = alturaEmojis[4];
      frase = 'Altura de uma pessoa alta';
    } else if (altura >= 1.71 && altura <= 1.80) {
      emoji = alturaEmojis[5];
      frase = 'Altura de um(a) modelo';
    } else if (altura >= 1.81 && altura <= 1.90) {
      emoji = alturaEmojis[6];
      frase = 'Altura de um(a) jogador(a) de basquete';
    } else if (altura >= 1.91 && altura <= 2.00) {
      emoji = alturaEmojis[7];
      frase = 'Altura de um(a) gigante';
    } else if (altura >= 2.01 && altura <= 2.10) {
      emoji = alturaEmojis[8];
      frase = 'Altura de um(a) titã';
    }
  
    const resposta = `*Sua altura ${emoji}* \n\nVocê mede é *${altura.toFixed(2)} m.* \n\n${frase}!`;
  
    bot.sendMessage(message.chat.id, resposta, {reply_to_message_id: message.message_id, parse_mode: 'Markdown' });
  }
  
  module.exports = {
    heightCommand
  };