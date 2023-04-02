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

    if (message.message_id) {
        bot.sendMessage(message.chat.id, respostagenero, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendMessage(message.chat.id, respostagenero, {
            parse_mode: "Markdown",
        });
    }
}
module.exports = {
    genderCommand,
};
