const times = [
    {
        nome: "Flamengo",
        imagemUrl:
            "https://freevectorlogo.net/wp-content/uploads/2012/11/clube-de-regatas-do-flamengo-logo-vector-400x400.png",
        estadio: "Maracanã",
        anoCriacao: "1895",
        mascote: "Urubu",
        curiosidade:
            "O Flamengo é o clube de futebol mais popular do Brasil, com a maior torcida do país.",
        brasileiroes: 8,
    },
    {
        nome: "Corinthians",
        imagemUrl:
            "https://knoow.net/wp-content/uploads/2016/11/Logo-Corinthians.png",
        estadio: "Neo Química Arena",
        anoCriacao: "1910",
        mascote: "Mosqueteiro",
        curiosidade:
            "O Corinthians é o clube de futebol com a maior torcida do estado de São Paulo.",
        brasileiroes: 7,
    },
    {
        nome: "São Paulo",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1426319619200110596/m6gH60GL_400x400.jpg",
        estadio: "Morumbi",
        anoCriacao: "1930",
        mascote: "São Paulo Man",
        curiosidade:
            "O São Paulo é o clube de futebol brasileiro com mais títulos internacionais, com 12 conquistas.",
        brasileiroes: 6,
    },
    {
        nome: "Palmeiras",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1611063929916035095/se9po_Sh_400x400.jpg",
        estadio: "Allianz Parque",
        anoCriacao: "1914",
        mascote: "Periquito",
        curiosidade:
            "O Palmeiras é o clube de futebol brasileiro com mais títulos nacionais, com 14 conquistas.",
        brasileiroes: 11,
    },
    {
        nome: "Santos",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1615807063950598144/tSi5F77L_400x400.jpg",
        estadio: "Vila Belmiro",
        anoCriacao: "1912",
        mascote: "Baleia",
        curiosidade:
            "O Santos é o clube de futebol brasileiro com mais títulos da Copa Libertadores da América, com 3 conquistas.",
        brasileiroes: 8,
    },
    {
        nome: "Internacional",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1609276600582799362/iEniyUQp_400x400.png",
        estadio: "Beira-Rio",
        anoCriacao: "1909",
        mascote: "Sací",
        curiosidade:
            "O Internacional é o clube de futebol brasileiro com mais títulos internacionais no século XX, com 7 conquistas.",
        brasileiroes: 3,
    },
    {
        nome: "Grêmio",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1587444689568993280/jqTDMBmJ_400x400.jpg",
        estadio: "Arena do Grêmio",
        anoCriacao: "1903",
        mascote: "Mosqueteiro",
        curiosidade:
            "O Grêmio é o clube de futebol brasileiro com mais títulos da Copa do Brasil, com 6 conquistas.",
        brasileiroes: 2,
    },
    {
        nome: "Atlético-MG",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1467629667268112390/Ge6CuQfD_400x400.jpg",
        estadio: "Mineirão",
        anoCriacao: "1908",
        mascote: "Galo",
        curiosidade:
            "O Atlético-MG é o clube de futebol brasileiro com mais títulos da Copa Conmebol, com 2 conquistas.",
        brasileiroes: 2,
    },
    {
        nome: "Cruzeiro",
        imagemUrl:
            "https://pbs.twimg.com/media/ENQk13uW4AAU4nK?format=jpg&name=small",
        estadio: "Mineirão",
        anoCriacao: "1921",
        mascote: "Raposa",
        curiosidade:
            "O Cruzeiro é o clube de futebol brasileiro com mais títulos da Copa do Brasil, ao lado do Grêmio, com 6 conquistas.",
        brasileiroes: 4,
    },
    {
        nome: "Fluminense",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1609912077786746885/2F0rzkrh_400x400.jpg",
        estadio: "Maracanã",
        anoCriacao: "1902",
        mascote: "Guerreiro",
        curiosidade:
            "O Fluminense é o clube de futebol brasileiro que mais conquistou o Campeonato Carioca, com 31 títulos.",
        brasileiroes: 4,
    },
    {
        nome: "Botafogo",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1617191347852656641/Eb_gIMxP_400x400.jpg",
        estadio: "Engenhão",
        anoCriacao: "1904",
        mascote: "Alvinegro",
        curiosidade:
            "O Botafogo é o clube de futebol brasileiro que mais vezes foi vice-campeão do Campeonato Brasileiro, com 5 vice-campeonatos.",
        brasileiroes: 2,
    },
    {
        nome: "Vasco",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1620489733687083010/PRxiI2Jk_400x400.jpg",
        estadio: "São Januário",
        anoCriacao: "1898",
        mascote: "Gigante",
        curiosidade:
            "O Vasco é o clube de futebol brasileiro que mais vezes foi campeão da Copa do Brasil, com 4 conquistas.",
        brasileiroes: 4,
    },
    {
        nome: "Ceará",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1587278883732217857/lro974U6_400x400.jpg",
        estadio: "Arena Castelão",
        anoCriacao: "1914",
        mascote: "Vozão",
        curiosidade:
            'O apelido "Vozão" surgiu em 1969, quando o Ceará disputou a Taça Brasil e foi elogiado pela voz forte de sua torcida.',
        brasileiroes: 0,
    },
    {
        nome: "Chapecoense",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/934097344655773696/3K95PVdH_400x400.jpg",
        estadio: "Arena Condá",
        anoCriacao: "1973",
        mascote: "Índio Condá",
        curiosidade:
            "A Chapecoense é o único clube de Santa Catarina a conquistar um título internacional, a Copa Sul-Americana de 2016.",
        brasileiroes: 0,
    },
    {
        nome: "Coritiba",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1610677205981437953/L-ak1cT2_400x400.jpg",
        estadio: "Couto Pereira",
        anoCriacao: "1909",
        mascote: "Vovô Coxa",
        curiosidade:
            "O Coritiba foi o primeiro time brasileiro a realizar uma excursão ao exterior, em 1928, jogando na Europa.",
        brasileiroes: 1,
    },
    {
        nome: "CSA",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1613677488726589442/de0A7nA__400x400.jpg",
        estadio: "",
        anoCriacao: "",
        mascote: "",
        curiosidade: "",
        brasileiroes: 0,
    },
    {
        nome: "Atlético-PR",
        imagemUrl:
            "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/03/atletico-pr-300x300.jpg",
        estadio: "Arena da Baixada",
        anoCriacao: "1924",
        mascote: "Furacão",
        curiosidade:
            "Foi o primeiro clube do sul do país a conquistar um título internacional, a Sul-Americana de 2018.",
        brasileiroes: 1,
    },
    {
        nome: "Bahia",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1611322042212651010/ZtlPQ8BG_400x400.jpg",
        estadio: "Arena Fonte Nova",
        anoCriacao: "1931",
        mascote: "Super-homem",
        curiosidade:
            "Foi o primeiro clube do Norte-Nordeste a conquistar um título internacional, a Copa do Nordeste de 2002.",
        brasileiroes: 2,
    },
    {
        nome: "Goiás ",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1611755823687950336/sgvpPTvR_400x400.jpg",
        estadio: "Serra Dourada",
        anoCriacao: "1943",
        mascote: "Verdão",
        curiosidade:
            "É o único clube goiano a ter participado da Copa Libertadores da América e a ter chegado a uma final de Copa Sul-Americana e de Copa do Brasil. ",
        brasileiroes: 0,
    },
    {
        nome: "Red Bull Bragantino",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1609503108261978112/cFXWKxiE_400x400.jpg",
        estadio: "Estádio Nabi Abi Chedid",
        anoCriacao: "1928",
        mascote: "Touro",
        curiosidade:
            "O clube foi fundado como Bragantino, mas em 2019 foi comprado pelo grupo Red Bull e mudou seu nome.",
        brasileiroes: 0,
    },
    {
        nome: "Fortaleza",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1603764504126492674/iZs-LGQQ_400x400.jpg",
        estadio: "Arena Castelão",
        anoCriacao: "1918",
        mascote: "Leão",
        curiosidade:
            "O Fortaleza foi o primeiro clube do Nordeste a disputar uma final de Campeonato Brasileiro, em 1960.",
        brasileiroes: 0,
    },
    {
        nome: "Sport",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1620504487713546318/_iC_8nMh_400x400.jpg",
        estadio: "Ilha do Retiro",
        anoCriacao: "1905",
        mascote: "Leão",
        curiosidade:
            "O Sport é o único clube do Nordeste a disputar a Libertadores da América.",
        brasileiroes: 1,
    },
    {
        nome: "Santa Cruz",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1625890990383943682/eKSnyAos_400x400.jpg",
        estadio: "Arruda",
        anoCriacao: "1914",
        mascote: "Cobra Coral",
        curiosidade:
            "O Santa Cruz é o time pernambucano que mais vezes participou do Campeonato Brasileiro.",
        brasileiroes: 0,
    },
    {
        nome: "Vila Nova",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1610447696812285955/Nfi4_Az9_400x400.jpg",
        estadio: "Onésio Brasileiro Alvarenga",
        anoCriacao: "1943",
        mascote: "Tigrão",
        curiosidade:
            "O Vila Nova é o único clube goiano a disputar a Série A do Campeonato Brasileiro.",
        brasileiroes: 0,
    },
    {
        nome: "Salgueiro",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1131931961/2010_sac_topo2_400x400.jpg",
        estadio: "Cornélio de Barros",
        anoCriacao: "1999",
        mascote: "Carcará",
        curiosidade:
            "O Salgueiro é o único clube do sertão pernambucano que disputou a Série C do Campeonato Brasileiro.",
        brasileiroes: 0,
    },
    {
        nome: "Atlético-GO",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1229374310659379200/RpeEwctQ_400x400.jpg",
        estadio: "Antônio Accioly",
        anoCriacao: "1937",
        mascote: "Dragão",
        curiosidade:
            "O Atlético-GO é o único clube goiano que já participou da Série A do Campeonato Brasileiro.",
        brasileiroes: 0,
    },
    {
        nome: "Vitória",
        imagemUrl:
            "https://pbs.twimg.com/profile_images/1587778873592320000/UABdZsRp_400x400.jpg",
        estadio: "Manoel Barradas",
        anoCriacao: "1899",
        mascote: "Leão",
        curiosidade:
            "O Vitória é o clube baiano com mais participações na Série A do Campeonato Brasileiro.",
        brasileiroes: 0,
    },
];

function gerarEstrelas(n) {
    let estrelas = "";
    for (let i = 0; i < n; i++) {
        estrelas += "⭐️";
    }
    return estrelas;
}

function timeCommand(bot, message) {
    const time = times[Math.floor(Math.random() * times.length)];
    const estrelas = gerarEstrelas(time.brasileiroes);
    const informacoes = `Seu time do coração é o *${time.nome}* ❤️\n\n*Estádio:* ${time.estadio} \n*Ano de criação:* ${time.anoCriacao} \n*Mascote:* ${time.mascote} \n*Curiosidades:* ${time.curiosidade} \n*Brasileirões:* ${estrelas}`;

    const photoOptions = {
        caption: informacoes,
        parse_mode: "Markdown",
    };

    if (message.message_id) {
        photoOptions.reply_to_message_id = message.message_id;
    }

    bot.sendPhoto(message.chat.id, time.imagemUrl, photoOptions);
    console.log("time enviado com sucesso");
}

module.exports = {
    timeCommand,
};
