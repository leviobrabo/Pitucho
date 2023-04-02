function testbanCommand(bot, message) {
    const isNameBan = Math.random() < 0.5;
    const isPhotoBan = Math.random() < 0.5;
    const isUsernameBan = Math.random() < 0.5;
    const isTypingStyleBan = Math.random() < 0.5;

    const numCategories = 4;
    const numBanCategories =
        (isNameBan ? 1 : 0) +
        (isPhotoBan ? 1 : 0) +
        (isUsernameBan ? 1 : 0) +
        (isTypingStyleBan ? 1 : 0);
    const probability = Math.round((numBanCategories / numCategories) * 100);

    let response1 =
        "*⚠️ Verificador de Banimento ⚠️*\n\n👮‍♂️ Iniciando análise 👮‍♂️\n\n";

    response1 += `*Advertência:* ${isNameBan ? "❌ falso" : "✅ verdadeiro"}\n`;
    response1 += `*Mute:* ${isPhotoBan ? "❌ falso" : "✅ verdadeiro"}\n`;
    response1 += `*Kick:* ${isUsernameBan ? "❌ falso" : "✅ verdadeiro"}\n`;
    response1 += `*Forma de escrever:* ${
        isTypingStyleBan ? "❌ falso" : "✅ verdadeiro"
    }\n\n`;

    response1 += `🔄Carregando informações...🔄 \n\nResultado: Existe a probabilidade de *${probability}% de você ser Banida.👀*`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, response1, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, response1, {
            parse_mode: "Markdown",
        });
    }
}
module.exports = {
    testbanCommand,
};
