function colorCommand(bot, message) {
    // Lista de cores preferidas
    const cores = ['🔴 Vermelho', '🟠 Laranja', '🟡 Amarelo', '🟢 Verde', '🔵 Azul', '🟣 Roxo', '🤍 Branco', '🖤 Preto'];
  
    // Escolhe uma cor aleatória
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  
    // Envia a mensagem de resposta com a cor escolhida
    bot.sendMessage(message.chat.id, `Sua cor preferida é ${corAleatoria}!`, {reply_to_message_id: message.message_id, parse_mode: 'Markdown'});
  }
  module.exports = {
    colorCommand
  };