const atores = [
    {
        nome: "Meryl Streep",
        idade: 72,
        filmes: ["O Diabo Veste Prada", "Kramer vs. Kramer", "A Dama de Ferro"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Tom Hanks",
        idade: 65,
        filmes: ["Forrest Gump", "Náufrago", "O Resgate do Soldado Ryan"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Leonardo DiCaprio",
        idade: 47,
        filmes: ["O Lobo de Wall Street", "Titanic", "O Regresso"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Emma Stone",
        idade: 33,
        filmes: ["La La Land", "Birdman", "As Serviçais"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Denzel Washington",
        idade: 67,
        filmes: ["Dia de Treinamento", "Malcolm X", "Um Limite Entre Nós"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Cate Blanchett",
        idade: 52,
        filmes: ["Blue Jasmine", "O Aviador", "Elizabeth"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Robert De Niro",
        idade: 78,
        filmes: [
            "Taxi Driver",
            "O Poderoso Chefão Parte II",
            "Touro Indomável",
        ],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Joaquin Phoenix",
        idade: 47,
        filmes: ["Coringa", "Gladiador", "Ela"],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Anthony Hopkins",
        idade: 84,
        filmes: [
            "O Silêncio dos Inocentes",
            "Hannibal",
            "Oito Mulheres e um Segredo",
        ],
        oscar: true,
        emoji: "⭐️",
    },
    {
        nome: "Morgan Freeman",
        idade: 84,
        filmes: [
            "Um Sonho de Liberdade",
            "Conduzindo Miss Daisy",
            "Truque de Mestre",
        ],
        oscar: true,
        emoji: "⭐️",
    },
];

function actorCommand(bot, message) {
    const ator = atores[Math.floor(Math.random() * atores.length)];
    const { nome, idade, filmes, oscar, emoji } = ator;

    let mensagem = `*Seu ator/atriz preferido(a) ${emoji}*\n\n*Nome:* ${nome} \n*Idade:* ${idade} anos\n*Filmes:*${filmes.join(
        ", "
    )}\n`;

    if (oscar) {
        mensagem += `\n*Ganhador(a) do Oscar 🏆*`;
    } else {
        mensagem += `\n*Indicado(a) ao Oscar 🎥*`;
    }

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
    actorCommand,
};
