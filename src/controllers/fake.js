function fakeCommand(bot, message) {
    const isNameFake = Math.random() < 0.5;
    const isPhotoFake = Math.random() < 0.5;
    const isUsernameFake = Math.random() < 0.5;
    const isTypingStyleFake = Math.random() < 0.5;

    const numCategories = 4;
    const numFakeCategories =
        (isNameFake ? 1 : 0) +
        (isPhotoFake ? 1 : 0) +
        (isUsernameFake ? 1 : 0) +
        (isTypingStyleFake ? 1 : 0);
    const probability = Math.round((numFakeCategories / numCategories) * 100);

    let response = "*⚠️ Verificador de fake ⚠️*\n\n👮‍♂️ Iniciando análise 👮‍♂️\n\n";

    response += `*Nome:* ${isNameFake ? "❌ falso" : "✅ verdadeiro"}\n`;
    response += `*Foto:* ${isPhotoFake ? "❌ falsa" : "✅ verdadeira"}\n`;
    response += `*Username:* ${
        isUsernameFake ? "❌ falso" : "✅ verdadeiro"
    }\n`;
    response += `*Forma de escrever:* ${
        isTypingStyleFake ? "❌ falsa" : "✅ verdadeira"
    }\n\n`;

    response += `Resultado: Existe a probabilidade de *${probability}% de você ser fake.👀*`;

    bot.sendMessage(message.chat.id, response, {
        reply_to_message_id: message.message_id,
        parse_mode: "Markdown",
    });
}

module.exports = {
    fakeCommand,
};
