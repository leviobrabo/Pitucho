const {bot} = require('../bot')
const { startCommand, helpCommand } = require('../controllers/start');
const { happinessCommand } = require('../controllers/felicidade');
const { angerCommand } = require('../controllers/raiva');
const { lovelingCommand } = require('../controllers/apaixonado');
const { boringCommand } = require('../controllers/chato');
const { stateCommand } = require('../controllers/estados');
const { gadoCommand } = require('../controllers/gado');
const { marriageCommand } = require('../controllers/casamento');
const { birthCommand } = require('../controllers/nascimento');
const { deathCommand } = require('../controllers/morte');
const { genderCommand } = require('../controllers/genero');
const { sonCommand } = require('../controllers/filho');
const { luckCommand } = require('../controllers/sorte');
const { presidentCommand  } = require('../controllers/presidentes');
const { actorCommand  } = require('../controllers/ator');
const { religionCommand  } = require('../controllers/religiao');
const { heightCommand  } = require('../controllers/altura');
const { ageCommand } = require('../controllers/idade');
const { systemsCommand } = require('../controllers/sistemas');
const { professionCommand } = require('../controllers/profissao');
const { jealousyCommand } = require('../controllers/ciumes');
const { longingCommand } = require('../controllers/saudades');
const { stickersCommand } = require('../controllers/stickers');
const { tpmCommand } = require('../controllers/tpm');
const { hotnessCommand } = require('../controllers/gostosura');
const { donkeyCommand } = require('../controllers/burro');
const { treteiroCommand } = require('../controllers/treteiro');
const { sexCommand } = require('../controllers/sexo');
const { fakeCommand } = require('../controllers/fake');
const { testbanCommand } = require('../controllers/testeban');
const { testadmCommand } = require('../controllers/testeadm');
const { signoCommand } = require('../controllers/signo');
const { luckynumberCommand } = require('../controllers/numerodasorte');
const { challengesCommand } = require('../controllers/desafios');
const { moviesCommand } = require('../controllers/filmes');
const { wheaterCommand } = require('../controllers/clima');
const { musicCommand } = require('../controllers/musica');
const { originCommand } = require('../controllers/origem');
const { gameCommand } = require('../controllers/jogo');
const { colorCommand } = require('../controllers/cor');
const { crushCommand } = require('../controllers/crush');
const { timeCommand } = require('../controllers/time');
const { frutCommand } = require('../controllers/fruta');
const { sigmaCommand } = require('../controllers/sigma');
const { curiosidadeCommand } = require('../controllers/curiosidade');
const { ChatModel } = require('../database')
const { UserModel } = require('../database')



bot.onText(/^\/start$/, (message) => {
  startCommand(bot, message);
  });
  
  bot.onText(/^\/help$/, (message) => {
    helpCommand(bot, message);
  });

  bot.onText(/^\/felicidade$/, (message) => {
    happinessCommand(bot, message);
  });

  bot.onText(/^\/apaixonado$/, (message) => {
    lovelingCommand(bot, message);
  });

  bot.onText(/^\/chato$/, (message) => {
    boringCommand(bot, message);
  });

  bot.onText(/^\/estados$/, (message) => {
    stateCommand(bot, message);
  });

  bot.onText(/^\/gado$/, (message) => {
    gadoCommand(bot, message);
  });

  bot.onText(/^\/casamento$/, (message) => {
    marriageCommand(bot, message);
  });

  bot.onText(/^\/nascimento$/, (message) => {
    birthCommand(bot, message);
  });

  bot.onText(/^\/morte$/, (message) => {
    deathCommand(bot, message);
  });

  bot.onText(/^\/genero$/, (message) => {
    genderCommand(bot, message);
  });

  bot.onText(/^\/filho$/, (message) => {
    sonCommand(bot, message);
  });

  bot.onText(/^\/sorte$/, (message) => {
    luckCommand(bot, message);
  });

  bot.onText(/^\/presidente$/, async(message) => {
    await presidentCommand(bot, message);
  });

  bot.onText(/^\/ator$/, (message) => {    
    actorCommand(bot, message);
  });

  bot.onText(/^\/religiao$/, (message) => {
    religionCommand(bot, message);
  });

  bot.onText(/^\/altura$/, (message) => {
    heightCommand(bot, message);
  });

  bot.onText(/^\/idade$/, (message) => {
    ageCommand(bot, message);
  });

  bot.onText(/^\/sistema$/, (message) => {
    systemsCommand(bot, message);
  });

  bot.onText(/^\/profissao$/, (message) => {
    professionCommand(bot, message);
  });

  bot.onText(/^\/ciumes$/, (message) => {
    jealousyCommand(bot, message);
  });

  bot.onText(/^\/saudades$/, (message) => {
    longingCommand(bot, message);
  });

  bot.onText(/^\/burro$/, (message) => {
    donkeyCommand(bot, message);
  });

  bot.onText(/^\/tpm$/, (message) => {
    tpmCommand(bot, message);
  });

  bot.onText(/^\/gostosura$/, (message) => {
    hotnessCommand(bot, message);
  });

  bot.onText(/^\/treteiro$/, (message) => {
    treteiroCommand(bot, message);
  });

  bot.onText(/^\/sexo$/, (message) => {
    sexCommand(bot, message);
  });

  bot.onText(/^\/fake$/, (message) => {
    fakeCommand(bot, message);
  });

  bot.onText(/^\/serbanido$/, (message) => {
    testbanCommand(bot, message);
  });

  bot.onText(/^\/seradm$/, (message) => {
    testadmCommand(bot, message);
  });

  bot.onText(/^\/signo$/, (message) => {
    signoCommand(bot, message);
  });

  bot.onText(/^\/numerodasorte$/, (message) => {
    luckynumberCommand(bot, message);
  });

  bot.onText(/^\/desafio$/, (message) => {
    challengesCommand(bot, message);
  });

  bot.onText(/^\/filme$/, (message) => {
    moviesCommand(bot, message);
  });

  bot.onText(/^\/clima$/, (message) => {
    wheaterCommand(bot, message);
  });

  bot.onText(/^\/musica$/, (message) => {
    musicCommand(bot, message);
  });

  bot.onText(/^\/origem$/, (message) => {
    originCommand(bot, message);
  });

  bot.onText(/^\/jogo$/, (message) => {
    gameCommand(bot, message);
  });

  bot.onText(/^\/cor$/, (message) => {
    colorCommand(bot, message);
  });

  bot.onText(/^\/stickers$/, (message) => {
    stickersCommand(bot, message);
  }); 

  bot.onText(/^\/crush$/, (message) => {
    crushCommand(bot, message);
  }); 

  bot.onText(/^\/time$/, (message) => {
    timeCommand(bot, message);
  }); 
  
  bot.onText(/^\/fruta$/, (message) => {
    frutCommand(bot, message);
  }); 
  
  bot.onText(/^\/sigma$/, (message) => {
    sigmaCommand(bot, message);
  });
  bot.onText(/^\/curiosidade$/, (message) => {
    curiosidadeCommand(bot, message);
  });

bot.onText(/^\/raiva$/, (message) => {
  angerCommand(bot, message);
});

bot.on("message", async (msg) => {
  try {
    const existingUser = await UserModel.findOne({ user_id: msg.from.id });
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
      <b>User:</b> <a href="tg://user?id=${user.user_id}">${user.firstname}</a>
      <b>ID:</b> <code>${user.user_id}</code>
      <b>Username:</b> ${user.username ? `@${user.username}` : "Não informado"}`;
    bot.sendMessage(groupId, message, { parse_mode: "HTML" });
  } catch (error) {
    console.error(`Erro em salvar o usuário ${msg.from.id} no banco de dados: ${error.message}`);
  }
});

  
  
  const groupId = process.env.groupId;
 
bot.on('message', async (msg) => {
  if ((msg.chat.type === 'private' && msg.entities && msg.entities[0].type === 'bot_command') || 
      ((msg.chat.type === 'group' || msg.chat.type === 'supergroup') && msg.entities && msg.entities[0].type === 'bot_command')) {
    try {
      const existingUser = await UserModel.findOne({ user_id: msg.from.id });
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
        <b>User:</b> <a href="tg://user?id=${user.user_id}">${user.firstname}</a>
        <b>ID:</b> <code>${user.user_id}</code>
        <b>Username:</b> ${user.username ? `@${user.username}` : "Não informado"}`;
      bot.sendMessage(groupId, message, { parse_mode: "HTML" });
    } catch (error) {
      console.error(`Erro em salvar o usuário ${msg.from.id} no banco de dados: ${error.message}`);
    }
  }
});

bot.on('polling_error', (error) => {
  console.error(error);
});


  
bot.on('new_chat_members', async (msg) => {
  const chatId = msg.chat.id;
  const chatName = msg.chat.title;

  try {
    const existingChat = await ChatModel.findOne({ chatId });
    if (existingChat) {
      return;
    }

    const chat = await ChatModel.create({ chatId, chatName });
    console.log(`Grupo ${chat.chatName} (${chat.chatId}) adicionado ao banco de dados`);
  } catch (err) {
    console.error(err);
  }
});

bot.on('left_chat_member', async (msg) => {
  const chatId = msg.chat.id;

  try {
    const chat = await ChatModel.findOneAndDelete({ chatId });
    console.log(`Grupo ${chat.chatName} (${chat.chatId}) removido do banco de dados`);
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
  
  ChatModel.on('save', (chat) => {
    const message = `#Pitucho #New_Group
    <b>Group:</b> <a href="tg://resolve?domain=${chat.chatName}&amp;id=${chat.chatId}">${chat.chatName}</a>
    <b>ID:</b> <code>${chat.chatId}</code>`;
    bot.sendMessage(groupId, message, { parse_mode: "HTML" })
      .catch(error => {
        console.error(`Erro ao enviar mensagem para o grupo ${groupId}: ${error}`);
      });
  });
  
  bot.on('polling_error', (error) => {
    console.error(`Erro no bot de polling: ${error}`);
  });
  




  exports.initHandler = () => {
    return bot;
  }
  
