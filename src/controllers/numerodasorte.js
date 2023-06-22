const emojisNumericos = [
    "0️⃣",
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "🔟",
];

async function luckynumberCommand(bot, message) {
    const numero = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");

    const emojis = numero
        .split("")
        .map((algarismo) => emojisNumericos[parseInt(algarismo)]);

    const mensagem = `*Número da para jogar na Mega-Sena* \n\n🎰 Seu número da sorte é: ${emojis.join(
        ""
    )} \n\nVai apostar?😎`;

    try {
        bot.sendMessage(message.chat.id, mensagem, {
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
            bot.sendMessage(message.chat.id, mensagem, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    luckynumberCommand,
};
