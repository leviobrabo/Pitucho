function angerCommand(bot, message) {
    const nivelRaiva = Math.floor(Math.random() * 101);

    let fraseRaiva;
    if (nivelRaiva <= 25) {
        fraseRaiva = "Estou calmo como um monge.";
    } else if (nivelRaiva <= 40) {
        fraseRaiva = "Não sinto raiva";
    } else if (nivelRaiva <= 60) {
        fraseRaiva = "Estou um pouco irritado.";
    } else if (nivelRaiva <= 80) {
        fraseRaiva = "Estou um muito irritado.";
    } else if (nivelRaiva <= 90) {
        fraseRaiva = "Estou bastante irritado!";
    } else {
        fraseRaiva = "Eu estou prestes a explodir!!!";
    }

    let emojiRaiva;
    if (nivelRaiva <= 25) {
        emojiRaiva = "😌";
    } else if (nivelRaiva <= 40) {
        emojiRaiva = "😐";
    } else if (nivelRaiva <= 60) {
        emojiRaiva = "😠";
    } else if (nivelRaiva <= 50) {
        emojiRaiva = "😤";
    } else if (nivelRaiva <= 75) {
        emojiRaiva = "😡";
    } else {
        emojiRaiva = "🤬";
    }

    let graficoRaiva = "";
    for (let i = 0; i < 10; i++) {
        if (nivelRaiva >= i * 10) {
            graficoRaiva += "🟧";
        } else {
            graficoRaiva += "⬜️";
        }
    }

    const respostaRaiva = `*Nível de raiva* \n\nSua raiva hoje está em ${nivelRaiva}% \n\n${fraseRaiva}${emojiRaiva}\n${graficoRaiva} *${nivelRaiva}%*`;

    try {
        bot.sendMessage(message.chat.id, respostaRaiva, {
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
            bot.sendMessage(message.chat.id, respostaRaiva, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    angerCommand,
};
