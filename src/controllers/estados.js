const estados = [
    {
        nome: "Acre",
        frase: "Acre, o estado da borracha",
        info: "O Acre é um estado brasileiro localizado na região Norte, conhecido por sua produção de borracha natural.",
        gria: "Espocar",
        emoji: "🌳",
    },
    {
        nome: "Alagoas",
        frase: "Alagoas, o paraíso das águas",
        info: "Alagoas é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias e lagoas.",
        gria: "arretado",
        emoji: "🏖",
    },
    {
        nome: "Amazonas",
        frase: "Amazonas, o pulmão do mundo",
        info: "O Amazonas é um estado brasileiro localizado na região Norte, conhecido por sua extensa floresta amazônica e diversidade de fauna e flora.",
        gria: "não tem gria conhecida",
        emoji: "🌴",
    },
    {
        nome: "Bahia",
        frase: "Bahia, terra de todos os santos",
        info: "A Bahia é um estado brasileiro localizado na região Nordeste, conhecido por sua rica cultura afro-brasileira e pelas belas praias.",
        gria: "LAELE",
        emoji: "🌊",
    },
    {
        nome: "Ceará",
        frase: "Ceará, terra da luz",
        info: "O Ceará é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias, dunas e sol o ano todo.",
        gria: "arretado",
        emoji: "🌅",
    },
    {
        nome: "Espírito Santo",
        frase: "Espírito Santo, o estado do cacau",
        info: "O Espírito Santo é um estado brasileiro localizado na região Sudeste, conhecido por sua produção de cacau e pelas belas praias.",
        gria: "firmeza",
        emoji: "🍫",
    },
    {
        nome: "Goiás",
        frase: "Goiás, o coração do Brasil",
        info: "Goiás é um estado brasileiro localizado na região Centro-Oeste, conhecido por sua rica história colonial e por suas belas paisagens naturais.",
        gria: "bão demais",
        emoji: "🏜",
    },
    {
        nome: "Maranhão",
        frase: "Maranhão, o estado dos lençóis",
        info: "O Maranhão é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias, parques naturais e pelos famosos Lençóis Maranhenses.",
        gria: "massa",
        emoji: "🏞",
    },
    {
        nome: "Mato Grosso",
        frase: "Mato Grosso, a grande planície",
        info: "O Mato Grosso é um estado brasileiro localizado na região Centro-Oeste, conhecido por sua vasta planície e pela biodiversidade de animais.",
        gria: "tudo de bom",
        emoji: "🌿",
    },
    {
        nome: "Mato Grosso do Sul",
        frase: "Mato Grosso do Sul, o estado do Pantanal",
        info: "Mato Grosso do Sul é um estado brasileiro localizado na região Centro-Oeste, conhecido por abrigar o maior pantanal do mundo e pelas belas paisagens naturais.",
        gria: "firmeza",
        emoji: "🐆",
    },
    {
        nome: "Minas Gerais",
        frase: "Minas Gerais, terra do pão de queijo",
        info: "Minas Gerais é um estado brasileiro localizado na região Sudeste, conhecido por sua rica história, culinária e pela Serra do Curral, símbolo da capital Belo Horizonte.",
        gria: "uai",
        emoji: "🧀",
    },
    {
        nome: "Pará",
        frase: "Pará, a porta da Amazônia",
        info: "O Pará é um estado brasileiro localizado na região Norte, conhecido por sua exuberante floresta amazônica, rica cultura e gastronomia.",
        gria: "bacana",
        emoji: "🍴",
    },
    {
        nome: "Paraíba",
        frase: "Paraíba, o estado do sol nascente",
        info: "A Paraíba é um estado brasileiro localizado na região Nordeste, conhecido por suas belas praias, pela gastronomia e pelo folclore.",
        gria: "bora",
        emoji: "☀️",
    },
    {
        nome: "Paraná",
        frase: "Paraná, estado das Cataratas",
        info: "O Paraná é um estado brasileiro localizado na região Sul, conhecido por suas belas paisagens naturais, como as Cataratas do Iguaçu e pela produção agropecuária.",
        gria: "piazada",
        emoji: "🌲",
    },
    {
        nome: "Pernambuco",
        frase: "Pernambuco, a terra do frevo",
        info: "Pernambuco é um estado brasileiro localizado na região Nordeste, conhecido por sua rica cultura, pelo frevo, pelo maracatu e pelas belas praias.",
        gria: "boy",
        emoji: "🎭",
    },
    {
        nome: "Piauí",
        frase: "Piauí, o estado das emoções",
        info: "O Piauí é um estado brasileiro localizado na região Nordeste, conhecido por suas paisagens exóticas, pela rica história e cultura.",
        gria: "firmeza",
        emoji: "🌵",
    },
    {
        nome: "Rio de Janeiro",
        frase: "Rio de Janeiro, cidade maravilhosa",
        info: "O Rio de Janeiro é um estado brasileiro localizado na região Sudeste, conhecido por suas belas praias, montanhas e pela cidade do Rio de Janeiro, que é mundialmente famosa por seu carnaval, Cristo Redentor e Pão de Açúcar.",
        gria: "os crias",
        emoji: "🏖️",
    },
    {
        nome: "Rio Grande do Norte",
        frase: "Rio Grande do Norte, o estado do sol",
        info: "Rio Grande do Norte é um estado brasileiro localizado na região Nordeste, conhecido por suas praias paradisíacas, pelo clima quente e pelas dunas de areia.",
        gria: "valeu a pena",
        emoji: "🌞",
    },
    {
        nome: "Rio Grande do Sul",
        frase: "Rio Grande do Sul, o estado dos gaúchos",
        info: "Rio Grande do Sul é um estado brasileiro localizado na região Sul, conhecido por sua forte tradição cultural gaúcha, pelos vinhedos da Serra Gaúcha e pelos cânions do Parque Nacional de Aparados da Serra.",
        gria: "tchê",
        emoji: "🐄",
    },
    {
        nome: "Rondônia",
        frase: "Rondônia, o estado da Amazônia Ocidental",
        info: "Rondônia é um estado brasileiro localizado na região Norte, conhecido por abrigar uma parte da floresta amazônica e por sua produção de café e carne.",
        gria: "da hora",
        emoji: "🦜",
    },
    {
        nome: "Roraima",
        frase: "Roraima, o estado das águas",
        info: "Roraima é um estado brasileiro localizado na região Norte, conhecido por sua diversidade cultural, por sua biodiversidade e por ser o estado mais setentrional do Brasil.",
        gria: "suave",
        emoji: "🏞️",
    },
    {
        nome: "Santa Catarina",
        frase: "Santa Catarina, o estado das praias e da serra",
        info: "Santa Catarina é um estado brasileiro localizado na região Sul, conhecido por suas belas praias, pela Serra Catarinense e pela produção de vinho e de ostras.",
        gria: "teia",
        emoji: "🏔️",
    },
    {
        nome: "São Paulo",
        frase: "São Paulo, a locomotiva do Brasil",
        info: "São Paulo é um estado brasileiro localizado na região Sudeste, conhecido por sua grande metrópole, por sua forte economia, por suas universidades e pela cultura cosmopolita.",
        gria: "mano",
        emoji: "🏙️",
    },
    {
        nome: "Sergipe",
        frase: "Sergipe, o estado do cangaço",
        info: "Sergipe é um estado brasileiro localizado na região Nordeste, conhecido por sua rica história do cangaço, pelas praias e pelo folclore.",
        gria: "bora",
        emoji: "🌴",
    },
    {
        nome: "Tocantins",
        frase: "Tocantins, o coração do Brasil",
        info: "Tocantins é um estado brasileiro localizado na região Norte, conhecido por sua biodiversidade, pelas cachoeiras e pela produção de grãos e carne.",
        gria: "show de bola",
        emoji: "🌻",
    },
];

function stateCommand(bot, message) {
    const estadoAleatorio = estados[Math.floor(Math.random() * estados.length)];
    const resposta = `*Seu Estado é ${estadoAleatorio.nome}* ${estadoAleatorio.emoji} \n\n*Informações básicas:* ${estadoAleatorio.info}\n\n*Gíria típica:* "${estadoAleatorio.gria}" \n\n🌎 ${estadoAleatorio.frase}`;
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
    stateCommand,
};
