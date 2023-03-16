const profissoes = [
    {
      nome: 'Médico(a)',
      funcao: 'Cuida da saúde das pessoas e prescreve tratamentos médicos.',
      emoji: '🩺'
    },
    {
      nome: 'Psicólogo(a)',
      funcao: 'Trata de questões emocionais, mentais e comportamentais dos pacientes.',
      emoji: '🧠'
    },
    {
      nome: 'Bombeiro(a)',
      funcao: 'Combate incêndios, realiza salvamentos e presta primeiros socorros.',
      emoji: '🚒'
    },
    {
      nome: 'Policial',
      funcao: 'Mantém a segurança e a ordem pública e investiga crimes.',
      emoji: '👮‍♂️'
    },
    {
      nome: 'Contador(a)',
      funcao: 'Registra e analisa informações financeiras das empresas.',
      emoji: '🧮'
    },
    {
      nome: 'Piloto(a)',
      funcao: 'Controla a navegação de aeronaves e garante a segurança dos passageiros.',
      emoji: '✈️'
    },
    {
      nome: 'Veterinário(a)',
      funcao: 'Cuida da saúde e bem-estar dos animais.',
      emoji: '🐾'
    },
    {
      nome: 'Nutricionista',
      funcao: 'Orienta as pessoas sobre hábitos alimentares saudáveis e balanceados.',
      emoji: '🥗'
    },
    {
      nome: 'Fisioterapeuta',
      funcao: 'Trata de lesões, doenças e disfunções físicas dos pacientes.',
      emoji: '🦵'
    },
    {
      nome: 'Cientista',
      funcao: 'Realiza pesquisas e estudos em diversas áreas da ciência.',
      emoji: '🔬'
    },
    {
      nome: 'Escritor(a)',
      funcao: 'Cria e desenvolve obras literárias, como livros e roteiros.',
      emoji: '📝'
    },
    {
      nome: 'Cineasta',
      funcao: 'Dirige e produz filmes e outras produções audiovisuais.',
      emoji: '🎬'
    },
    {
      nome: 'Empresário(a)',
      funcao: 'Gerencia e administra empresas e negócios.',
      emoji: '💼'
    },
    {
      nome: 'Atleta',
      funcao: 'Pratica e compete em esportes profissionalmente.',
      emoji: '🏅'
    },
    {
      nome: 'Chef de Cozinha',
      funcao: 'Cria e desenvolve receitas e pratos culinários.',
      emoji: '👨‍🍳'
    },
    {
      nome: 'Produtor(a) Musical',
      funcao: 'Produz e grava músicas e álbuns para artistas.',
      emoji: '🎧'
    },
    {
      nome: 'Cirurgião(ã)',
      funcao: 'Realiza cirurgias e procedimentos médicos em pacientes.',
      emoji: '🔪'
    },
    {
      nome: 'Construtor(a)',
      funcao: 'Constrói edifícios, estruturas e obras de engenharia civil.',
      emoji: '🏗️'
    },
    {
      nome: 'Psiquiatra',
      funcao: 'É responsável por diagnosticar e tratar todas as questões de ordem mental, como dependência química, depressão e ansiedade, por exemplo.',
      emoji: '🩺'
    },
    {
      nome: 'Arquiteto(a)',
      funcao: 'Desenvolve projetos e planos para construções e edifícios.',
      emoji: '🏛️'
    },
    {
      nome: 'Advogado(a)',
      funcao: 'Representa e defende os interesses legais de seus clientes.',
      emoji: '👨‍💼'
    },
    {
      nome: 'Jornalista',
      funcao: 'Pesquisa, escreve e reporta notícias e informações ao público.',
      emoji: '📰'
    },
    {
      nome: 'Enfermeiro(a)',
      funcao: 'Cuida e trata de pacientes em hospitais e clínicas.',
      emoji: '👨‍⚕️'
    },
    {
      nome: 'Professor(a)',
      funcao: 'Ensina e educa alunos em instituições de ensino.',
      emoji: '👨‍🏫'
    },
    {
      nome: 'Tradutor(a)',
      funcao: 'Traduz textos e documentos de um idioma para outro.',
      emoji: '🌎'
    },
    {
      nome: 'Designer Gráfico',
      funcao: 'Cria e desenvolve projetos visuais e gráficos para empresas e marcas.',
      emoji: '🎨'
    },
    {
      nome: 'Médico(a)',
      funcao: 'Diagnostica, trata e previne doenças e condições médicas em pacientes.',
      emoji: '👨‍⚕️'
    },
    {
      nome: 'Programador(a)',
      funcao: 'Desenvolve e escreve códigos para sistemas e aplicativos de software.',
      emoji: '💻'
    },
    {
      nome: 'Músico',
      funcao: 'Cria e toca músicas e instrumentos musicais.',
      emoji: '🎵'
    },
    {
      nome: 'Psicanalista',
      funcao: 'Trata de questões emocionais e psicológicas dos pacientes.',
      emoji: '👥'
    },
    {
      nome: 'Engenheiro(a) Civil',
      funcao: 'Projeta e constrói estruturas e obras de engenharia civil.',
      emoji: '🏗️'
    },
    {
      nome: 'Artista Plástico',
      funcao: 'Cria e desenvolve obras de arte visuais e tridimensionais.',
      emoji: '🎨'
    },
    {
      nome: 'Escultor(a)',
      funcao: 'Cria e desenvolve esculturas e obras de arte tridimensionais.',
      emoji: '🗿'
    },
    {
      nome: 'Cantor(a)',
      funcao: 'Canta e apresenta músicas em público.',
      emoji: '🎤'
    },
    {
      nome: 'Técnico(a) de Informática',
      funcao: 'Instala, configura e mantém computadores e sistemas de informação.',
      emoji: '💻'
    },
    {
      nome: 'Fotógrafo(a)',
      funcao: 'Captura e produz fotografias e imagens para diversas finalidades.',
      emoji: '📷'
    },
    {
      nome: 'Biólogo(a)',
      funcao: 'Estuda e pesquisa a vida e os organismos vivos.',
      emoji: '🌱'
    },
  ];
  
  
  
  
  
  function professionCommand(bot, message) {
    const profissaoIndex  = Math.floor(Math.random() * profissoes.length);
    const profissao  = profissoes[profissaoIndex];
  
    
    bot.sendMessage(message.chat.id, `*Sua profissão 💼* \n\n*Nome:* ${profissao.nome} ${profissao.emoji} \n*Função:* ${profissao.funcao}`, {
      parse_mode: 'Markdown',
      reply_to_message_id: message.message_id
    });
  }

  module.exports = {
    professionCommand
  };