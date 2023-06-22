function crushCommand(bot, message) {
    const chatId = message.chat.id;
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const emojis = ["❤️", "❤️", "💘", "💕", "😍", "😘"];

    const letra = letras.charAt(Math.floor(Math.random() * letras.length));
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    const respostacrush = `A primeira letra do meu crush é "${letra}" ${emoji}`;
    try {
        bot.sendMessage(message.chat.id, respostacrush, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } catch (error) {
        if (
            error.response &&
            error.response.body &&
            error.response.body.description === "ETELEGRAM: 400 BAD REQUEST: REPLIED MESSAGE NOT FOUND"
        ) {
            console.log("Mensagem de resposta não encontrada.");
            bot.sendMessage(message.chat.id, respostacrush, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}
module.exports = {
    crushCommand,
};
