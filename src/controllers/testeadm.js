function testadmCommand(bot, message) {
    const isNameAdm = Math.random() < 0.5;
    const isPhotoAdm = Math.random() < 0.5;
    const isUsernameAdm = Math.random() < 0.5;
    const isTypingStyleAdm = Math.random() < 0.5;

    const numCategories = 4;
    const numAdmCategories =
        (isNameAdm ? 1 : 0) +
        (isPhotoAdm ? 1 : 0) +
        (isUsernameAdm ? 1 : 0) +
        (isTypingStyleAdm ? 1 : 0);
    const probability = Math.round((numAdmCategories / numCategories) * 100);

    let response2 =
        "*⚠️ Verificador de chances de ser adm ⚠️*\n\n👮‍♂️ Iniciando análise 👮‍♂️\n\n";

    response2 += `*Advertência:* ${isNameAdm ? "❌ falso" : "✅ verdadeiro"}\n`;
    response2 += `*Participação:* ${isPhotoAdm ? "❌ falso" : "✅ verdadeiro"
        }\n`;
    response2 += `*Interação:* ${isUsernameAdm ? "❌ falso" : "✅ verdadeiro"
        }\n`;
    response2 += `*Novas ideias para grupo:* ${isTypingStyleAdm ? "❌ falso" : "✅ verdadeiro"
        }\n\n`;

    response2 += `🔄Carregando informações...🔄 \n\nResultado: Existe a probabilidade de *${probability}% de você ser Adms.👀*`;

    try {
        bot.sendMessage(message.chat.id, response2, {
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
            bot.sendMessage(message.chat.id, response2, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    testadmCommand,
};
