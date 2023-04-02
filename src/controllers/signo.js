function signoCommand(bot, message) {
    const signos = [
        {
            nome: "Áries",
            emoji: "♈️",
            descricao:
                "Pessoas arianas são conhecidas por sua coragem, determinação e energia. Elas são líderes naturais e gostam de desafios.",
            dataInicio: "21 de março",
            dataFim: "19 de abril",
        },
        {
            nome: "Touro",
            emoji: "♉️",
            descricao:
                "Pessoas taurinas são conhecidas por sua perseverança, confiabilidade e sensualidade. Elas são leais e gostam de conforto e estabilidade.",
            dataInicio: "20 de abril",
            dataFim: "20 de maio",
        },
        {
            nome: "Gêmeos",
            emoji: "♊️",
            descricao:
                "Pessoas geminianas são conhecidas por sua versatilidade, curiosidade e inteligência. Elas são sociáveis e gostam de novidades e mudanças.",
            dataInicio: "21 de maio",
            dataFim: "20 de junho",
        },
        {
            nome: "Câncer",
            emoji: "♋️",
            descricao:
                "Pessoas cancerianas são conhecidas por sua sensibilidade, empatia e intuição. Elas são protetoras e gostam de estar em ambientes acolhedores.",
            dataInicio: "21 de junho",
            dataFim: "22 de julho",
        },
        {
            nome: "Leão",
            emoji: "♌️",
            descricao:
                "Pessoas leoninas são conhecidas por sua autoconfiança, criatividade e generosidade. Elas gostam de estar no centro das atenções e de serem reconhecidas.",
            dataInicio: "23 de julho",
            dataFim: "22 de agosto",
        },
        {
            nome: "Virgem",
            emoji: "♍️",
            descricao:
                "Pessoas virginianas são conhecidas por sua praticidade, perfeccionismo e inteligência. Elas são organizadas e gostam de resolver problemas.",
            dataInicio: "23 de agosto",
            dataFim: "22 de setembro",
        },
        {
            nome: "Libra",
            emoji: "♎️",
            descricao:
                "Pessoas librianas são conhecidas por sua diplomacia, equilíbrio e sociabilidade. Elas valorizam a harmonia e gostam de estar em grupos.",
            dataInicio: "23 de setembro",
            dataFim: "22 de outubro",
        },
        {
            nome: "Escorpião",
            emoji: "♏️",
            descricao:
                "Pessoas escorpianas são conhecidas por sua intensidade, mistério e paixão. Elas são profundas e gostam de ter controle sobre as situações.",
            dataInicio: "23 de outubro",
            dataFim: "21 de novembro",
        },
        {
            nome: "Sagitário",
            emoji: "♐️",
            descricao:
                "Pessoas sagitarianas são conhecidas por sua liberdade, otimismo e espírito aventureiro. Elas gostam de explorar e descobrir coisas novas.",
            dataInicio: "22 de novembro",
            dataFim: "21 de dezembro",
        },
        {
            nome: "Capricórnio",
            emoji: "♑️",
            descricao:
                "Pessoas capricornianas são conhecidas por sua ambição, disciplina e determinação. Elas são responsáveis e gostam de alcançar metas.",
            dataInicio: "22 de dezembro",
            dataFim: "19 de janeiro",
        },
        {
            nome: "Aquário",
            emoji: "♒️",
            descricao:
                "Pessoas aquarianas são conhecidas por sua originalidade, independência e idealismo. Elas são inovadoras e gostam de quebrar padrões estabelecidos.",
            dataInicio: "20 de janeiro",
            dataFim: "18 de fevereiro",
        },
        {
            nome: "Peixes",
            emoji: "♓️",
            descricao:
                "Pessoas piscianas são conhecidas por sua sensibilidade, intuição e imaginação. Elas são empáticas e gostam de ajudar os outros.",
            dataInicio: "19 de fevereiro",
            dataFim: "20 de março",
        },
    ];

    const signo = signos[Math.floor(Math.random() * signos.length)];

    const respostaSigno = `*Seu signo*\n\n*Nome:* ${signo.nome} ${signo.emoji} \n\n*Descrição:* ${signo.descricao} \n\n*Início:* ${signo.dataInicio} \n\n*Fim:* ${signo.dataFim}`;
    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostaSigno, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostaSigno, {
            parse_mode: "Markdown",
        });
    }
}

module.exports = {
    signoCommand,
};
