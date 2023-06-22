function heightCommand(bot, message) {
    const altura = (Math.floor(Math.random() * 81) + 130) / 100;
    const alturaEmojis = [
        "👶",
        "🧍",
        "👧",
        "👨",
        "🧑",
        "👴",
        "🏋️‍♂️",
        "🚀",
        "🦍",
        "🦒",
    ];
    let emoji = alturaEmojis[0];
    let frase = "Altura abaixo da média";

    if (altura >= 1.31 && altura <= 1.4) {
        emoji = alturaEmojis[1];
        frase = "Altura de um(a) hobbit";
    } else if (altura >= 1.41 && altura <= 1.5) {
        emoji = alturaEmojis[2];
        frase = "Altura de uma pessoa baixa";
    } else if (altura >= 1.51 && altura <= 1.6) {
        emoji = alturaEmojis[3];
        frase = "Altura de uma pessoa média";
    } else if (altura >= 1.61 && altura <= 1.7) {
        emoji = alturaEmojis[4];
        frase = "Altura de uma pessoa alta";
    } else if (altura >= 1.71 && altura <= 1.8) {
        emoji = alturaEmojis[5];
        frase = "Altura de um(a) modelo";
    } else if (altura >= 1.81 && altura <= 1.9) {
        emoji = alturaEmojis[6];
        frase = "Altura de um(a) jogador(a) de basquete";
    } else if (altura >= 1.91 && altura <= 2.0) {
        emoji = alturaEmojis[7];
        frase = "Altura de um(a) gigante";
    } else if (altura >= 2.01 && altura <= 2.1) {
        emoji = alturaEmojis[8];
        frase = "Altura de um(a) titã";
    }

    const resposta = `*Sua altura ${emoji}* \n\nVocê mede é *${altura.toFixed(
        2
    )} m.* \n\n${frase}!`;

    try {
        bot.sendMessage(message.chat.id, resposta, {
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
            bot.sendMessage(message.chat.id, resposta, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    heightCommand,
};
