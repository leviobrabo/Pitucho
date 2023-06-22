const curiosidades = [
    "A lua cheia aparece no céu por cerca de 29 dias",
    "Os cavalos não conseguem vomitar",
    "O primeiro computador foi inventado na década de 1940",
    "O som se propaga mais rápido na água do que no ar",
    "A maior montanha-russa do mundo tem mais de 140 metros de altura",
    "O olho humano é capaz de distinguir mais de 10 milhões de cores",
    "A cidade de Veneza, na Itália, é formada por 118 ilhas",
    "A Mona Lisa é o quadro mais famoso do mundo",
    "O coração bate em média 100.000 vezes por dia",
    "O elefante é o maior animal terrestre",
    "Um raio pode chegar a uma temperatura de 30.000 graus Celsius.",
    "A lua é o único satélite natural da Terra.",
    "A água é o único elemento que é encontrado naturalmente na natureza em três estados diferentes: líquido, sólido e gasoso.",
    "O cérebro humano pesa cerca de 1,3 kg.",
    "O nariz humano é capaz de distinguir mais de 1 trilhão de cheiros diferentes.",
    "A cidade mais populosa do mundo é Tóquio, com uma população de mais de 37 milhões de pessoas.",
    "O diamante é a substância mais dura conhecida pelo homem.",
    "O coração humano bate cerca de 100.000 vezes por dia.",
    "A baleia-azul é o maior animal do planeta, podendo chegar a medir mais de 30 metros de comprimento.",
    "O Sol é uma estrela e está localizado a cerca de 149,6 milhões de quilômetros da Terra.",
    "O mel é o único alimento que não estraga.",
    "O olho humano é capaz de distinguir mais de 10 milhões de cores diferentes.",
    "O crocodilo é capaz de sobreviver por mais de um ano sem comer.",
    "O território da Rússia é o maior do mundo, com mais de 17 milhões de quilômetros quadrados.",
    "A barata é capaz de sobreviver por mais de uma semana sem a cabeça.",
    "O pinguim é a única ave que é capaz de nadar, mas não voar.",
    "O canguru é capaz de pular até 3 vezes a sua própria altura.",
    "O Planeta Terra tem cerca de 4,5 bilhões de anos.",
    "O peixe-palhaço é capaz de mudar de sexo ao longo da vida, podendo nascer macho e depois se tornar fêmea.",
    "O Google é o site mais visitado do mundo.",
    "A banana é a fruta mais consumida no mundo.",
    "O recorde mundial de velocidade em terra é de 1.609 km/h, alcançado pelo carro Bloodhound SSC.",
    "O corvo é um dos poucos animais que é capaz de fabricar e utilizar ferramentas.",
    "A Gran Pirâmide de Gizé, no Egito, é a única das Sete Maravilhas do Mundo Antigo que ainda existe.",
    "Aves têm um órgão chamado pipoqueira que as ajuda a digerir alimentos duros como sementes.",
    "Os buracos negros são regiões do espaço onde a gravidade é tão forte que nem a luz consegue escapar.",
    "O tatu-bola é capaz de se enrolar completamente em uma bola para se proteger dos predadores.",
    "O Google foi criado em 1996 como um projeto de pesquisa de doutorado na Universidade de Stanford.",
    "A cidade de Istambul, na Turquia, é a única cidade que está situada em dois continentes: Europa e Ásia.",
    "O elefante é o único animal que é capaz de se reconhecer em um espelho.",
    "O tigre é o maior felino do mundo.",
    "A velocidade da luz é de aproximadamente 299.792.458 metros por segundo.",
    "A Antártida é o continente mais frio do planeta, com temperaturas que podem chegar a -89,2 graus Celsius.",
    "O besouro rinoceronte é capaz de suportar mais de 850 vezes o seu próprio peso.",
    "O maior animal terrestre do planeta é o elefante-africano.",
    "O voo comercial mais longo do mundo é feito entre Singapura e Nova York, com uma duração de mais de 18 horas.",
    "O urso polar é o único urso que é capaz de viver exclusivamente em regiões de gelo.",
    "O Monte Everest é a montanha mais alta do mundo, com uma altitude de 8.848 metros.",
    "O caranguejo-aranha-japonês é o maior artrópode do mundo, podendo medir até 3,8 metros de comprimento.",
    "O planeta Vênus é o mais quente do Sistema Solar, com uma temperatura média de 462 graus Celsius.",
    "O bico do pelicano pode comportar até 13 litros de água.",
    "O deserto do Saara é o maior deserto quente do mundo.",
    "O rinoceronte-branco é o segundo maior animal terrestre do mundo, perdendo apenas para o elefante.",
    "O coração da baleia-azul é tão grande que um ser humano adulto poderia nadar através das suas artérias.",
    "O lobo é o animal selvagem mais amplamente distribuído do mundo.",
    "O quetzal é a ave nacional da Guatemala.",
    "O animal que tem o maior tempo de vida é a tartaruga-gigante-das-galápagos, que pode viver mais de 150 anos.",
    "O hipopótamo é capaz de ficar submerso na água por até 5 minutos.",
    "A Grande Barreira de Corais é o maior sistema de recifes de coral do mundo.",
    "O crocodilo de água salgada é o maior réptil do mundo, podendo chegar a medir mais de 7 metros de comprimento.",
    "O sistema nervoso humano é capaz de transmitir sinais a uma velocidade de até 400 km/h.",
    "O nome completo do personagem Mickey Mouse é Michael Theodore Mouse.",
    "A música é capaz de ativar diversas áreas do cérebro humano.",
    "O Pólo Norte é o ponto mais ao norte da Terra.",
    "O agente secreto mais famoso do mundo é James Bond.",
    "O joelho humano é a articulação mais complexa do corpo humano.",
    "O estudo do comportamento humano é chamado de psicologia.",
    "A girafa é o animal mais alto do mundo, podendo chegar a medir mais de 5 metros de altura.",
    "O orvalho é formado pela condensação do vapor de água que se encontra no ar.",
    "A língua mais falada no mundo é o Mandarim, seguido pelo Espanhol, Inglês, Hindi e Árabe.",
    "As estrelas do mar não têm cérebros, mas têm olhos na ponta de cada braço.",
    "A luz leva aproximadamente 8 minutos para viajar do Sol até a Terra.",
    "O coração humano bate cerca de 100.000 vezes por dia.",
    "O maior mamífero do mundo é a baleia-azul, podendo chegar a medir 30 metros de comprimento.",
    "A cidade mais populosa do mundo é Tóquio, no Japão, com mais de 37 milhões de habitantes.",
    "As bactérias encontradas no intestino humano podem pesar até 2 kg.",
    "O país mais populoso do mundo é a China, com mais de 1,4 bilhões de habitantes.",
    "O relâmpago pode aquecer o ar a uma temperatura cinco vezes mais quente que a superfície do Sol.",
    "A água cobre aproximadamente 71% da superfície da Terra.",
    "O maior vulcão do sistema solar é o Monte Olimpo, em Marte, que tem três vezes a altura do Monte Everest.",
    "Os pandas gigantes são nativos apenas da China.",
    "A Antártida é o lugar mais frio da Terra, com temperaturas que podem chegar a -90°C.",
    "Apenas 5% do oceano já foi explorado pelos seres humanos.",
    "O riso reduz o estresse, fortalece o sistema imunológico e melhora a saúde mental.",
    "A maior ilha do mundo é a Groenlândia, que é cerca de 14 vezes maior que a Inglaterra.",
    "As unhas das mãos crescem mais rapidamente do que as dos pés.",
    "O ponto mais profundo do oceano é a Fossa das Marianas, que tem cerca de 11 km de profundidade.",
    "O deserto do Saara é o maior deserto quente do mundo, cobrindo uma área de 9,2 milhões de km².",
    "A abelha rainha pode viver até 5 anos, enquanto as abelhas operárias vivem apenas algumas semanas.",
    "O cérebro humano tem capacidade para armazenar até 2,5 petabytes de informação.",
    "O rio Amazonas é o rio mais longo do mundo, com cerca de 6.400 km de extensão.",
    "As formigas podem levantar até 50 vezes o seu próprio peso.",
    "O maior animal terrestre é o elefante africano, podendo pesar até 12 toneladas.",
    "O maior desfiladeiro do mundo é o Grand Canyon, nos Estados Unidos, com cerca de 446 km de comprimento.",
    "O sangue humano é composto por cerca de 55% de plasma e 45% de células.",
    "O arco-íris pode ser visto apenas quando o sol está brilhando e chovendo ao mesmo tempo.",
    "Os olhos de um avestruz são maiores do que o seu cérebro.",
    "A velocidade da luz é de cerca de 299.792.",
];

// Função para escolher uma curiosidade aleatória
function escolherCuriosidade() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    return curiosidades[indice];
}

function curiosidadeCommand(bot, message) {
    const curiosidade = escolherCuriosidade();
    const mensagem = `🔍 *Você sabia?* 🔍\n\n"${curiosidade}"\n\n💡 Você sabia disso, @${message.from.username}? `;
    try {
        bot.sendMessage(message.chat.id, mensagem, {
            reply_to_message_id: message.message_id,
            parse_mode: "Markdown",
        });
    } catch (error) {
        if (
            error.response &&
            error.response.body &&
            error.response.body.description === "ETELEGRAM: 400 BAD REQUEST: REPLIED MESSAGE NOT FOUND"
        ) {
            console.log("Mensagem de resposta não encontrada.");
            bot.sendMessage(message.chat.id, mensagem, {
                parse_mode: "Markdown",
            });
        } else {
            throw error;
        }
    }
}

module.exports = {
    curiosidadeCommand,
};
