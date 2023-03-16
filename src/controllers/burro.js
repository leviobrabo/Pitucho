function donkeyCommand(bot, message) {
    const nivelBurro = Math.floor(Math.random() * 101);

    let fraseBurro;
    if (nivelBurro <= 10) {
      fraseBurro = "Eu sou o Einstein perto de você.";
    } else if (nivelBurro <= 20) {
      fraseBurro = "Acho que você deveria estudar um pouco mais.";
    } else if (nivelBurro <= 40) {
      fraseBurro = "Não é o seu dia hoje, né?";
    } else if (nivelBurro <= 50) {
      fraseBurro = "Tá difícil pra você, hein?";
    } else if (nivelBurro <= 70) {
      fraseBurro = "Você é burro, mas tem outras qualidades.";
    } else if (nivelBurro <= 80) {
      fraseBurro = "Vamos trabalhar juntos para melhorar o seu desempenho.";
    } else if (nivelBurro <= 90) {
      fraseBurro = "Você precisa estudar mais e se esforçar mais.";
    } else {
      fraseBurro = "Você é tão burro que nem percebe que é burro.";
    }
  
    let emojiBurro;
    if (nivelBurro <= 20) {
      emojiBurro = "🙄";
    } else if (nivelBurro <= 40) {
      emojiBurro = "😕";
    } else if (nivelBurro <= 60) {
      emojiBurro = "🤔";
    } else if (nivelBurro <= 80) {
      emojiBurro = "🤦‍♂️";
    } else {
      emojiBurro = "🤯";
    }
  
    let graficoBurro = '';
    for (let i = 10; i <= 100; i += 10) {
      if (nivelBurro >= i) {
        graficoBurro += '🟫';
      } else {
        graficoBurro += '⬜️';
      }
    } 
  
    const respostaBurro = `*Nível de burrice*\n\nO seu nível de burrice é ${nivelBurro}%\n\n${fraseBurro}${emojiBurro}\n${graficoBurro} *${nivelBurro}%*`;
  
    bot.sendMessage(message.chat.id, respostaBurro, {reply_to_message_id: message.message_id, parse_mode: 'Markdown' });
}


module.exports = {
    donkeyCommand
  };