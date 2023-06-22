function gerarDataAleatoriaMorte() {
    const ano = Math.floor(Math.random() * (2024 - 2023 + 1)) + 2023;
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

const datasMorte = [
    { data1: gerarDataAleatoriaMorte(), emoji2: "😵" },
    { data1: gerarDataAleatoriaMorte(), emoji2: "💀" },
    { data1: gerarDataAleatoriaMorte(), emoji2: "👻" },
    { data1: gerarDataAleatoriaMorte(), emoji2: "☠️" },
];

function selecionaMorteAleatorio() {
    return datasMorte[Math.floor(Math.random() * datasMorte.length)];
}

function deathCommand(bot, message) {
    const morte = selecionaMorteAleatorio();

    const respostamorte = `*Data da sua morte*\n\nVocê morrerá em ${morte.data1} ${morte.emoji2}`;

    try {
        bot.sendMessage(message.chat.id, respostamorte, {
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
            bot.sendMessage(message.chat.id, respostamorte, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}
module.exports = {
    deathCommand,
};
