function crushCommand(bot, message) {
    const chatId = message.chat.id;
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const emojis = ["❤️", "❤️", "💘", "💕", "😍", "😘"];

    const letra = letras.charAt(Math.floor(Math.random() * letras.length));
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    const respostacrush = `A primeira letra do meu crush é "${letra}" ${emoji}`;
    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostacrush, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostacrush, {
            parse_mode: "Markdown",
        });
    }
}
module.exports = {
    crushCommand,
};
