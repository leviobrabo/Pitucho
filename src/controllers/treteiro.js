function treteiroCommand(bot, message) {
    const nivelTreteiro = Math.floor(Math.random() * 101);

    let fraseTreteiro;
    if (nivelTreteiro <= 10) {
        fraseTreteiro = "Nada de treta hoje, estou tranquilo.";
    } else if (nivelTreteiro <= 30) {
        fraseTreteiro = "Hoje não estou muito a fim de treta.";
    } else if (nivelTreteiro <= 50) {
        fraseTreteiro =
            "Eu até poderia arranjar uma treta, mas tô com preguiça.";
    } else if (nivelTreteiro <= 70) {
        fraseTreteiro = "Estou um pouco treteiro hoje.";
    } else if (nivelTreteiro <= 90) {
        fraseTreteiro = "Hoje é dia de treta!";
    } else {
        fraseTreteiro = "Estou pronto para a guerra das tretas!";
    }

    let emojiTreteiro;
    if (nivelTreteiro <= 20) {
        emojiTreteiro = "😐";
    } else if (nivelTreteiro <= 40) {
        emojiTreteiro = "😏";
    } else if (nivelTreteiro <= 60) {
        emojiTreteiro = "😈";
    } else if (nivelTreteiro <= 80) {
        emojiTreteiro = "👹";
    } else {
        emojiTreteiro = "💣";
    }

    let graficoTreteiro = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelTreteiro >= i) {
            graficoTreteiro += "⚫";
        } else {
            graficoTreteiro += "⚪";
        }
    }

    const respostaTreteiro = `*Nível de treteiro(a)*\n\nO seu nível de treteiro(a) está em ${nivelTreteiro}%\n\n${fraseTreteiro}${emojiTreteiro}\n${graficoTreteiro} *${nivelTreteiro}%*`;

    bot.sendMessage(message.chat.id, respostaTreteiro, {
        reply_to_message_id: message.message_id,
        parse_mode: "Markdown",
    });
}

module.exports = {
    treteiroCommand,
};
