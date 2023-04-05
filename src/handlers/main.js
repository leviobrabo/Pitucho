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

bot.onText(
    /^\/?(start|start@Pitucho_bot|!start|!start@Pitucho_bot)$/,
    (message) => {
        startCommand(bot, message);
    }
);

bot.onText(/^\/?(help|help@Pitucho_bot)$/, (message) => {
    helpCommand(bot, message);
});

bot.onText(
    /^\/?(felicidade|felicidade@Pitucho_bot|!felicidade|!felicidade@Pitucho_bot)$/,
    (message) => {
        happinessCommand(bot, message);
    }
);

bot.onText(/^\/?(raiva|raiva@Pitucho_bot)$/, (message) => {
    angerCommand(bot, message);
});

bot.onText(/^\/?(apaixonado|apaixonado@Pitucho_bot)$/, (message) => {
    lovelingCommand(bot, message);
});

bot.onText(/^\/?(chato|chato@Pitucho_bot)$/, (message) => {
    boringCommand(bot, message);
});

bot.onText(/^\/?(estados|estados@Pitucho_bot)$/, (message) => {
    stateCommand(bot, message);
});

bot.onText(/^\/?(gado|gado@Pitucho_bot)$/, (message) => {
    gadoCommand(bot, message);
});

bot.onText(/^\/?(casamento|casamento@Pitucho_bot)$/, (message) => {
    marriageCommand(bot, message);
});

bot.onText(/^\/?(nascimento|nascimento@Pitucho_bot)$/, (message) => {
    birthCommand(bot, message);
});

bot.onText(/^\/?(morte|morte@Pitucho_bot)$/, (message) => {
    deathCommand(bot, message);
});

bot.onText(/^\/?(genero|genero@Pitucho_bot)$/, (message) => {
    genderCommand(bot, message);
});

bot.onText(/^\/?(filho|filho@Pitucho_bot)$/, (message) => {
    sonCommand(bot, message);
});

bot.onText(/^\/?(sorte|sorte@Pitucho_bot)$/, (message) => {
    luckCommand(bot, message);
});

bot.onText(/^\/?(presidente|presidente@Pitucho_bot)$/, (message) => {
    presidentCommand(bot, message);
});

bot.onText(/^\/?(ator|ator@Pitucho_bot)$/, (message) => {
    actorCommand(bot, message);
});

bot.onText(/^\/?(religiao|religiao@Pitucho_bot)$/, (message) => {
    religionCommand(bot, message);
});

bot.onText(/^\/?(altura|altura@Pitucho_bot)$/, (message) => {
    heightCommand(bot, message);
});

bot.onText(/^\/?(idade|idade@Pitucho_bot)$/, (message) => {
    ageCommand(bot, message);
});

bot.onText(/^\/?(sistema|sistema@Pitucho_bot)$/, (message) => {
    systemsCommand(bot, message);
});

bot.onText(/^\/?(profissao|profissao@Pitucho_bot)$/, (message) => {
    professionCommand(bot, message);
});

bot.onText(/^\/?(ciumes|ciumes@Pitucho_bot)$/, (message) => {
    jealousyCommand(bot, message);
});
bot.onText(/^\/?(saudades|saudades@Pitucho_bot)$/, (message) => {
    longingCommand(bot, message);
});
bot.onText(/^\/?(burro|burro@Pitucho_bot)$/, (message) => {
    donkeyCommand(bot, message);
});

bot.onText(/^\/?(tpm|tpm@Pitucho_bot)$/, (message) => {
    tpmCommand(bot, message);
});

bot.onText(/^\/?(gostosura|gostosura@Pitucho_bot)$/, (message) => {
    hotnessCommand(bot, message);
});

bot.onText(/^\/?(treteiro|treteiro@Pitucho_bot)$/, (message) => {
    treteiroCommand(bot, message);
});

bot.onText(/^\/?(sexo|sexo@Pitucho_bot)$/, (message) => {
    sexCommand(bot, message);
});

bot.onText(/^\/?(fake|fake@Pitucho_bot)$/, (message) => {
    fakeCommand(bot, message);
});

bot.onText(/^\/?(serbanido|serbanido@Pitucho_bot)$/, (message) => {
    testbanCommand(bot, message);
});

bot.onText(/^\/?(seradm|seradm@Pitucho_bot)$/, (message) => {
    testadmCommand(bot, message);
});

bot.onText(/^\/?(signo|signo@Pitucho_bot)$/, (message) => {
    signoCommand(bot, message);
});

bot.onText(/^\/?(numerodasorte|numerodasorte@Pitucho_bot)$/, (message) => {
    luckynumberCommand(bot, message);
});

bot.onText(/^\/?(desafio|desafio@Pitucho_bot)$/, (message) => {
    challengesCommand(bot, message);
});

bot.onText(/^\/?(filme|filme@Pitucho_bot)$/, (message) => {
    moviesCommand(bot, message);
});
bot.onText(/^\/?(clima|clima@Pitucho_bot)$/, (message) => {
    wheaterCommand(bot, message);
});

bot.onText(/^\/?(musica|musica@Pitucho_bot)$/, (message) => {
    musicCommand(bot, message);
});

bot.onText(/^\/?(origem|origem@Pitucho_bot)$/, (message) => {
    originCommand(bot, message);
});

bot.onText(/^\/?(jogo|jogo@Pitucho_bot)$/, (message) => {
    gameCommand(bot, message);
});

bot.onText(/^\/?(cor|cor@Pitucho_bot)$/, (message) => {
    colorCommand(bot, message);
});

bot.onText(/^\/?(stickers|stickers@Pitucho_bot)$/, (message) => {
    stickersCommand(bot, message);
});

bot.onText(/^\/?(crush|crush@Pitucho_bot)$/, (message) => {
    crushCommand(bot, message);
});

bot.onText(/^\/?(time|time@Pitucho_bot)$/, (message) => {
    timeCommand(bot, message);
});

bot.onText(/^\/?(fruta|fruta@Pitucho_bot)$/, (message) => {
    frutCommand(bot, message);
});

bot.onText(/^\/?(sigma|sigma@Pitucho_bot)$/, (message) => {
    sigmaCommand(bot, message);
});
bot.onText(/^\/?(curiosidade|curiosidade@Pitucho_bot)$/, (message) => {
    curiosidadeCommand(bot, message);
});

const groupId = process.env.groupId;

bot.on("message", async (msg) => {
    try {
        if (
            (msg.chat.type === "private" &&
                msg.entities &&
                msg.entities[0].type === "bot_command") ||
            ((msg.chat.type === "group" || msg.chat.type === "supergroup") &&
                msg.entities &&
                msg.entities[0].type === "bot_command")
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
        const existingChat = await ChatModel.findOne({ chatId });
        if (existingChat) {
            return;
        }

        const chat = await ChatModel.create({ chatId, chatName });
        console.log(
            `Grupo ${chat.chatName} (${chat.chatId}) adicionado ao banco de dados`
        );
        const message = `#Pitucho_bot #New_Group
    <b>Group:</b> <a href="tg://resolve?domain=${chat.chatName}&amp;id=${chat.chatId}">${chat.chatName}</a>
    <b>ID:</b> <code>${chat.chatId}</code>`;
        bot.sendMessage(groupId, message, { parse_mode: "HTML" }).catch(
            (error) => {
                console.error(
                    `Erro ao enviar mensagem para o grupo ${groupId}: ${error}`
                );
            }
        );
        const botUser = await bot.getMe();
        const newMembers = msg.new_chat_members.filter(
            (member) => member.id === botUser.id
        );

        if (newMembers.length > 0) {
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
    } catch (err) {
        console.error(err);
    }
});

bot.on("left_chat_member", async (msg) => {
    const chatId = msg.chat.id;

    try {
        const chat = await ChatModel.findOneAndDelete({ chatId });
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

exports.initHandler = () => {
    return bot;
};
