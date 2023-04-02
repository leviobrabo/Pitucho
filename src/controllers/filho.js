function sonCommand(bot, message) {
    const generos = ["masculino", "feminino"];
    const genero = generos[Math.floor(Math.random() * generos.length)];
    const nomesMasculinos = [
        "Pedro",
        "João",
        "Miguel",
        "Lucas",
        "Rafael",
        "Gustavo",
        "Thiago",
        "Arthur",
        "Enzo",
        "Leonardo",
    ];
    const nomesFemininos = [
        "Maria",
        "Ana",
        "Sofia",
        "Lara",
        "Gabriela",
        "Julia",
        "Mariana",
        "Isabela",
        "Manuela",
        "Laura",
    ];
    const nome =
        genero === "masculino"
            ? nomesMasculinos[
                  Math.floor(Math.random() * nomesMasculinos.length)
              ]
            : nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)];

    const ano = Math.floor(Math.random() * (2050 - 2024 + 1)) + 2024;
    const mes = Math.floor(Math.random() * 12) + 1;
    const dia = Math.floor(Math.random() * 31) + 1;
    const dataNascimento = new Date(ano, mes, dia);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const dataNascimentoFormatada = dataNascimento.toLocaleDateString(
        "pt-BR",
        options
    );

    const respostafilho = `*🎊Parabéns, você é o(a) mais novo(a) Pai/Mãe🎊* \n\n🚼 Você terá um neném do sexo *${genero}* \n🪪 Nome dele(a) será *${nome}!* \n⏳ Ele(a) nascerá em *${dataNascimentoFormatada}.*`;

    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostafilho, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostafilho, {
            parse_mode: "Markdown",
        });
    }
}

module.exports = {
    sonCommand,
};
