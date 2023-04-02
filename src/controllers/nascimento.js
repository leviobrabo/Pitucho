function gerarDataAleatoriaNascimento() {
    const ano = Math.floor(Math.random() * (2005 - 1970 + 1)) + 1970;
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

const datasNascimento = [
    { data: gerarDataAleatoriaNascimento(), emoji: "👶" },
    { data: gerarDataAleatoriaNascimento(), emoji: "🎂" },
    { data: gerarDataAleatoriaNascimento(), emoji: "🎉" },
    { data: gerarDataAleatoriaNascimento(), emoji: "🎁" },
];

function selecionaNascimentoAleatorio() {
    return datasNascimento[Math.floor(Math.random() * datasNascimento.length)];
}

function birthCommand(bot, message) {
    const nascimento = selecionaNascimentoAleatorio();

    const respostanascimento = `*Data do seu nascimento*\n\nVocê nasceu em ${nascimento.data} ${nascimento.emoji}`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostanascimento, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostanascimento, {
            parse_mode: "Markdown",
        });
    }
}
module.exports = {
    birthCommand,
};
