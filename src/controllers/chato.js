function boringCommand(bot, message) {
    const nivelchato = Math.floor(Math.random() * 101);

    let frasechato;
    if (nivelchato <= 10) {
        frasechato = "Não estou sendo chato(a) com ninguém no momento.";
    } else if (nivelchato <= 20) {
        frasechato = "Chatice? Não sou nunca!";
    } else if (nivelchato <= 40) {
        frasechato = "Estou sendo um pouco chato(a), mas prometo melhorar!";
    } else if (nivelchato <= 50) {
        frasechato = "Nem sou chato(a) e nem Legal!";
    } else if (nivelchato <= 70) {
        frasechato = "Chato mesmo, então ature ou surte!";
    } else if (nivelchato <= 80) {
        frasechato = "Chatice? É comigo mesmo!";
    } else if (nivelchato <= 90) {
        frasechato = "Estou sendo bastante chato(a) ultimamente...";
    } else {
        frasechato = "Eu sou um verdadeiro(a) chato(a), me desculpe!";
    }

    let emojichato;
    if (nivelchato <= 20) {
        emojichato = "😐";
    } else if (nivelchato <= 40) {
        emojichato = "😒";
    } else if (nivelchato <= 60) {
        emojichato = "😤";
    } else if (nivelchato <= 80) {
        emojichato = "🤨";
    } else if (nivelchato <= 95) {
        emojichato = "🙄";
    } else {
        emojichato = "🤯";
    }

    let graficochato = "";
    for (let i = 10; i <= 100; i += 10) {
        if (nivelchato >= i) {
            graficochato += "🟫";
        } else {
            graficochato += "⬜️";
        }
    }

    const respostachato = `*Nível de chatice*\n\nO meu nível de chatice está em ${nivelchato}%\n\n${frasechato}${emojichato}\n${graficochato} *${nivelchato}%*`;

    try {
        bot.sendMessage(message.chat.id, respostachato, {
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
            bot.sendMessage(message.chat.id, respostachato, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    boringCommand,
};
