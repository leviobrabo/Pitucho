function tpmCommand(bot, message) {
    const nivelIrritacao = Math.floor(Math.random() * 101);
  
    let fraseIrritacao;
    if (nivelIrritacao <= 10) {
      fraseIrritacao = "Não estou irritada.";
    } else if (nivelIrritacao <= 20) {
      fraseIrritacao = "Não fale comigo.";
    } else if (nivelIrritacao <= 40) {
      fraseIrritacao = "Estou sensível.";
    } else if (nivelIrritacao <= 50) {
      fraseIrritacao = "Não me encha!";
    } else if (nivelIrritacao <= 70) {
      fraseIrritacao = "Estou chateada.";
    } else if (nivelIrritacao <= 80) {
      fraseIrritacao = "Estou com muita tpm!";
    } else if (nivelIrritacao <= 90) {
      fraseIrritacao = "Se eu pudesse, matava todo mundo agora!";
    } else {
      fraseIrritacao = "Se eu pudesse, explodia agora!";
    }
  
    let emojiIrritacao;
    if (nivelIrritacao <= 20) {
      emojiIrritacao = "🙅";
    } else if (nivelIrritacao <= 40) {
      emojiIrritacao = "🙎‍♀️";
    } else if (nivelIrritacao <= 60) {
      emojiIrritacao = "😤";
    } else if (nivelIrritacao <= 80) {
      emojiIrritacao = "🤬";
    } else if (nivelIrritacao <= 95) {
      emojiIrritacao = "👿";
    } else {
      emojiIrritacao = "💣";
    }
  
    let graficoIrritacao = '';
    for (let i = 10; i <= 100; i += 10) {
      if (nivelIrritacao >= i) {
        graficoIrritacao += '⬛';
      } else {
        graficoIrritacao += '⬜';
      }
    } 
  
    const respostaIrritacao = `*Nível de TPM*\n\nO seu nível de TPM está em ${nivelIrritacao}%\n\n${fraseIrritacao}${emojiIrritacao}\n${graficoIrritacao} *${nivelIrritacao}%*`;
  
    bot.sendMessage(message.chat.id, respostaIrritacao, {reply_to_message_id: message.message_id, parse_mode: 'Markdown' });
  }

  module.exports = {
    tpmCommand
  };