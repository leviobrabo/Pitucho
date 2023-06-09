function genderCommand(bot, message) {
    const generos = [
        { nome: "Heterossexual", emoji: "👫" },
        { nome: "Homossexual", emoji: "👬👭" },
        { nome: "Bissexual", emoji: "👬👭👫" },
        { nome: "Pansexual", emoji: "👬👭👫💖" },
        { nome: "Assexual", emoji: "🚫🍆💏" },
        { nome: "Demissexual", emoji: "💑👬👭" },
        { nome: "Graysexual", emoji: "👥🔘" },
        { nome: "Polissexual", emoji: "👥👥👬👭" },
        { nome: "Queer", emoji: "🏳️‍🌈" },
        { nome: "Aromântico", emoji: "❤️🚫" },
        { nome: "Bigênero", emoji: "⚥" },
        { nome: "Não-binário", emoji: "🚻" },
        { nome: "Gênero-fluido", emoji: "🌊" },
        { nome: "Transgênero", emoji: "🏳️‍⚧️" },
        { nome: "Cisgênero", emoji: "♂️♀️" },
        { nome: "Intersexo", emoji: "⚧" },
        { nome: "Dois-espíritos", emoji: "🏳️‍⚧️" },
        { nome: "Transexual", emoji: "🚻🔀" },
    ];
    const genero = generos[Math.floor(Math.random() * generos.length)];

    const respostagenero = `O gênero sexual escolhido é *${genero.nome} ${genero.emoji}*`;

    try {
        bot.sendMessage(message.chat.id, respostagenero, {
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
            bot.sendMessage(message.chat.id, respostagenero, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}
module.exports = {
    genderCommand,
};
