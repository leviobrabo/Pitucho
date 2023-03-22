function ageCommand(bot, message) {
    const idade = Math.floor(Math.random() * 44) + 16;

    const resposta = `Você tem a idade de ${idade} anos.`;

    bot.sendMessage(message.chat.id, resposta, {
        reply_to_message_id: message.message_id,
        parse_mode: "Markdown",
    });
}

module.exports = {
    ageCommand,
};
