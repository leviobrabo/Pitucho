const origens = [
    {
        nome: "Pernambucano",
        emoji: "🦈",
    },
    {
        nome: "Cearense",
        emoji: "🏖️",
    },
    {
        nome: "Paraibano",
        emoji: "🦐",
    },
    {
        nome: "Potiguar",
        emoji: "🍍",
    },
    {
        nome: "Sul-Mato-Grossense",
        emoji: "🐆",
    },
    {
        nome: "Brasiliense",
        emoji: "🏛️",
    },
    {
        nome: "Capixaba",
        emoji: "🌊",
    },
    {
        nome: "Catarinense",
        emoji: "🏞️",
    },
    {
        nome: "Fluminense",
        emoji: "🌉",
    },
    {
        nome: "Goiâno",
        emoji: "🌵",
    },
    {
        nome: "Maranhense",
        emoji: "🍍",
    },
    {
        nome: "Mato-Grossense",
        emoji: "🐃",
    },
    {
        nome: "Paraense",
        emoji: "🦜",
    },
    {
        nome: "Piauiense",
        emoji: "🌵",
    },
    {
        nome: "Rio-Grandense",
        emoji: "🐎",
    },
    {
        nome: "Rondoniense",
        emoji: "🐆",
    },
    {
        nome: "Roraimense",
        emoji: "🦜",
    },
    {
        nome: "Sergipano",
        emoji: "🌊",
    },
    {
        nome: "Tocantinense",
        emoji: "🌵",
    },
    {
        nome: "Acreano",
        emoji: "🐒",
    },
    {
        nome: "Alagoano",
        emoji: "🌴",
    },
    {
        nome: "Amapaense",
        emoji: "🦜",
    },
    {
        nome: "Paranaibano",
        emoji: "🌲",
    },
    {
        nome: "Paulista",
        emoji: "🌆",
    },
];

async function originCommand(bot, message) {
    const randomIndex = Math.floor(Math.random() * origens.length);
    const origem = origens[randomIndex];

    const respostaorigem = `Sua origem é: *${origem.nome} ${origem.emoji}*`;
    try {
        bot.sendMessage(message.chat.id, respostaorigem, {
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
            bot.sendMessage(message.chat.id, respostaorigem, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    originCommand,
};
