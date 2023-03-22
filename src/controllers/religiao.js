function religionCommand(bot, message) {
    const religioes = [
        {
            nome: "Cristianismo",
            emoji: "✝️",
            descricao:
                "Religião que crê em Jesus Cristo como o filho de Deus e salvador da humanidade.",
            fundador: "Jesus Cristo",
        },
        {
            nome: "Islamismo",
            emoji: "☪️",
            descricao:
                "Religião que segue os ensinamentos do profeta Maomé e crê em Alá como o único Deus.",
            fundador: "Maomé",
        },
        {
            nome: "Judaísmo",
            emoji: "✡️",
            descricao:
                "Religião que se baseia no Antigo Testamento e acredita na vinda do Messias.",
            fundador: "Abraão",
        },
        {
            nome: "Budismo",
            emoji: "☸️",
            descricao:
                "Religião que busca a iluminação através da meditação e do estudo dos ensinamentos de Buda.",
            fundador: "Buda",
        },
        {
            nome: "Hinduísmo",
            emoji: "🕉️",
            descricao:
                "Religião que crê na reencarnação e no karma, e venera vários deuses e deusas.",
            fundador: "Não há um fundador definido",
        },
        {
            nome: "Siquismo",
            emoji: "☬",
            descricao:
                "Religião que segue os ensinamentos do Guru Nanak e prega a igualdade e a fraternidade.",
            fundador: "Guru Nanak",
        },
        {
            nome: "Candomblé",
            emoji: "🔮",
            descricao:
                "Religião afro-brasileira que cultua os orixás e entidades ancestrais africanas.",
            fundador: "Não há um fundador definido",
        },
        {
            nome: "Wicca",
            emoji: "🌙",
            descricao:
                "Religião neopagã que se baseia na magia e na natureza, e celebra os ciclos da Lua.",
            fundador: "Gerald Gardner",
        },
        {
            nome: "Zoroastrismo",
            emoji: "🕊️",
            descricao:
                "Religião antiga do Irã que acredita em um Deus supremo, Ahura Mazda, e na luta entre o bem e o mal.",
            fundador: "Zaratustra",
        },
        {
            nome: "Xintoísmo",
            emoji: "🎎",
            descricao:
                "Religião japonesa que venera os kami, espíritos divinos da natureza e dos antepassados.",
            fundador: "Não há um fundador definido",
        },
        {
            nome: "Santo Daime",
            emoji: "🍃",
            descricao:
                "Religião brasileira que utiliza um chá alucinógeno, o ayahuasca, em seus rituais.",
            fundador: "Raimundo Irineu Serra",
        },
        {
            nome: "Satanismo",
            emoji: "👹",
            descricao:
                "Movimento que cultua Satanás como um símbolo da liberdade individual e da rebelião contra a moral religiosa.",
            fundador: "Anton LaVey",
        },
        {
            nome: "Jainismo",
            emoji: "🕉️",
            descricao:
                "Religião indiana que prega a não-violência, o respeito a todas as formas de vida e a busca pela libertação do ciclo de reencarnação.",
            fundador: "Mahavira",
        },
        {
            nome: "Taoismo",
            emoji: "☯️",
            descricao:
                "Filosofia religiosa chinesa que busca o equilíbrio entre opostos e a harmonia com a natureza.",
            fundador: "Lao Tsé",
        },
    ];

    const religiao = religioes[Math.floor(Math.random() * religioes.length)];
    const respostaReligao = `Sua religão é *${religiao.nome} ${religiao.emoji}*\n\n*Dados:* ${religiao.descricao}\n\n*Fundador:* ${religiao.fundador}`;

    bot.sendMessage(message.chat.id, respostaReligao, {
        reply_to_message_id: message.message_id,
        parse_mode: "Markdown",
    });
}

module.exports = {
    religionCommand,
};
