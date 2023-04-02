const desafios = [
    {
        emoji: "🏋️‍♂️",
        explicacao: "Fazer 20 flexões",
    },
    {
        emoji: "🏃‍♀️",
        explicacao: "Correr 5 km em menos de 30 minutos",
    },
    {
        emoji: "🧘‍♂️",
        explicacao: "Meditar por 10 minutos",
    },
    {
        emoji: "📚",
        explicacao: "Ler um livro inteiro em um dia",
    },
    {
        emoji: "🎨",
        explicacao: "Desenhar um retrato realista",
    },
    {
        emoji: "🎯",
        explicacao: "Acertar 10 tiros em um alvo a 10 metros de distância",
    },
    {
        emoji: "🧗‍♂️",
        explicacao: "Escalar uma parede de escalada com 10 metros de altura",
    },
    {
        emoji: "🏊‍♀️",
        explicacao: "Nadar 1 km sem parar",
    },
    {
        emoji: "🎹",
        explicacao: "Aprender a tocar uma música nova no piano",
    },
    {
        emoji: "🚴‍♂️",
        explicacao: "Andar de bicicleta por 50 km em um dia",
    },
    {
        emoji: "🧘‍♀️",
        explicacao: "Fazer uma aula de yoga avançada",
    },
    {
        emoji: "🎬",
        explicacao: "Escrever, dirigir e editar um curta-metragem de 5 minutos",
    },
    {
        emoji: "🏭",
        explicacao: "Construir uma peça de mobília do zero",
    },
    {
        emoji: "📝",
        explicacao: "Escrever um poema ou conto curto",
    },
    {
        emoji: "🎨",
        explicacao: "Pintar um retrato a óleo",
    },
];

function challengesCommand(bot, message) {
    const desafio = desafios[Math.floor(Math.random() * desafios.length)];

    const mensagem = `*🏆 VOCÊ FOI DESAFIO 🏆* \n\nVocê terá que: \n\n${desafio.emoji} ${desafio.explicacao}`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, mensagem, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, mensagem, {
            parse_mode: "Markdown",
        });
    }
}

module.exports = {
    challengesCommand,
};
