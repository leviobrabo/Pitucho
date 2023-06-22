const categorias = [
    {
        emoji: "🎬",
        descricao: "Ação",
        sobre: "Filmes de ação geralmente envolvem cenas de luta, perseguições e tiroteios. São conhecidos por terem muita adrenalina e emoção.",
    },
    {
        emoji: "🎭",
        descricao: "Drama",
        sobre: "Filmes de drama são conhecidos por envolverem conflitos emocionais e problemas pessoais dos personagens. Podem ser baseados em histórias verdadeiras ou fictícias.",
    },
    {
        emoji: "🤖",
        descricao: "Ficção Científica",
        sobre: "Filmes de ficção científica apresentam conceitos e ideias futuristas, científicas ou tecnológicas. Podem envolver viagens no tempo, realidades alternativas e alienígenas.",
    },
    {
        emoji: "👻",
        descricao: "Terror",
        sobre: "Filmes de terror são conhecidos por assustar e causar medo no público. Podem envolver fantasmas, monstros e serial killers.",
    },
    {
        emoji: "🤠",
        descricao: "Western",
        sobre: "Filmes de western se passam no Velho Oeste americano e envolvem tiroteios, duelos e cavalgadas. São conhecidos por seus personagens emblemáticos, como xerifes, cowboys e foras-da-lei.",
    },
    {
        emoji: "🎥",
        descricao: "Documentário",
        sobre: "Filmes documentários apresentam fatos e informações sobre um determinado assunto ou evento. Podem ser sobre a natureza, história ou política, por exemplo.",
    },
    {
        emoji: "🍿",
        descricao: "Comédia",
        sobre: "Filmes de comédia são conhecidos por fazerem o público rir. Podem envolver piadas, situações engraçadas e personagens cômicos.",
    },
    {
        emoji: "👊",
        descricao: "Artes Marciais",
        sobre: "Filmes de artes marciais apresentam lutas e técnicas de combate de diferentes disciplinas, como karatê, judô e kung fu.",
    },
    {
        emoji: "🧝‍♂️",
        descricao: "Fantasia",
        sobre: "Filmes de fantasia envolvem elementos mágicos e sobrenaturais, como dragões, elfos e magia. Podem ser baseados em livros e lendas.",
    },
    {
        emoji: "🌊",
        descricao: "Aventura",
        sobre: "Filmes de aventura envolvem jornadas, explorações e descobertas. Podem envolver elementos de ação e ficção científica.",
    },
];
function moviesCommand(bot, message) {
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];

    const respostaFilme = `*🎬 Sua cateogria filme preferida 🎬* \n\n*Nome:* ${categoria.descricao} ${categoria.emoji} \n\n*Descrição:* ${categoria.sobre}`;

    try {
        bot.sendMessage(message.chat.id, respostaFilme, {
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
            bot.sendMessage(message.chat.id, respostaFilme, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    moviesCommand,
};
