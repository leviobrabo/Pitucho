function lovelingCommand(bot, message) {
    const nivelPaixao = Math.floor(Math.random() * 101);

    let frasePaixao;
    if (nivelPaixao <= 20) {
        frasePaixao = "Não estou apaixonado(a) por ninguém no momento.";
    } else if (nivelPaixao <= 40) {
        frasePaixao = "Estou começando a sentir algo por alguém.";
    } else if (nivelPaixao <= 60) {
        frasePaixao = "Só penso nele(a), afs.";
    } else if (nivelPaixao <= 80) {
        frasePaixao =
            "Já não sai da minha mente, to bobinho(a) de apaxionado(a).";
    } else if (nivelPaixao <= 90) {
        frasePaixao = "Estou completamente apaixonado(a)!";
    } else {
        frasePaixao =
            "Eu nunca me senti assim antes, estou perdidamente apaixonado(a)!!!";
    }

    let emojiPaixao;
    if (nivelPaixao <= 20) {
        emojiPaixao = "😐";
    } else if (nivelPaixao <= 40) {
        emojiPaixao = "😻";
    } else if (nivelPaixao <= 60) {
        emojiPaixao = "😍";
    } else if (nivelPaixao <= 80) {
        emojiPaixao = "💗";
    } else if (nivelPaixao <= 75) {
        emojiPaixao = "❤️‍🔥";
    } else {
        emojiPaixao = "💘";
    }

    let graficoPaixao = "";
    for (let i = 0; i < 10; i++) {
        if (nivelPaixao >= i * 10) {
            graficoPaixao += "🟥";
        } else {
            graficoPaixao += "⬜️";
        }
    }

    const respostaPaixao = `*Nível de paixão*\n\nO meu nível de paixão está em ${nivelPaixao}%\n\n${frasePaixao}${emojiPaixao}\n${graficoPaixao} *${nivelPaixao}%*`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostaPaixao, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostaPaixao, {
            parse_mode: "Markdown",
        });
    }
}

module.exports = {
    lovelingCommand,
};
