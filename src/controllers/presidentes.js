const candidatos = [
    { nome: 'Jair Bolsonaro', partido: 'PL', imagem: 'https://opopularmm.com.br/wp-content/uploads/2018/10/BOLSONARO-750x750.jpg' },
    { nome: 'Lula', partido: 'PT', imagem: 'https://asmetro.org.br/portalsn/wp-content/uploads/2022/12/lula-site.png' },
    { nome: 'Ciro Gomes', partido: 'PDT', imagem: 'https://todospelaeducacao.org.br/wordpress/wp-content/uploads/2018/08/candidato-ciro-gomes.jpg' },
    { nome: 'João Doria', partido: 'PSDB', imagem: 'https://pbs.twimg.com/profile_images/1519326494488776705/v_hRn0jz_400x400.jpg' },
    { nome: 'Marina Silva', partido: 'REDE', imagem: 'https://pbs.twimg.com/profile_images/1577255224741400576/_1Vi_i-g_400x400.jpg' },
    { nome: 'Sérgio Moro', partido: 'UB', imagem: 'https://pbs.twimg.com/profile_images/1559524571174297602/NIso6rDG_400x400.jpg' },
    { nome: 'Eduardo Leite', partido: 'PSDB', imagem: 'https://media.licdn.com/dms/image/C4E03AQEvOFeTZp40ag/profile-displayphoto-shrink_800_800/0/1650287742747?e=2147483647&v=beta&t=G1uUOJEC7t2upBZ0FrBJ5wFxRZZOQZs3iufNzALBnLk' },
    { nome: 'Geraldo Alckmin', partido: 'PSB', imagem: 'https://pbs.twimg.com/profile_images/1587509953425997824/C5aKzsY0_400x400.jpg' },
    { nome: 'Padre Kelmon', partido: 'DEM', imagem: 'https://i.em.com.br/K8JiPm7KaASNcmCOfllkz71RSNM=/820x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/09/29/1400246/padre-kelmon-candidato-do-ptb_1_53369.jpg' },
    { nome: 'Cabo Daciolo', partido: 'PATRI', imagem: 'https://pbs.twimg.com/profile_images/1591111452043223048/904rAJQl_400x400.jpg' },
    { nome: 'Guilherme Boulos', partido: 'PSOL', imagem: 'https://conteudo.imguol.com.br/c/parceiros/6a/2020/11/27/guilherme-boulos-foto-guilherme-santos-sul-21-1606514489514_v2_450x450.jpg.webp' },
    { nome: 'Luciano Huck', partido: 'Sem partido', imagem: 'https://pbs.twimg.com/profile_images/1500173998080016387/wuOSWMir_400x400.jpg' },
    { nome: 'Fernando Haddad', partido: 'PT', imagem: 'https://pbs.twimg.com/profile_images/1580018698961690624/BKkWfeFV_400x400.jpg' },
    { nome: 'Álvaro Dias', partido: 'PODE', imagem: 'https://www.senado.leg.br/senadores/img/fotos-oficiais/senador945.jpg' },
    { nome: 'Manuela D\'Ávila', partido: 'PCdoB', imagem: 'https://www.diariodocentrodomundo.com.br/wp-content/uploads/2018/07/manuela-1-640x455.jpg' },
  ];
  
  async function presidentCommand(bot, message) {
    const candidatoIndex = Math.floor(Math.random() * candidatos.length);
    const candidato = candidatos[candidatoIndex];
  
    await bot.sendPhoto(message.chat.id, candidato.imagem, {
      caption: `Seu presidente é *${candidato.nome}* (${candidato.partido})`,
      parse_mode: 'Markdown',
      reply_to_message_id: message.message_id
    });
  }
  
  module.exports = {
    presidentCommand: presidentCommand
  };
  