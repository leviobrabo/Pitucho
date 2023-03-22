const gifs = {
    certo: [
        {
            url: "https://media1.tenor.com/images/d3773429c196cf5f84431b74355b5225/tenor.gif?itemid=27624796",
            caption: "*Parabéns, você conseguiu!*",
        },
    ],
    errado: [
        {
            url: "https://media.tenor.com/images/7fe52d2d9bbc27937b30761ff5dd32d0/tenor.gif",
            caption: "*Ops, você não conseguiu. Tente novamente!*",
        },
    ],
};

function luckCommand(bot, message) {
    const randomNumber = Math.random();

    let response;
    if (randomNumber < 0.01) {
        const index = Math.floor(Math.random() * gifs.certo.length);
        response = gifs.certo[index];
    } else {
        const index = Math.floor(Math.random() * gifs.errado.length);
        response = gifs.errado[index];
    }

    bot.sendDocument(message.chat.id, response.url, {
        caption: response.caption,
        reply_to_message_id: message.message_id,
        parse_mode: "Markdown",
    });
}

module.exports = {
    luckCommand,
};
