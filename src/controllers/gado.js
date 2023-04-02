function gadoCommand(bot, message) {
    const nivelGado = Math.floor(Math.random() * 101);

    let fraseGado;
    if (nivelGado <= 10) {
        fraseGado = "Não estou sendo gado(a) com ninguém no momento.";
    } else if (nivelGado <= 20) {
        fraseGado = "gado(a)? Nunca nem fui!";
    } else if (nivelGado <= 40) {
        fraseGado = "Gado(a) nem nos sonhos kkkkk!";
    } else if (nivelGado <= 50) {
        fraseGado = "Laele, sou gado não fi!";
    } else if (nivelGado <= 70) {
        fraseGado = "Sou gadinho, meu chifres estão nascendo!";
    } else if (nivelGado <= 80) {
        fraseGado = "Estou até mugiando, muuuuuuu!";
    } else if (nivelGado <= 90) {
        fraseGado = "Não posso ver uma gadice, que já quero passar kkk!";
    } else {
        fraseGado = "Sou um gado(a) supremo!!!";
    }

    let emojiGado;
    if (nivelGado <= 20) {
        emojiGado = "😐";
    } else if (nivelGado <= 40) {
        emojiGado = "😄";
    } else if (nivelGado <= 60) {
        emojiGado = "🌚";
    } else if (nivelGado <= 80) {
        emojiGado = "👀";
    } else if (nivelGado <= 95) {
        emojiGado = "🐮";
    } else {
        emojiGado = "🐂";
    }

    let graficoGado = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelGado >= i) {
            graficoGado += "🟫";
        } else {
            graficoGado += "⬜️";
        }
    }

    const respostaGado = `*Nível de gado*\n\nA sua gadice está em ${nivelGado}%\n\n${fraseGado}${emojiGado}\n${graficoGado} *${nivelGado}%*`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostaGado, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostaGado, {
            parse_mode: "Markdown",
        });
    }
}

module.exports = {
    gadoCommand,
};
