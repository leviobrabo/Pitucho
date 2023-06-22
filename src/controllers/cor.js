function colorCommand(bot, message) {
    const cores = [
        "🔴 Vermelho",
        "🟠 Laranja",
        "🟡 Amarelo",
        "🟢 Verde",
        "🔵 Azul",
        "🟣 Roxo",
        "🤍 Branco",
        "🖤 Preto",
    ];

    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    const respostacor = `Sua cor preferida é ${corAleatoria}!`;
    try {
        bot.sendMessage(message.chat.id, respostacor, {

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
            bot.sendMessage(message.chat.id, respostacor, {

                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}
module.exports = {
    colorCommand,
};
