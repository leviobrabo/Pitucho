function jealousyCommand(bot, message) {
    const nivelCiumes = Math.floor(Math.random() * 101);

    let fraseCiumes;
    if (nivelCiumes <= 10) {
        fraseCiumes = "Não estou sentindo ciúmes.";
    } else if (nivelCiumes <= 20) {
        fraseCiumes = "Ciúmes? Eu? Claro que não!";
    } else if (nivelCiumes <= 40) {
        fraseCiumes = "Não é ciúmes, é preocupação.";
    } else if (nivelCiumes <= 50) {
        fraseCiumes = "Não estou com ciúmes, só achei estranho...";
    } else if (nivelCiumes <= 70) {
        fraseCiumes = "Estou com ciúmes, mas não vou admitir.";
    } else if (nivelCiumes <= 80) {
        fraseCiumes = "Estou com ciúmes, mas não quero te sufocar.";
    } else if (nivelCiumes <= 90) {
        fraseCiumes = "Estou morrendo de ciúmes!";
    } else {
        fraseCiumes = "Se eu pudesse, te trancava em casa!";
    }

    let emojiCiumes;
    if (nivelCiumes <= 20) {
        emojiCiumes = "😐";
    } else if (nivelCiumes <= 40) {
        emojiCiumes = "😕";
    } else if (nivelCiumes <= 60) {
        emojiCiumes = "😠";
    } else if (nivelCiumes <= 80) {
        emojiCiumes = "🤬";
    } else if (nivelCiumes <= 95) {
        emojiCiumes = "😡";
    } else {
        emojiCiumes = "💢";
    }

    let graficoCiumes = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelCiumes >= i) {
            graficoCiumes += "🔴";
        } else {
            graficoCiumes += "⚪";
        }
    }

    const respostaCiumes = `*Nível de ciúmes*\n\nO seu ciúme está em ${nivelCiumes}%\n\n${fraseCiumes}${emojiCiumes}\n${graficoCiumes} *${nivelCiumes}%*`;

    try {
        bot.sendMessage(message.chat.id, respostaCiumes, {
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
            bot.sendMessage(message.chat.id, respostaCiumes, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    jealousyCommand,
};
