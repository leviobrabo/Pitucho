const stickers = {
    certo: [
        {
            fileId: "CAACAgEAAxkBAAI5h2QtieP7zFJBVcfnrf1_9KMDlp59AAJLAwAChp9xRVK5tjL-i3fTLwQ",
        },
    ],
    errado: [
        {
            fileId: "CAACAgEAAxkBAAI5iWQtieXBc5WZT8qLGE2P0uwGH4hkAALTAwACz1FpRSowYSAHqFppLwQ",
        },
    ],
};

function luckCommand(bot, message) {
    const randomNumber = Math.random();

    let response;
    if (randomNumber < 0.01) {
        const index = Math.floor(Math.random() * stickers.certo.length);
        response = stickers.certo[index];
    } else {
        const index = Math.floor(Math.random() * stickers.errado.length);
        response = stickers.errado[index];
    }

    const options = {};

    bot.sendSticker(message.chat.id, response.fileId, options);
}

module.exports = {
    luckCommand,
};
