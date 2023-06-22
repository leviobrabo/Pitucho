function sexCommand(bot, message) {
    const nivelPotencial = Math.floor(Math.random() * 101);

    let frasePotencial;
    if (nivelPotencial <= 10) {
        frasePotencial = "Hoje eu tô cansado, acho que não rola.";
    } else if (nivelPotencial <= 30) {
        frasePotencial = "Talvez eu esteja um pouco enferrujado.";
    } else if (nivelPotencial <= 50) {
        frasePotencial = "Eu tô mais ou menos, pode ser que role.";
    } else if (nivelPotencial <= 70) {
        frasePotencial = "Hoje eu tô bem, acho que pode ser bom.";
    } else if (nivelPotencial <= 90) {
        frasePotencial = "Eu tô muito animado, vai ser ótimo!";
    } else {
        frasePotencial = "Eu tô pronto para arrasar na cama!";
    }

    let emojiPotencial;
    if (nivelPotencial <= 20) {
        emojiPotencial = "😕";
    } else if (nivelPotencial <= 40) {
        emojiPotencial = "😏";
    } else if (nivelPotencial <= 60) {
        emojiPotencial = "😍";
    } else if (nivelPotencial <= 80) {
        emojiPotencial = "😈";
    } else {
        emojiPotencial = "🔥";
    }

    let graficoPotencial = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelPotencial >= i) {
            graficoPotencial += "🟥";
        } else {
            graficoPotencial += "⬜️";
        }
    }

    const respostaPotencial = `*Potencial na cama*\n\nO seu potencial na cama está em ${nivelPotencial}%\n\n${frasePotencial}${emojiPotencial}\n${graficoPotencial} *${nivelPotencial}%*`;

    try {
        bot.sendMessage(message.chat.id, respostaPotencial, {
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
            bot.sendMessage(message.chat.id, respostaPotencial, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    sexCommand,
};
