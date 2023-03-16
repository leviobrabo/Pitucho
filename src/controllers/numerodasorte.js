const emojisNumericos = [
    '0️⃣',
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
    '🔟',
  ];
  
  async function luckynumberCommand(bot, message) {
  
    const numero = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
    const emojis = numero.split('').map((algarismo) => emojisNumericos[parseInt(algarismo)]);
  
    const mensagem = `*Número da para jogar na Mega-Sena* \n\n🎰 Seu número da sorte é: ${emojis.join('')} \n\nVai apostar?😎`;
  
    bot.sendMessage(message.chat.id, mensagem, {reply_to_message_id: message.message_id, parse_mode: 'Markdown' });
  }


  module.exports = {
    luckynumberCommand
  };
  