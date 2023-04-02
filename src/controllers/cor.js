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
    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostacor, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostacor, {
            parse_mode: "Markdown",
        });
    }
}
module.exports = {
    colorCommand,
};
