const { bot } = require("../bot");
const { startCommand, helpCommand } = require("../controllers/start");
const { happinessCommand } = require("../controllers/felicidade");
const { angerCommand } = require("../controllers/raiva");
const { lovelingCommand } = require("../controllers/apaixonado");
const { boringCommand } = require("../controllers/chato");
const { stateCommand } = require("../controllers/estados");
const { gadoCommand } = require("../controllers/gado");
const { marriageCommand } = require("../controllers/casamento");
const { birthCommand } = require("../controllers/nascimento");
const { deathCommand } = require("../controllers/morte");
const { genderCommand } = require("../controllers/genero");
const { sonCommand } = require("../controllers/filho");
const { luckCommand } = require("../controllers/sorte");
const { presidentCommand } = require("../controllers/presidentes");
const { actorCommand } = require("../controllers/ator");
const { religionCommand } = require("../controllers/religiao");
const { heightCommand } = require("../controllers/altura");
const { ageCommand } = require("../controllers/idade");
const { systemsCommand } = require("../controllers/sistemas");
const { professionCommand } = require("../controllers/profissao");
const { jealousyCommand } = require("../controllers/ciumes");
const { longingCommand } = require("../controllers/saudades");
const { stickersCommand } = require("../controllers/stickers");
const { tpmCommand } = require("../controllers/tpm");
const { hotnessCommand } = require("../controllers/gostosura");
const { donkeyCommand } = require("../controllers/burro");
const { treteiroCommand } = require("../controllers/treteiro");
const { sexCommand } = require("../controllers/sexo");
const { fakeCommand } = require("../controllers/fake");
const { testbanCommand } = require("../controllers/testeban");
const { testadmCommand } = require("../controllers/testeadm");
const { signoCommand } = require("../controllers/signo");
const { luckynumberCommand } = require("../controllers/numerodasorte");
const { challengesCommand } = require("../controllers/desafios");
const { moviesCommand } = require("../controllers/filmes");
const { wheaterCommand } = require("../controllers/clima");
const { musicCommand } = require("../controllers/musica");
const { originCommand } = require("../controllers/origem");
const { gameCommand } = require("../controllers/jogo");
const { colorCommand } = require("../controllers/cor");
const { crushCommand } = require("../controllers/crush");
const { timeCommand } = require("../controllers/time");
const { frutCommand } = require("../controllers/fruta");
const { sigmaCommand } = require("../controllers/sigma");
const { curiosidadeCommand } = require("../controllers/curiosidade");
const CronJob = require("cron").CronJob;

const { ChatModel } = require("../database");
const { UserModel } = require("../database");

function is_dev(user_id) {
    const devUsers = process.env.DEV_USERS.split(",");
    return devUsers.includes(user_id.toString());
}

bot.onText(
    /^\/?(start|start@pituchosbot|!start)$/,
    (message) => {
        startCommand(bot, message);
    }
);

bot.onText(
    /^\/?(help|help@pituchosbot|!help)$/,
    (message) => {
        helpCommand(bot, message);
    }
);

bot.onText(
    /^\/?(felicidade|felicidade@pituchosbot|!felicidade)$/,
    (message) => {
        happinessCommand(bot, message);
    }
);

bot.onText(
    /^\/?(raiva|raiva@pituchosbot|!raiva)$/,
    (message) => {
        angerCommand(bot, message);
    }
);

bot.onText(
    /^\/?(apaixonado|apaixonado@pituchosbot|!apaixonado)$/,
    (message) => {
        lovelingCommand(bot, message);
    }
);

bot.onText(
    /^\/?(chato|chato@pituchosbot|!chato)$/,
    (message) => {
        boringCommand(bot, message);
    }
);

bot.onText(
    /^\/?(estados|estados@pituchosbot|!estados)$/,
    (message) => {
        stateCommand(bot, message);
    }
);

bot.onText(
    /^\/?(gado|gado@pituchosbot|!gado)$/,
    (message) => {
        gadoCommand(bot, message);
    }
);

bot.onText(
    /^\/?(casamento|casamento@pituchosbot|!casamento)$/,
    (message) => {
        marriageCommand(bot, message);
    }
);

bot.onText(
    /^\/?(nascimento|nascimento@pituchosbot|!nascimento)$/,
    (message) => {
        birthCommand(bot, message);
    }
);

bot.onText(
    /^\/?(morte|morte@pituchosbot|!morte)$/,
    (message) => {
        deathCommand(bot, message);
    }
);

bot.onText(
    /^\/?(genero|genero@pituchosbot|!genero)$/,
    (message) => {
        genderCommand(bot, message);
    }
);

bot.onText(
    /^\/?(filho|filho@pituchosbot|!filho)$/,
    (message) => {
        sonCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sorte|sorte@pituchosbot|!sorte)$/,
    (message) => {
        luckCommand(bot, message);
    }
);

bot.onText(
    /^\/?(presidente|presidente@pituchosbot|!presidente)$/,
    (message) => {
        presidentCommand(bot, message);
    }
);

bot.onText(
    /^\/?(ator|ator@pituchosbot|!ator)$/,
    (message) => {
        actorCommand(bot, message);
    }
);

bot.onText(
    /^\/?(religiao|religiao@pituchosbot|!religiao)$/,
    (message) => {
        religionCommand(bot, message);
    }
);

bot.onText(
    /^\/?(altura|altura@pituchosbot|!altura)$/,
    (message) => {
        heightCommand(bot, message);
    }
);

bot.onText(
    /^\/?(idade|idade@pituchosbot|!idade)$/,
    (message) => {
        ageCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sistema|sistema@pituchosbot|!sistema)$/,
    (message) => {
        systemsCommand(bot, message);
    }
);

bot.onText(
    /^\/?(profissao|profissao@pituchosbot|!profissao)$/,
    (message) => {
        professionCommand(bot, message);
    }
);

bot.onText(
    /^\/?(ciumes|ciumes@pituchosbot|!ciumes)$/,
    (message) => {
        jealousyCommand(bot, message);
    }
);
bot.onText(
    /^\/?(saudades|saudades@pituchosbot|!saudades)$/,
    (message) => {
        longingCommand(bot, message);
    }
);
bot.onText(
    /^\/?(burro|burro@pituchosbot|!burro)$/,
    (message) => {
        donkeyCommand(bot, message);
    }
);

bot.onText(/^\/?(tpm|tpm@pituchosbot|!tpm)$/,
    (message) => {
        tpmCommand(bot, message);
    });

bot.onText(
    /^\/?(gostosura|gostosura@pituchosbot|!gostosura)$/,
    (message) => {
        hotnessCommand(bot, message);
    }
);

bot.onText(
    /^\/?(treteiro|treteiro@pituchosbot|!treteiro)$/,
    (message) => {
        treteiroCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sexo|sexo@pituchosbot|!sexo)$/,
    (message) => {
        sexCommand(bot, message);
    }
);

bot.onText(
    /^\/?(fake|fake@pituchosbot|!fake)$/,
    (message) => {
        fakeCommand(bot, message);
    }
);

bot.onText(
    /^\/?(serbanido|serbanido@pituchosbot|!serbanido)$/,
    (message) => {
        testbanCommand(bot, message);
    }
);

bot.onText(
    /^\/?(seradm|seradm@pituchosbot|!seradm)$/,
    (message) => {
        testadmCommand(bot, message);
    }
);

bot.onText(
    /^\/?(signo|signo@pituchosbot|!signo)$/,
    (message) => {
        signoCommand(bot, message);
    }
);

bot.onText(
    /^\/?(numerodasorte|numerodasorte@pituchosbot|!numerodasorte)$/,
    (message) => {
        luckynumberCommand(bot, message);
    }
);

bot.onText(
    /^\/?(desafio|desafio@pituchosbot|!desafio)$/,
    (message) => {
        challengesCommand(bot, message);
    }
);

bot.onText(
    /^\/?(filme|filme@pituchosbot|!filme)$/,
    (message) => {
        moviesCommand(bot, message);
    }
);
bot.onText(
    /^\/?(clima|clima@pituchosbot|!clima)$/,
    (message) => {
        wheaterCommand(bot, message);
    }
);

bot.onText(
    /^\/?(musica|musica@pituchosbot|!musica)$/,
    (message) => {
        musicCommand(bot, message);
    }
);

bot.onText(
    /^\/?(origem|origem@pituchosbot|!origem)$/,
    (message) => {
        originCommand(bot, message);
    }
);

bot.onText(
    /^\/?(jogo|jogo@pituchosbot|!jogo)$/,
    (message) => {
        gameCommand(bot, message);
    }
);

bot.onText(
    /^\/?(cor|cor@pituchosbot|!cor)$/,
    (message) => {
        colorCommand(bot, message);
    });

bot.onText(
    /^\/?(stickers|stickers@pituchosbot|!stickers)$/,
    (message) => {
        stickersCommand(bot, message);
    }
);

bot.onText(
    /^\/?(crush|crush@pituchosbot|!crush)$/,
    (message) => {
        crushCommand(bot, message);
    }
);

bot.onText(
    /^\/?(time|time@pituchosbot|!time)$/,
    (message) => {
        timeCommand(bot, message);
    }
);

bot.onText(
    /^\/?(fruta|fruta@pituchosbot|!fruta)$/,
    (message) => {
        frutCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sigma|sigma@pituchosbot|!sigma)$/,
    (message) => {
        sigmaCommand(bot, message);
    }
);
bot.onText(
    /^\/?(curiosidade|curiosidade@pituchosbot|!curiosidade)$/,
    (message) => {
        curiosidadeCommand(bot, message);
    }
);

const groupId = process.env.groupId;

bot.on("message", async (msg) => {
    try {
        if (
            msg.chat.type === "private" &&
            msg.entities &&
            msg.entities[0].type === "bot_command"
        ) {
            const existingUser = await UserModel.findOne({
                user_id: msg.from.id,
            });
            if (existingUser) {
                return;
            }

            const user = new UserModel({
                user_id: msg.from.id,
                username: msg.from.username,
                firstname: msg.from.first_name,
                lastname: msg.from.last_name,
            });

            await user.save();
            console.log(`Usuário ${msg.from.id} salvo no banco de dados.`);

            const message = `#Pitucho #New_User
        <b>User:</b> <a href="tg://user?id=${user.user_id}">${user.firstname
                }</a>
        <b>ID:</b> <code>${user.user_id}</code>
        <b>Username:</b> ${user.username ? `@${user.username}` : "Não informado"
                }`;
            bot.sendMessage(groupId, message, { parse_mode: "HTML" });
        }
    } catch (error) {
        console.error(
            `Erro em salvar o usuário ${msg.from.id} no banco de dados: ${error.message}`
        );
    }
});

bot.on("polling_error", (error) => {
    console.error(error);
});

bot.on("new_chat_members", async (msg) => {
    const chatId = msg.chat.id;
    const chatName = msg.chat.title;

    try {
        const chat = await ChatModel.findOne({ chatId: chatId });

        if (chat) {
            console.log(
                `Grupo ${chatName} (${chatId}) já existe no banco de dados`
            );
            if (chat.is_ban) {
                console.log(
                    `Grupo ${chatName} (${chatId}) está banido, saindo do grupo`
                );
                await bot.leaveChat(chatId);
                return;
            }
        } else {
            const newChat = await ChatModel.create({
                chatId,
                chatName,
                is_ban: false,
            });
            console.log(
                `Grupo ${newChat.chatName} (${newChat.chatId}) adicionado ao banco de dados`
            );

            const botUser = await bot.getMe();
            const newMembers = msg.new_chat_members.filter(
                (member) => member.id === botUser.id
            );

            if (msg.chat.username) {
                chatusername = `@${msg.chat.username}`;
            } else {
                chatusername = "Private Group";
            }

            if (newMembers.length > 0) {
                const message = `#pituchosbot #New_Group
    <b>Group:</b> ${chatName}
    <b>ID:</b> <code>${chatId}</code>
    <b>Link:</b> ${chatusername}`;

                bot.sendMessage(groupId, message, { parse_mode: "HTML" }).catch(
                    (error) => {
                        console.error(
                            `Erro ao enviar mensagem para o grupo ${chatId}: ${error}`
                        );
                    }
                );
            }

            bot.sendMessage(
                chatId,
                "Olá, meu nome é Pitucho! Obrigado por me adicionado em seu grupo.\n\nEu sou bot com vários comandos divertidos e legais.",
                {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Visite nosso canal",
                                    url: "https://t.me/pjtlbrabo",
                                },
                                {
                                    text: "Relate bugs",
                                    url: "https://t.me/kylorensbot",
                                },
                            ],
                        ],
                    },
                }
            );
        }
        const developerMembers = msg.new_chat_members.filter(
            (member) => member.is_bot === false && is_dev(member.id)
        );

        if (developerMembers.length > 0) {
            const message = `👨‍💻 <b>ᴜᴍ ᴅᴏs ᴍᴇᴜs ᴅᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀᴇs ᴇɴᴛʀᴏᴜ ɴᴏ ɢʀᴜᴘᴏ</b> <a href="tg://user?id=${developerMembers[0].id}">${developerMembers[0].first_name}</a> 😎👍`;
            bot.sendMessage(chatId, message, { parse_mode: "HTML" }).catch(
                (error) => {
                    console.error(
                        `Erro ao enviar mensagem para o grupo ${chatId}: ${error}`
                    );
                }
            );
        }
    } catch (err) {
        console.error(err);
    }
});

bot.on("left_chat_member", async (msg) => {
    const botUser = await bot.getMe();
    if (msg.left_chat_member.id !== botUser.id) {
        return;
    }

    const chatId = msg.chat.id;

    try {
        const chat = await ChatModel.findOne({ chatId });
        if (!chat) {
            console.log(
                `Chat com id ${chatId} não foi encontrado no banco de dados`
            );
            return;
        }
        if (chat.is_ban) {
            console.log(
                `Grupo ${chat.chatName} (${chat.chatId}) não removido do banco de dados, pois está banido`
            );
            return;
        }
        await ChatModel.findOneAndDelete({ chatId });
        console.log(
            `Grupo ${chat.chatName} (${chat.chatId}) removido do banco de dados`
        );
    } catch (err) {
        console.error(err);
    }
});

bot.onText(/\/stats/, async (msg) => {
    const chatId = msg.chat.id;
    const numUsers = await UserModel.countDocuments();
    const numChats = await ChatModel.countDocuments();
    const message = `\n──❑ 「 Bot Stats 」 ❑──\n\n ☆ ${numUsers} usuários\n ☆ ${numChats} chats`;
    bot.sendMessage(chatId, message);
});

bot.on("polling_error", (error) => {
    console.error(`Erro no bot de polling: ${error}`);
});

function timeFormatter(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const hoursFormatted = String(hours).padStart(2, "0");
    const minutesFormatted = String(minutes).padStart(2, "0");
    const secondsFormatted = String(secs).padStart(2, "0");

    return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}

bot.onText(/\/ping/, async (msg) => {
    const start = new Date();
    const replied = await bot.sendMessage(msg.chat.id, "𝚙𝚘𝚗𝚐!");
    const end = new Date();
    const m_s = end - start;
    const uptime = process.uptime();
    const uptime_formatted = timeFormatter(uptime);
    await bot.editMessageText(
        `𝚙𝚒𝚗𝚐: \`${m_s}𝚖𝚜\`\n𝚞𝚙𝚝𝚒𝚖𝚎: \`${uptime_formatted}\``,
        {
            chat_id: replied.chat.id,
            message_id: replied.message_id,
            parse_mode: "Markdown",
        }
    );
});

bot.onText(/^(\/broadcast|\/bc)\b/, async (msg, match) => {
    const user_id = msg.from.id;
    if (!(await is_dev(user_id))) {
        return;
    }
    if (msg.chat.type !== "private") {
        return;
    }

    const query = match.input.substring(match[0].length).trim();
    if (!query) {
        return bot.sendMessage(
            msg.chat.id,
            "<i>I need text to broadcast.</i>",
            { parse_mode: "HTML" }
        );
    }
    const sentMsg = await bot.sendMessage(msg.chat.id, "<i>Processing...</i>", {
        parse_mode: "HTML",
    });
    const web_preview = query.startsWith("-d");
    const query_ = web_preview ? query.substring(2).trim() : query;
    const ulist = await UserModel.find().lean().select("user_id");
    let sucess_br = 0;
    let no_sucess = 0;
    let block_num = 0;
    for (const { user_id } of ulist) {
        try {
            await bot.sendMessage(user_id, query_, {
                disable_web_page_preview: !web_preview,
                parse_mode: "HTML",
            });
            sucess_br += 1;
        } catch (err) {
            if (
                err.response &&
                err.response.body &&
                err.response.body.error_code === 403
            ) {
                block_num += 1;
            } else {
                no_sucess += 1;
            }
        }
    }
    await bot.editMessageText(
        `
  ╭─❑ 「 <b>Broadcast Completed</b> 」 ❑──
  │- <i>Total Users:</i> \`${ulist.length}\`
  │- <i>Successful:</i> \`${sucess_br}\`
  │- <i>Blocked:</i> \`${block_num}\`
  │- <i>Failed:</i> \`${no_sucess}\`
  ╰❑
    `,
        {
            chat_id: sentMsg.chat.id,
            message_id: sentMsg.message_id,
            parse_mode: "HTML",
        }
    );
});

bot.onText(/\/dev/, async (message) => {
    const userId = message.from.id;
    if (message.chat.type !== "private") {
        return;
    }
    const firstName = message.from.first_name;
    const message_start_dev = `Olá, <b>${firstName}</b>! Você é um dos desenvolvedores 🧑‍💻\n\nVocê está no painel do desenvolvedor da Janna, então aproveite a responsabilidade e use os comandos com consciências`;
    const options_start_dev = {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "📬 Canal Oficial",
                        url: "https://t.me/climatologiaofc",
                    },
                ],
                [
                    {
                        text: "🗃 Lista de para desenvolvedores",
                        callback_data: "commands",
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
                "/stats - Estatística de grupos, usuarios e mensagens enviadas",
                "/broadcast ou /bc - envia mensagem para todos usuários",
                "/ping - veja a latência da VPS",
                "/sendgp - encaminha msg para grupos",
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
                                    text: "⬅️ Voltar",
                                    callback_data: "back_to_start",
                                },
                            ],
                        ],
                    },
                }
            );
        } else if (callbackQuery.data === "back_to_start") {
            await bot.editMessageText(message_start_dev, {
                parse_mode: "HTML",
                chat_id: chatId,
                message_id: messageId,
                disable_web_page_preview: true,
                reply_markup: options_start_dev.reply_markup,
            });
        }
    });
    if (is_dev(userId)) {
        bot.sendMessage(userId, message_start_dev, options_start_dev);
    } else {
        bot.sendMessage(message.chat.id, "Você não é desenvolvedor");
    }
});

const channelStatusId = process.env.channelStatusId;

async function sendStatus() {
    const start = new Date();
    const replied = await bot.sendMessage(channelStatusId, "Bot is ON");
    const end = new Date();
    const m_s = end - start;
    const uptime = process.uptime();
    const uptime_formatted = timeFormatter(uptime);
    const numUsers = await UserModel.countDocuments();
    const numChats = await ChatModel.countDocuments();
    await bot.editMessageText(
        `#Pituchobot #Status\n\nStatus: ON\nPing: \`${m_s}ms\`\nUptime: \`${uptime_formatted}\`\nUsers: \`${numUsers}\`\nChats: \`${numChats}\``,
        {
            chat_id: replied.chat.id,
            message_id: replied.message_id,
            parse_mode: "Markdown",
        }
    );
}

function timeFormatter(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const hoursFormatted = String(hours).padStart(2, "0");
    const minutesFormatted = String(minutes).padStart(2, "0");
    const secondsFormatted = String(secs).padStart(2, "0");

    return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
}

const job = new CronJob(
    "01 00 12 * * *",
    sendStatus,
    null,
    true,
    "America/Sao_Paulo"
);

bot.onText(/^\/grupos$/, async (message) => {
    const user_id = message.from.id;
    if (!(await is_dev(user_id))) {
        return;
    }
    if (message.chat.type !== "private") {
        return;
    }

    try {
        const chats = await ChatModel.find().sort({ chatId: 1 });

        let contador = 1;
        let chunkSize = 3900 - message.text.length;
        let messageChunks = [];
        let currentChunk = "";

        for (let chat of chats) {
            if (chat.chatId < 0) {
                let groupMessage = `<b>${contador}:</b> <b>Group=</b> ${chat.chatName} || <b>ID:</b> <code>${chat.chatId}</code>\n`;
                if (currentChunk.length + groupMessage.length > chunkSize) {
                    messageChunks.push(currentChunk);
                    currentChunk = "";
                }
                currentChunk += groupMessage;
                contador++;
            }
        }
        messageChunks.push(currentChunk);

        let index = 0;

        const markup = (index) => {
            return {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: `<< ${index + 1}`,
                                callback_data: `groups:${index - 1}`,
                                disabled: index === 0,
                            },
                            {
                                text: `>> ${index + 2}`,
                                callback_data: `groups:${index + 1}`,
                                disabled: index === messageChunks.length - 1,
                            },
                        ],
                    ],
                },
                parse_mode: "HTML",
            };
        };

        await bot.sendMessage(
            message.chat.id,
            messageChunks[index],
            markup(index)
        );

        bot.on("callback_query", async (query) => {
            if (query.data.startsWith("groups:")) {
                index = Number(query.data.split(":")[1]);
                if (
                    markup(index).reply_markup &&
                    markup(index).reply_markup.inline_keyboard
                ) {
                    markup(index).reply_markup.inline_keyboard[0][0].disabled =
                        index === 0;
                    markup(index).reply_markup.inline_keyboard[0][1].disabled =
                        index === messageChunks.length - 1;
                }
                await bot.editMessageText(messageChunks[index], {
                    chat_id: query.message.chat.id,
                    message_id: query.message.message_id,
                    ...markup(index),
                });
                await bot.answerCallbackQuery(query.id);
            }
        });
    } catch (error) {
        console.error(error);
    }
});

bot.onText(/^\/ban/, async (message) => {
    const userId = message.from.id;
    const chatId = message.text.split(" ")[1];

    if (message.chat.type !== "private") {
        await bot.sendMessage(
            message.chat.id,
            "Por favor, envie este comando em um chat privado com o bot."
        );
        return;
    }

    if (!is_dev(userId)) {
        await bot.sendMessage(
            message.chat.id,
            "Você não está autorizado a executar este comando."
        );
        return;
    }

    const chat = await ChatModel.findOne({ chatId: chatId });

    if (!chat) {
        await bot.sendMessage(message.chat.id);
        return;
    }

    await ChatModel.updateOne({ chatId: chatId }, { $set: { is_ban: true } });
    await bot.sendMessage(message.chat.id, `Chat ${chatId} foi banido.`);
    await bot.leaveChat(chatId);
});

bot.onText(/^\/unban/, async (message) => {
    const userId = message.from.id;
    const chatId = message.text.split(" ")[1];

    if (message.chat.type !== "private") {
        await bot.sendMessage(
            message.chat.id,
            "Por favor, envie este comando em um chat privado com o bot."
        );
        return;
    }

    if (!is_dev(userId)) {
        await bot.sendMessage(
            message.chat.id,
            "Você não está autorizado a executar este comando."
        );
        return;
    }

    const chat = await ChatModel.findOne({ chatId: chatId });

    if (!chat) {
        await bot.sendMessage(message.chat.id);
        return;
    }

    await ChatModel.updateOne({ chatId: chatId }, { $set: { is_ban: false } });
    await bot.sendMessage(message.chat.id, `Chat ${chatId} foi desbanido.`);
});

bot.onText(/^\/banned/, async (message) => {
    const userId = message.from.id;

    if (message.chat.type !== "private") {
        await bot.sendMessage(
            message.chat.id,
            "Por favor, envie este comando em um chat privado com o bot."
        );
        return;
    }

    if (!is_dev(userId)) {
        await bot.sendMessage(
            message.chat.id,
            "Você não está autorizado a executar este comando."
        );
        return;
    }

    const bannedChats = await ChatModel.find({ is_ban: true });

    if (bannedChats.length === 0) {
        await bot.sendMessage(
            message.chat.id,
            "Nenhum chat encontrado no banco de dados que tenha sido banido."
        );
        return;
    }

    let messageText = "<b>Chats banidos:</b>\n";

    for (const chat of bannedChats) {
        messageText += `<b>Group:</b> <a href="tg://resolve?domain=${chat.chatName}&amp;id=${chat.chatId}">${chat.chatName}</a>\n`;
        messageText += `<b>ID:</b> <code>${chat.chatId}</code>\n\n`;
    }

    await bot.sendMessage(message.chat.id, messageText, { parse_mode: "HTML" });
});

bot.onText(/\/sendgp/, async (msg, match) => {
    const user_id = msg.from.id;
    if (!(await is_dev(user_id))) {
        return;
    }
    if (msg.chat.type !== "private") {
        return;
    }

    const sentMsg = await bot.sendMessage(msg.chat.id, "<i>Processing...</i>", {
        parse_mode: "HTML",
    });
    const web_preview = match.input.startsWith("-d");
    const query = web_preview ? match.input.substring(6).trim() : match.input;
    const ulist = await ChatModel.find().lean().select("chatId");
    let success_br = 0;
    let no_success = 0;
    let block_num = 0;

    // Check if the message is a reply and forward it instead of sending a new message
    if (msg.reply_to_message) {
        const replyMsg = msg.reply_to_message;
        for (const { chatId } of ulist) {
            try {
                await bot.forwardMessage(
                    chatId,
                    replyMsg.chat.id,
                    replyMsg.message_id
                );
                success_br += 1;
            } catch (err) {
                if (
                    err.response &&
                    err.response.body &&
                    err.response.body.error_code === 403
                ) {
                    block_num += 1;
                } else {
                    no_success += 1;
                }
            }
        }
    } else {
        for (const { chatId } of ulist) {
            try {
                await bot.sendMessage(chatId, query, {
                    disable_web_page_preview: !web_preview,
                    parse_mode: "HTML",
                    reply_to_message_id: msg.message_id,
                });
                success_br += 1;
            } catch (err) {
                if (
                    err.response &&
                    err.response.body &&
                    err.response.body.error_code === 403
                ) {
                    block_num += 1;
                } else {
                    no_success += 1;
                }
            }
        }
    }

    await bot.editMessageText(
        `
  ╭─❑ 「 <b>Broadcast Completed</b> 」 ❑──
  │- <i>Total Group:</i> \`${ulist.length}\`
  │- <i>Successful:</i> \`${success_br}\`
  │- <i>Removed:</i> \`${block_num}\`
  │- <i>Failed:</i> \`${no_success}\`
  ╰❑
    `,
        {
            chat_id: sentMsg.chat.id,
            message_id: sentMsg.message_id,
            parse_mode: "HTML",
        }
    );
});

exports.initHandler = () => {
    return bot;
};
