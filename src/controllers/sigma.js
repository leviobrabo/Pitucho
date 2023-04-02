function sigmaCommand(bot, message) {
    const nivelSigma = Math.floor(Math.random() * 101);

    let graficoSigma = "";
    for (let i = 0; i < 10; i++) {
        if (i < nivelSigma / 10) {
            graficoSigma += "⬛";
        } else {
            graficoSigma += "⬜";
        }
    }

    let fraseSigma;
    if (nivelSigma < 10) {
        fraseSigma = "Você está no fundo do poço...";
    } else if (nivelSigma < 20) {
        fraseSigma = "Não desanime, você ainda pode melhorar!";
    } else if (nivelSigma < 30) {
        fraseSigma = "Ainda tem muito a melhorar, mas já é um começo!";
    } else if (nivelSigma < 40) {
        fraseSigma = "Está progredindo bem, continue assim!";
    } else if (nivelSigma < 50) {
        fraseSigma = "Meio termo, não está mal!";
    } else if (nivelSigma < 60) {
        fraseSigma = "Acima da média, bom trabalho!";
    } else if (nivelSigma < 70) {
        fraseSigma = "Está fazendo um ótimo trabalho, parabéns!";
    } else if (nivelSigma < 80) {
        fraseSigma = "Excelente trabalho, continue assim!";
    } else if (nivelSigma < 90) {
        fraseSigma = "Quase lá, falta pouco para a perfeição!";
    } else {
        fraseSigma = "Nível máximo, você é incrível!";
    }

    let gifSigma;
    if (nivelSigma < 30) {
        gifSigma =
            "https://media.tenor.com/Wg9fW_XEft0AAAAC/pout-christian-bale.gif";
    } else if (nivelSigma < 20) {
        gifSigma =
            "https://media.tenor.com/Xa3KRCTJUuUAAAAd/homelander-theboysfinale.gif";
    } else if (nivelSigma < 50) {
        gifSigma =
            "https://media.tenor.com/lPcexeCDyZ8AAAAd/gentleman-giga-chad.gif";
    } else if (nivelSigma < 60) {
        gifSigma =
            "https://media.tenor.com/1WyZr_xNiVwAAAAC/sigma-sigma-male.gif";
    } else if (nivelSigma < 70) {
        gifSigma =
            "https://media.tenor.com/V69OjtC-eFAAAAAd/sigma-male-sigma-from-ohio.gif";
    } else if (nivelSigma < 90) {
        gifSigma =
            "https://media.tenor.com/Rv4pV5ppmVsAAAAC/homelander-laser-eyes.gif";
    } else {
        gifSigma =
            "https://media.tenor.com/QNpimm5BA-QAAAAd/good-day-smile.gif";
    }

    bot.sendAnimation(message.chat.id, gifSigma, {
        caption: `*SIGMA* 🍷🗿 \n\nSeu nível SIGMA é ${nivelSigma}% \n\n${fraseSigma}\n\n${graficoSigma} ${nivelSigma}%`,
        parse_mode: "Markdown",
    });
}

module.exports = {
    sigmaCommand,
};
