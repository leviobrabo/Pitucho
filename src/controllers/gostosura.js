function hotnessCommand(bot, message) {
    const nivelGostosura = Math.floor(Math.random() * 101);

    let mensagemGostosura;
    if (nivelGostosura <= 20) {
        mensagemGostosura = "Nada demais...";
    } else if (nivelGostosura <= 40) {
        mensagemGostosura = "Você é bonitinha(o)";
    } else if (nivelGostosura <= 60) {
        mensagemGostosura = "Você é atraente";
    } else if (nivelGostosura <= 80) {
        mensagemGostosura = "Você é muito gostosa(o)";
    } else {
        mensagemGostosura = "Você é uma deusa(dos)";
    }

    let emojiGostosura;
    if (nivelGostosura <= 20) {
        emojiGostosura = "🙄";
    } else if (nivelGostosura <= 40) {
        emojiGostosura = "😊";
    } else if (nivelGostosura <= 60) {
        emojiGostosura = "😍";
    } else if (nivelGostosura <= 80) {
        emojiGostosura = "😘";
    } else {
        emojiGostosura = "🔥";
    }

    let graficoGostosura = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelGostosura >= i) {
            graficoGostosura += "🟪";
        } else {
            graficoGostosura += "⬜";
        }
    }

    const respostaGostosura = `*Nível de gostosura*\n\nVocê é ${mensagemGostosura}${emojiGostosura}\n${graficoGostosura} *${nivelGostosura}%*`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostaGostosura, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostaGostosura, {
            parse_mode: "Markdown",
        });
    }
}

module.exports = {
    hotnessCommand,
};
