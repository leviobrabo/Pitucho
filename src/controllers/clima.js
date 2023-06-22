const climas = [
    {
        nome: "Verão",
        emoji: "☀️",
        caracteristica: "Dia ensolarado e quente",
    },
    {
        nome: "Primavera",
        emoji: "🌸",
        caracteristica: "Clima agradável e florescimento da natureza",
    },
    {
        nome: "Outono",
        emoji: "🍁",
        caracteristica: "Folhas secas e clima fresco",
    },
    {
        nome: "Inverno",
        emoji: "❄️",
        caracteristica: "Neve e clima frio",
    },
];

function wheaterCommand(bot, message) {
    const randomIndex = Math.floor(Math.random() * climas.length);
    const clima = climas[randomIndex];
    const respostaclima = `*🌤Seu clima favorito🌤* \n\n*Nome:* ${clima.nome} ${clima.emoji} \n\n*Característica:* ${clima.caracteristica}`;

    try {
        bot.sendMessage(message.chat.id, respostaclima, {
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
            bot.sendMessage(message.chat.id, respostaclima, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}
module.exports = {
    wheaterCommand,
};
