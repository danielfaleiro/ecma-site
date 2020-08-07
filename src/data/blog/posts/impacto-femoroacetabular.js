import React from 'react'
import findBlog from '../../../utils/findBlog'

const Article = () => {
  const { images } = findBlog('Impacto Femoroacetabular')
  return (
    <article className='blog-article lato'>
      <img className='blog-img' src={images[0]} alt='Banner do Impacto Femoroacetabular' />
      <p>
        Se você tem dor no quadril e é praticante de esportes, então você deve se atentar ao que seu corpo fala.
      </p>
      <p>
        A dor no quadril em geral é um sintoma que pode estar relacionado ao desgaste ou artrose da articulação do fêmur com o acetábulo. Uma das condições que podem levar a esse desgaste temos o impacto femoracetabular (IFA). Essa alteração é um conflito dinâmico que ocorre quando a articulação do quadril apresenta uma irregularidade nos extremos de seu arco de movimento, especialmente quando ele é dobrado e rodado para dentro (rotação interna).
      </p>
      <p>
        Essa irregularidade que é uma incongruência decorrer de uma deformidade na transição entre o colo do fêmur denominado de impacto tipo carme “CAM, ou de deformidades da “taça” da bacia conhecida como acetábulo, mais especificamente na sua borda, que é impacto tipo torque ou pinçamento “PRINCER”. Em grande parte das vezes, acomete as duas estruturas, sendo a cabeça do fêmur e a bacia.
      </p>
      <p>
        O terceiro tipo de impacto é a combinação dos tipos carme e pinçamento. Que ocorre em grande parte dos pacientes com esse tipo de lesão. O tipo MISTO é a deformidade tanto no fêmur quanto no acetábulo.
      </p>
      <img className='blog-img' src={images[1]} alt='Comparação da articulação do quadril normal com CAM e PINCER' />
      <p>
        Nem sempre é necessária uma intervenção, pois alguns casos com laudos o paciente se apresenta assintomáticos. Não tem nem um tipo de sintomas ou dificuldade. Já quando há sintomas ou limitações é importante tomar as medidas iniciais de cuidados. Podendo ser de forma conservadora (fisioterapia) ou com intervenção médica (cirurgias). A visão médica de cada caso é quem vai nortear o paciente em com encontrar o melhor caminho.
      </p>
      <p>
        Importante informar que, a colisão entre as estruturas anormais pode levar ao destacamento da cartilagem que recobre o acetábulo e também a lesão de sua borda. Esse acometimento de destacamento é irreversível. Uma vez que a cartilagem estiver danificada, não há com repará-la novamente. Por isso o tratamento precoce é tão importante.
      </p>
      <p>
        A fisioterapia pode intervir nessa lesão, visando à reeducação muscular e postural, melhora do equilíbrio das forças musculares e ganho de força global gerando estabilização do quadril e da pelve. A conciliação da intervenção junto ao trabalho do Personal Trainer é mais uma forma de evoluir positivamente, dando melhor qualidade de vida e dando condições para a continuidade nas atividades físicas e esportivas.
      </p>
    </article>
  )
}

export default Article
