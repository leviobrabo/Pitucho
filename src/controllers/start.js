function startCommand(bot, message) {
    if (message.chat.type !== "private") {
        return;
    }

    const firstName = message.from.first_name;

    const text_start = `Olá, <b>${firstName}</b>!\n\nEu sou o <b>Pitucho</b>. Sou um bot para animar seu dia e grupo, consigo advinha seus sentimentos, time, presidente e ator preferido...\n\nSinta-se à vontade para me adicionar a seus grupos.\n\n📦<b>Meu código-fonte:</b> <a href="https://github.com/leviobrabo/climatologiabot">GitHub</a>\n\n<b>BTC:</b> <code>bc1qjxzlug0cwnfjrhacy9kkpdzxfj0mcxc079axtl</code>\n<b>ETH/USDT:</b> <code>0x1fbde0d2a96869299049f4f6f78fbd789d167d1b</code>``;
    const options_start = {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Adicione-me em seu grupo",
                        url: "https://t.me/Pitucho_bot?startgroup=true",
                    },
                ],
                [
                    {
                        text: "Lista de Comandos",
                        callback_data: "commands",
                    },
                    {
                        text: "Informações",
                        callback_data: "info",
                    },
                ],
            ],
        },
    };
    bot.on("callback_query", async (callbackQuery) => {
        if (callbackQuery.message.chat.type !== "private") {
            return;
        }
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;

        if (callbackQuery.data === "commands") {
            const commands = [
                "/felicidade - medidor de nível de felicidade 🙂",
                "/raiva - medidor de nível de raiva 🤬",
                "/estado - adivinha qual estado você mora 🌏",
                "/stickers - envia uma figurinha",
                "/presidente - adivinha qual é o seu presidente 🇧🇷",
                "/sorte - veja sua sorte",
                "/genero - adivinha qual é o seu gênero ⚧",
                "/casamento - adivinha a data do seu casamento 👨‍❤️‍👨",
                "/nascimento - adivinha a data do seu nascimento",
                "/morte - adivinha a data da sua morte 😵",
                "/filho - adivinha o nome, gênero e quando você vai ter um filho 👶",
                "/signo - adivinha seu signo ♈️",
                "/religiao - adivinha sua religião 🤍",
                "/ator - adivinha seu ator/atriz preferida 🥰",
                "/altura - adivinha sua altura 🤏",
                "/idade - adivinha sua idade 🎯",
                "/sistema - adivinha seu socioeconômico-políticos 🎫",
                "/profissao - adivinha sua profissão 💼",
                "/saudades - escolha de 0 a 100 quanto de saudades você tem 😰",
                "/ciumes - escolha de 0 a 100 quanto de ciúmes você tem 😠",
                "/origem - adivinha sua origem 🌱",
                "/apaixonado - medidor de nível de paixão 😍",
                "/gado - medidor de nível de gado 🐮",
                "/tpm - medidor de nível de TPM 😤",
                "/gostosura - medidor de nível de gostosura 😈",
                "/chato - medidor de nível de chatice 😒",
                "/burro - medidor de nível de burrice 🥴",
                "/treteiro - medidor de nível de tretas 🤬",
                "/sexo - medidor de nível de potencial sexual 🔞",
                "/fake - descobre se você é fake 🛃",
                "/serbanido - descobre se você vai ser banido 🚷",
                "/seradm - descobre se você pode ser adm 👮‍♀️",
                "/filme - adivinha a categoria de filme preferido 🎬",
                "/clima - adivinha seu clima preferido 🌪",
                "/numerodasorte - gera seu número da sorte 🎰",
                "/desafio - propõe um desafio para você 🏆",
                "/musica - adivinha seu estilo musical preferido 🎼",
                "/jogo - envia um game aleatório 🎮",
                "/cor - adivinha sua cor preferida🔴",
                "/crush - adivinha a primeira letra do seu crush🥰",
                "/time - adivinha seu time do coração😂",
                "/fruta - adivinha sua fruta preferida🍎",
                "/curiosidade - envia aleatoriamente curiosidade sobre o mundo👀",
                "/sigma - mede seu nível sigma🗿🍷",
            ];
            await bot.editMessageText(
                "<b>Lista de Comandos:</b> \n\n" + commands.join("\n"),
                {
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                    chat_id: chatId,
                    message_id: messageId,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Voltar",
                                    callback_data: "back_to_start",
                                },
                            ],
                        ],
                    },
                }
            );
        } else if (callbackQuery.data === "info") {
            await bot.editMessageText(
                "Sou um bot com muitas funções interessante e divertidas.\n\nAqui estão todas as informações para te ajudar a usar o bot. <b>Basta clicar em uma delas.</b>",
                {
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                    chat_id: chatId,
                    message_id: messageId,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Projetos",
                                    url: "https://t.me/pjtlbrabo",
                                },
                                {
                                    text: "Suporte",
                                    url: "https://t.me/kylorensbot",
                                },
                            ],
                            [
                                {
                                    text: "Voltar",
                                    callback_data: "back_to_start",
                                },
                            ],
                        ],
                    },
                }
            );
        } else if (callbackQuery.data === "back_to_start") {
            await bot.editMessageText(text_start, {
                parse_mode: "HTML",
                chat_id: chatId,
                message_id: messageId,
                disable_web_page_preview: true,
                reply_markup: options_start.reply_markup,
            });
        }
    });
    bot.sendMessage(message.chat.id, text_start, options_start);
}

function helpCommand(bot, message) {
    if (message.chat.type !== "private") {
        return;
    }
    const text_help =
        "Sou um bot com muitas funções interessante e divertidas.\n\nAqui estão todas as informações para te ajudar a usar o bot. <b>Basta clicar em uma delas.</b>";
    const options_help = {
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Lista de Comandos",
                        callback_data: "commands",
                    },
                ],
                [
                    { text: "Projetos", url: "https://t.me/pjtlbrabo" },
                    { text: "Suporte", url: "https://t.me/kylorensbot" },
                ],
            ],
        },
    };
    bot.on("callback_query", async (callbackQuery) => {
        if (callbackQuery.message.chat.type !== "private") {
            return;
        }
        const chatId = callbackQuery.message.chat.id;
        const messageId = callbackQuery.message.message_id;

        if (callbackQuery.data === "commands") {
            const commands = [
                "/felicidade - medidor de nível de felicidade 🙂",
                "/raiva - medidor de nível de raiva 🤬",
                "/estado - adivinha qual estado você mora 🌏",
                "/stickers - envia uma figurinha",
                "/presidente - adivinha qual é o seu presidente 🇧🇷",
                "/sorte - veja sua sorte",
                "/genero - adivinha qual é o seu gênero ⚧",
                "/casamento - adivinha a data do seu casamento 👨‍❤️‍👨",
                "/nascimento - adivinha a data do seu nascimento",
                "/morte - adivinha a data da sua morte 😵",
                "/filho - adivinha o nome, gênero e quando você vai ter um filho 👶",
                "/signo - adivinha seu signo ♈️",
                "/religiao - adivinha sua religião 🤍",
                "/ator - adivinha seu ator/atriz preferida 🥰",
                "/altura - adivinha sua altura 🤏",
                "/idade - adivinha sua idade 🎯",
                "/sistema - adivinha seu socioeconômico-políticos 🎫",
                "/profissao - adivinha sua profissão 💼",
                "/saudades - escolha de 0 a 100 quanto de saudades você tem 😰",
                "/ciumes - escolha de 0 a 100 quanto de ciúmes você tem 😠",
                "/origem - adivinha sua origem 🌱",
                "/apaixonado - medidor de nível de paixão 😍",
                "/gado - medidor de nível de gado 🐮",
                "/tpm - medidor de nível de TPM 😤",
                "/gostosura - medidor de nível de gostosura 😈",
                "/chato - medidor de nível de chatice 😒",
                "/burro - medidor de nível de burrice 🥴",
                "/treteiro - medidor de nível de tretas 🤬",
                "/sexo - medidor de nível de potencial sexual 🔞",
                "/fake - descobre se você é fake 🛃",
                "/serbanido - descobre se você vai ser banido 🚷",
                "/seradm - descobre se você pode ser adm 👮‍♀️",
                "/filme - adivinha a categoria de filme preferido 🎬",
                "/clima - adivinha seu clima preferido 🌪",
                "/numerodasorte - gera seu número da sorte 🎰",
                "/desafio - propõe um desafio para você 🏆",
                "/musica - adivinha seu estilo musical preferido 🎼",
                "/jogo - envia um game aleatório 🎮",
                "/cor - adivinha sua cor preferida🔴",
                "/crush - adivinha a primeira letra do seu crush🥰",
                "/time - adivinha seu time do coração😂",
                "/fruta - adivinha sua fruta preferida🍎",
                "/curiosidade - envia aleatoriamente curiosidade sobre o mundo👀",
                "/sigma - mede seu nível sigma🗿🍷",
            ];
            await bot.editMessageText(
                "<b>Lista de Comandos:</b> \n\n" + commands.join("\n"),
                {
                    parse_mode: "HTML",
                    disable_web_page_preview: true,
                    chat_id: chatId,
                    message_id: messageId,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Voltar",
                                    callback_data: "back_to_help",
                                },
                            ],
                        ],
                    },
                }
            );
        } else if (callbackQuery.data === "back_to_help") {
            await bot.editMessageText(text_help, {
                parse_mode: "HTML",
                chat_id: chatId,
                message_id: messageId,
                disable_web_page_preview: true,
                reply_markup: options_help.reply_markup,
            });
        }
    });

    bot.sendMessage(message.chat.id, text_help, options_help);
}

module.exports = {
    startCommand,
    helpCommand,
};
