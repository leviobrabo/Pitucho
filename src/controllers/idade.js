function ageCommand(bot, message) {
    const idade = Math.floor(Math.random() * 44) + 16;

    const resposta = `Você tem a idade de ${idade} anos.`;

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
    ageCommand,
};
