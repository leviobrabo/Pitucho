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

const { ChatModel } = require("../database");
const { UserModel } = require("../database");

function is_dev(user_id) {
    const devUsers = process.env.DEV_USERS.split(",");
    return devUsers.includes(user_id.toString());
}

bot.onText(
    /^\/?(start|start@Pitucho_bot|!start|!start@Pitucho_bot)$/,
    (message) => {
        startCommand(bot, message);
    }
);

bot.onText(
    /^\/?(help|help@Pitucho_bot|!help|!help@Pitucho_bot)$/,
    (message) => {
        helpCommand(bot, message);
    }
);

bot.onText(
    /^\/?(felicidade|felicidade@Pitucho_bot|!felicidade|!felicidade@Pitucho_bot)$/,
    (message) => {
        happinessCommand(bot, message);
    }
);

bot.onText(
    /^\/?(raiva|raiva@Pitucho_bot|!raiva|!raiva@Pitucho_bot)$/,
    (message) => {
        angerCommand(bot, message);
    }
);

bot.onText(
    /^\/?(apaixonado|apaixonado@Pitucho_bot|!apaixonado|!apaixonado@Pitucho_bot)$/,
    (message) => {
        lovelingCommand(bot, message);
    }
);

bot.onText(
    /^\/?(chato|chato@Pitucho_bot|!chato|!chato@Pitucho_bot)$/,
    (message) => {
        boringCommand(bot, message);
    }
);

bot.onText(
    /^\/?(estados|estados@Pitucho_bot|!estados|!estados@Pitucho_bot)$/,
    (message) => {
        stateCommand(bot, message);
    }
);

bot.onText(
    /^\/?(gado|gado@Pitucho_bot|!gado|!gado@Pitucho_bot)$/,
    (message) => {
        gadoCommand(bot, message);
    }
);

bot.onText(
    /^\/?(casamento|casamento@Pitucho_bot|!casamento|!casamento@Pitucho_bot)$/,
    (message) => {
        marriageCommand(bot, message);
    }
);

bot.onText(
    /^\/?(nascimento|nascimento@Pitucho_bot|!nascimento|!nascimento@Pitucho_bot)$/,
    (message) => {
        birthCommand(bot, message);
    }
);

bot.onText(
    /^\/?(morte|morte@Pitucho_bot|!morte|!morte@Pitucho_bot)$/,
    (message) => {
        deathCommand(bot, message);
    }
);

bot.onText(
    /^\/?(genero|genero@Pitucho_bot|!genero|!genero@Pitucho_bot)$/,
    (message) => {
        genderCommand(bot, message);
    }
);

bot.onText(
    /^\/?(filho|filho@Pitucho_bot|!filho|!filho@Pitucho_bot)$/,
    (message) => {
        sonCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sorte|sorte@Pitucho_bot|!sorte|!sorte@Pitucho_bot)$/,
    (message) => {
        luckCommand(bot, message);
    }
);

bot.onText(
    /^\/?(presidente|presidente@Pitucho_bot|!presidente|!presidente@Pitucho_bot)$/,
    (message) => {
        presidentCommand(bot, message);
    }
);

bot.onText(
    /^\/?(ator|ator@Pitucho_bot|!ator|!ator@Pitucho_bot)$/,
    (message) => {
        actorCommand(bot, message);
    }
);

bot.onText(
    /^\/?(religiao|religiao@Pitucho_bot|!religiao|!religiao@Pitucho_bot)$/,
    (message) => {
        religionCommand(bot, message);
    }
);

bot.onText(
    /^\/?(altura|altura@Pitucho_bot|!altura|!altura@Pitucho_bot)$/,
    (message) => {
        heightCommand(bot, message);
    }
);

bot.onText(
    /^\/?(idade|idade@Pitucho_bot|!idade|!idade@Pitucho_bot)$/,
    (message) => {
        ageCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sistema|sistema@Pitucho_bot|!sistema|!sistema@Pitucho_bot)$/,
    (message) => {
        systemsCommand(bot, message);
    }
);

bot.onText(
    /^\/?(profissao|profissao@Pitucho_bot|!profissao|!profissao@Pitucho_bot)$/,
    (message) => {
        professionCommand(bot, message);
    }
);

bot.onText(
    /^\/?(ciumes|ciumes@Pitucho_bot|!ciumes|!ciumes@Pitucho_bot)$/,
    (message) => {
        jealousyCommand(bot, message);
    }
);
bot.onText(
    /^\/?(saudades|saudades@Pitucho_bot|!saudades|!saudades@Pitucho_bot)$/,
    (message) => {
        longingCommand(bot, message);
    }
);
bot.onText(
    /^\/?(burro|burro@Pitucho_bot|!burro|!burro@Pitucho_bot)$/,
    (message) => {
        donkeyCommand(bot, message);
    }
);

bot.onText(/^\/?(tpm|tpm@Pitucho_bot|!tpm|!tpm@Pitucho_bot)$/, (message) => {
    tpmCommand(bot, message);
});

bot.onText(
    /^\/?(gostosura|gostosura@Pitucho_bot|!gostosura|!gostosura@Pitucho_bot)$/,
    (message) => {
        hotnessCommand(bot, message);
    }
);

bot.onText(
    /^\/?(treteiro|treteiro@Pitucho_bot|!treteiro|!treteiro@Pitucho_bot)$/,
    (message) => {
        treteiroCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sexo|sexo@Pitucho_bot|!sexo|!sexo@Pitucho_bot)$/,
    (message) => {
        sexCommand(bot, message);
    }
);

bot.onText(
    /^\/?(fake|fake@Pitucho_bot|!fake|!fake@Pitucho_bot)$/,
    (message) => {
        fakeCommand(bot, message);
    }
);

bot.onText(
    /^\/?(serbanido|serbanido@Pitucho_bot|!serbanido|!serbanido@Pitucho_bot)$/,
    (message) => {
        testbanCommand(bot, message);
    }
);

bot.onText(
    /^\/?(seradm|seradm@Pitucho_bot|!seradm|!seradm@Pitucho_bot)$/,
    (message) => {
        testadmCommand(bot, message);
    }
);

bot.onText(
    /^\/?(signo|signo@Pitucho_bot|!signo|!signo@Pitucho_bot)$/,
    (message) => {
        signoCommand(bot, message);
    }
);

bot.onText(
    /^\/?(numerodasorte|numerodasorte@Pitucho_bot|!numerodasorte|!numerodasorte@Pitucho_bot)$/,
    (message) => {
        luckynumberCommand(bot, message);
    }
);

bot.onText(
    /^\/?(desafio|desafio@Pitucho_bot|!desafio|!desafio@Pitucho_bot)$/,
    (message) => {
        challengesCommand(bot, message);
    }
);

bot.onText(
    /^\/?(filme|filme@Pitucho_bot|!filme|!filme@Pitucho_bot)$/,
    (message) => {
        moviesCommand(bot, message);
    }
);
bot.onText(
    /^\/?(clima|clima@Pitucho_bot|!clima|!clima@Pitucho_bot)$/,
    (message) => {
        wheaterCommand(bot, message);
    }
);

bot.onText(
    /^\/?(musica|musica@Pitucho_bot|!musica|!musica@Pitucho_bot)$/,
    (message) => {
        musicCommand(bot, message);
    }
);

bot.onText(
    /^\/?(origem|origem@Pitucho_bot|!origem|!origem@Pitucho_bot)$/,
    (message) => {
        originCommand(bot, message);
    }
);

bot.onText(
    /^\/?(jogo|jogo@Pitucho_bot|!jogo|!jogo@Pitucho_bot)$/,
    (message) => {
        gameCommand(bot, message);
    }
);

bot.onText(/^\/?(cor|cor@Pitucho_bot|!cor|!cor@Pitucho_bot)$/, (message) => {
    colorCommand(bot, message);
});

bot.onText(
    /^\/?(stickers|stickers@Pitucho_bot|!stickers|!stickers@Pitucho_bot)$/,
    (message) => {
        stickersCommand(bot, message);
    }
);

bot.onText(
    /^\/?(crush|crush@Pitucho_bot|!crush|!crush@Pitucho_bot)$/,
    (message) => {
        crushCommand(bot, message);
    }
);

bot.onText(
    /^\/?(time|time@Pitucho_bot|!time|!time@Pitucho_bot)$/,
    (message) => {
        timeCommand(bot, message);
    }
);

bot.onText(
    /^\/?(fruta|fruta@Pitucho_bot|!fruta|!fruta@Pitucho_bot)$/,
    (message) => {
        frutCommand(bot, message);
    }
);

bot.onText(
    /^\/?(sigma|sigma@Pitucho_bot|!sigma|!sigma@Pitucho_bot)$/,
    (message) => {
        sigmaCommand(bot, message);
    }
);
bot.onText(
    /^\/?(curiosidade|curiosidade@Pitucho_bot|!curiosidade|!curiosidade@Pitucho_bot)$/,
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
        <b>User:</b> <a href="tg://user?id=${user.user_id}">${
                user.firstname
            }</a>
        <b>ID:</b> <code>${user.user_id}</code>
        <b>Username:</b> ${
            user.username ? `@${user.username}` : "Não informado"
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
        } else {
            const newChat = await ChatModel.create({ chatId, chatName });
            console.log(
                `Grupo ${newChat.chatName} (${newChat.chatId}) adicionado ao banco de dados`
            );

            const botUser = await bot.getMe();
            const newMembers = msg.new_chat_members.filter(
                (member) => member.id === botUser.id
            );

            if (newMembers.length > 0) {
                const message = `#Pitucho_bot #New_Group
    <b>Group:</b> ${chatName}
    <b>ID:</b> <code>${chatId}</code>`;

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
    if (msg.left_chat_member.id === botUser.id) {
        console.log("Bot left the group!");

        try {
            const chatId = msg.chat.id;
            const chat = await ChatModel.findOneAndDelete({ chatId });
            console.log(
                `Grupo ${chat.chatName} (${chat.chatId}) removido do banco de dados`
            );
        } catch (err) {
            console.error(err);
        }
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
    await bot.editMessageText(
        `#Fatoshistbot #Status\n\nStatus: ON\nPing: \`${m_s}ms\`\nUptime: \`${uptime_formatted}\``,
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
    "00 12 * * *",
    sendStatus,
    null,
    true,
    "America/Sao_Paulo"
);

exports.initHandler = () => {
    return bot;
};
