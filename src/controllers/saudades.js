function longingCommand(bot, message) {
    const nivelSaudades = Math.floor(Math.random() * 101);

    let fraseSaudades;
    if (nivelSaudades <= 10) {
        fraseSaudades = "Não estou sentindo saudades.";
    } else if (nivelSaudades <= 20) {
        fraseSaudades = "Saudades? O que é isso?";
    } else if (nivelSaudades <= 40) {
        fraseSaudades = "KKKKKK nem quero saber o que isso de saudades...";
    } else if (nivelSaudades <= 50) {
        fraseSaudades = "Estou neutro, quase frio...";
    } else if (nivelSaudades <= 70) {
        fraseSaudades = "Saudades de você!";
    } else if (nivelSaudades <= 80) {
        fraseSaudades = "Estou morrendo de saudades!";
    } else if (nivelSaudades <= 90) {
        fraseSaudades = "Se eu pudesse, matava a saudade agora!";
    } else {
        fraseSaudades = "Se eu pudesse, te abraçava agora!";
    }

    let emojiSaudades;
    if (nivelSaudades <= 20) {
        emojiSaudades = "😐";
    } else if (nivelSaudades <= 40) {
        emojiSaudades = "😕";
    } else if (nivelSaudades <= 60) {
        emojiSaudades = "🥺";
    } else if (nivelSaudades <= 80) {
        emojiSaudades = "😔";
    } else if (nivelSaudades <= 95) {
        emojiSaudades = "😢";
    } else {
        emojiSaudades = "😭";
    }

    let graficoSaudades = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelSaudades >= i) {
            graficoSaudades += "🟨";
        } else {
            graficoSaudades += "⬜️";
        }
    }

    const respostaSaudades = `*Nível de saudades*\n\nA sua saudades está em ${nivelSaudades}%\n\n${fraseSaudades}${emojiSaudades}\n${graficoSaudades} *${nivelSaudades}%*`;

    bot.sendMessage(message.chat.id, respostaSaudades, {
        reply_to_message_id: message.message_id,
        parse_mode: "Markdown",
    });
}

module.exports = {
    longingCommand,
};
