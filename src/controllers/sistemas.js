const sistemas = [
    {
      nome: 'Capitalismo',
      codenome: 'Capitalista',
      descricao: 'Sistema econômico em que os meios de produção são de propriedade privada e as atividades econômicas são guiadas pelo mercado.',
      emoji: '💰'
    },
    {
      nome: 'Socialismo',
      codenome: 'Socialista',
      descricao: 'Sistema econômico em que os meios de produção são de propriedade coletiva e as atividades econômicas são planejadas e controladas pelo Estado.',
      emoji: '👥'
    },
    {
      nome: 'Comunismo',
      codenome: 'Comunista',
      descricao: 'Sistema político e econômico que busca a eliminação das classes sociais e a propriedade coletiva dos meios de produção.',
      emoji: '🚩'
    },
    {
      nome: 'Anarquismo',
      codenome: 'Anarquista',
      descricao: 'Filosofia política que defende a eliminação do Estado e a organização da sociedade em comunidades autônomas e auto-geridas.',
      emoji: 'Ⓐ'
    },
    {
      nome: 'Fascismo',
      codenome: 'Facista',
      descricao: 'Ideologia política autoritária que enfatiza o nacionalismo, o militarismo e o totalitarismo.',
      emoji: '🕊️'
    },
    {
      nome: 'Monarquia',
      codenome: 'Monarquista',
      descricao: 'Sistema político em que o poder é exercido por um monarca, geralmente de forma hereditária.',
      emoji: '👑'
    },
    {
      nome: 'República',
      codenome: 'Republicano',
      descricao: 'Sistema político em que o poder é exercido pelo povo ou seus representantes eleitos.',
      emoji: '🗳️'
    },
    {
      nome: 'Democracia',
      codenome: 'Democrata',
      descricao: 'Sistema político em que o poder é exercido pelo povo ou seus representantes eleitos, através de processos democráticos.',
      emoji: '🗳️'
    },
    {
      nome: 'Teocracia',
      codenome: 'Teocrata',
      descricao: 'Sistema político em que o poder é exercido por líderes religiosos ou por uma religião oficial.',
      emoji: '🕍'
    },
    {
      nome: 'Meritocracia',
      codenome: 'Meritocrata',
      descricao: 'Sistema político em que o poder é exercido por indivíduos com base em seus méritos e habilidades.',
      emoji: '🎓'
    },
    {
      nome: 'Plutocracia',
      codenome: 'Plutocrata',
      descricao: 'Sistema político em que o poder é exercido pelos mais ricos ou pelos proprietários de grandes empresas.',
      emoji: '💰'
    },
    {
      nome: 'Oligarquia',
      codenome: 'Oligárquico',
      descricao: 'Sistema político em que o poder é exercido por um pequeno grupo de pessoas.',
      emoji: '👥'
    },
    {
      nome: 'Totalitarismo',
      codenome: 'Totalitário',
      descricao: 'Sistema político em que o Estado tem controle total sobre a sociedade e a economia.',
      emoji: '🛡️'
    },
    {
      nome: 'Autocracia',
      codenome: 'Autocrata',
      descricao: 'Sistema político em que o poder é exercido por uma pessoa ou por um pequeno grupo de pessoas, sem qualquer participação popular ou limitações constitucionais.',
      emoji: '👤'
      }
      ];
  
  
  
      function systemsCommand(bot, message) {
        const sistemaIndex = Math.floor(Math.random() * sistemas.length);
    const sistema = sistemas[sistemaIndex];
  
    
    bot.sendMessage(message.chat.id, `Você é um *${sistema.codenome} ${sistema.emoji}* \n\n*Sistema:* ${sistema.nome}\n\n*Descrição:* ${sistema.descricao}`, {
      parse_mode: 'Markdown',
      reply_to_message_id: message.message_id
    });
  }

  module.exports = {
    systemsCommand
  };