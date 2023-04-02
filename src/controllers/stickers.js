const stickers = [
    "CAACAgEAAxkBAAI372P9EexHmVfMTcT_MCJ5t926Q9yqAAIDAgACNWo5RyQSIVGbaQABni4E",
    "CAACAgEAAxkBAAI382P9EiC0kLNfI_Hm9fa7hzQluXEyAAKoAANRd4FGRA1UrSGDIhMuBA",
    "CAACAgEAAxkBAAI39WP9EjBMkIh_hoJnSlgU0vUeR4FHAALiAgACv61ZRwnoA02nk7m4LgQ",
    "CAACAgEAAxkBAAI392P9Ej6BSN0JnZuuv1qcP3dRbevAAALNAgACdUPARt-YJYI7KAwMLgQ",
    "CAACAgEAAxkBAAI3-WP9EpY9GxILI1Ag-cGCdufvLnfUAAKoAwAC43YpR2Ez7kkNmVDdLgQ",
    "CAACAgEAAxkBAAI3-2P9Eqwpz8JdcsX3QHyHCtxmBFeUAAKEAgAC5rPYRN9l-ILQZmgILgQ",
    "CAACAgEAAxkBAAI3_2P9EwagjWrmZXa0aqbbCDXZBNVqAAKmAgACJWFIRahFRq1swkXvLgQ",
    "CAACAgEAAxkBAAI4AWP9ExwP6ufGkvflfpZe5mQtruyVAAIJBQACgg-YRW7u-iSKZ0nwLgQ",
    "CAACAgEAAxkBAAI4A2P9EymeK0iNi5A6Vs3RTefltDR5AAKaAgACxuxYRogsOeOjfwABHC4E",
    "CAACAgEAAxkBAAI4BWP9Ezl6mQP7ePOkr-RZepNTm21DAAJ5AgACIe2IRCTcfyltcgHnLgQ",
    "CAACAgEAAxkBAAI4B2P9E0cdVWMHm3gTX9lmwg8E1eW_AAKsAgACkpYJRvriPDMz9Io9LgQ",
    "CAACAgEAAxkBAAI4CWP9E1QYNLMECpfHz0Naa8a1EsYmAALBBAACou6gRZrADhBMgKymLgQ",
    "CAACAgEAAxkBAAI4C2P9E2nT5TDh33wCgU-SwC5OJzy-AALGAgACPxlJRevtrl4R9gexLgQ",
    "CAACAgEAAxkBAAI4DWP9E4tSOG82QGLnn2QKpRmIJPDnAAKEAgACNQRhRm-d4gpAX_0YLgQ",
    "CAACAgEAAxkBAAI4D2P9E6vwif-4ZyXZR1H2RaqOQTVMAAL8AQAC86JgRjmei8lYtEVXLgQ",
    "CAACAgEAAxkBAAI4EWP9E73Ec5RMziA7Yn52z2yuKsuUAAIOAgACAXRgRkm3He87ZfamLgQ",
    "CAACAgEAAxkBAAI4E2P9E-Jd1gic6ILIh_Qv4nrGnEBcAAIHAgACPF94RideIGdEdIwLLgQ",
    "CAACAgEAAxkBAAI4FWP9E_13ZWcSmzEF6fXYfVueSzI1AAIcBAACHep5RRlG1_uiTiP-LgQ",
];

function stickersCommand(bot, message) {
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    if (message.message_id) {
        bot.sendSticker(message.chat.id, randomSticker, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } else {
        bot.sendSticker(message.chat.id, randomSticker, {
            parse_mode: "Markdown",
        });
    }
}
module.exports = {
    stickersCommand,
};
