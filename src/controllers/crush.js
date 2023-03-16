function crushCommand(bot, message) {


  const chatId = message.chat.id;
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const emojis = ['❤️', '❤️', '💘', '💕', '😍', '😘'];

  // Seleciona uma letra e um emoji aleatório
  const letra = letras.charAt(Math.floor(Math.random() * letras.length));
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  // Envia a mensagem com a letra e o emoji escolhido
  bot.sendMessage(chatId, `A primeira letra do meu crush é "${letra}" ${emoji}`, {reply_to_message_id: message.message_id, parse_mode: 'Markdown'});
}
module.exports = {
    crushCommand
  };