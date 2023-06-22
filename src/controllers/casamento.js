function gerarDataAleatoria() {
    const ano = Math.floor(Math.random() * (2050 - 2024 + 1)) + 2024;
    const mes = Math.floor(Math.random() * 12);
    let dia = Math.floor(Math.random() * 28) + 1;

    if (mes === 1) {
        const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
        dia = bissexto ? Math.min(dia, 29) : Math.min(dia, 28);
    } else if ([3, 5, 8, 10].includes(mes)) {
        dia = Math.min(dia, 30);
    }

    return `${dia.toString().padStart(2, "0")}/${(mes + 1)
        .toString()
        .padStart(2, "0")}/${ano}`;
}

const datasCasamento = [
    { data: gerarDataAleatoria(), emoji: "💍" },
    { data: gerarDataAleatoria(), emoji: "👰" },
    { data: gerarDataAleatoria(), emoji: "🤵" },
    { data: gerarDataAleatoria(), emoji: "❤️" },
];

function selecionaCasamentoAleatorio() {
    return datasCasamento[Math.floor(Math.random() * datasCasamento.length)];
}

function marriageCommand(bot, message) {
    const casamento = selecionaCasamentoAleatorio();
    const respostacasamento = `*Data do casamento*\n\nVocê irá se casar em ${casamento.data} ${casamento.emoji} \n\n👩‍❤️‍👨 Parabéns, já sabe com quem vai ser?`;

    try {
        bot.sendMessage(message.chat.id, respostacasamento, {
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
            bot.sendMessage(message.chat.id, respostacasamento, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    marriageCommand,
};
