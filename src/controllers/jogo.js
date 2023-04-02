function gameCommand(bot, message) {
    const randomIndex = Math.floor(Math.random() * 6);

    switch (randomIndex) {
        case 0:
            bot.sendDice(message.chat.id, {
                emoji: "🎲",
                animation_duration: 5,
            });
            break;
        case 1:
            bot.sendDice(message.chat.id, {
                emoji: "🎯",
                animation_duration: 5,
            });
            break;
        case 2:
            bot.sendDice(message.chat.id, {
                emoji: "🎳",
                animation_duration: 5,
            });
            break;
        case 3:
            bot.sendDice(message.chat.id, {
                emoji: "⚽️",
                animation_duration: 5,
            });
            break;
        case 4:
            bot.sendDice(message.chat.id, {
                emoji: "🎰",
                animation_duration: 5,
            });
            break;
        case 5:
            bot.sendDice(message.chat.id, {
                emoji: "🏀",
                animation_duration: 5,
            });
            break;
    }
}

module.exports = {
    gameCommand,
};
