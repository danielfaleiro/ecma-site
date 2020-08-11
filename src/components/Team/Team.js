import React from 'react'
import TeamCard from './TeamCard'
import Title from '../PageElements/Title'

const Team = ({ images }) => {
  return (
    <main className='min-max-width top-page container-tpa center flex-column'>
      <Title>Nossa Equipe</Title>
      <div className='hm-default mt3 flex justify-between flex-column flex-wrap'>
        <TeamCard
          index={1}
          name='RAYDEL MARQUES MACHADO'
          job='Fisioterapeuta'
          credentials='CREFITO: 165513-F'
          phone={['tel:062991050615', '(62) 9 9105-0615']}
          email='fisioterapia@espacoecma.com.br'
          photo={images[0]}
          text={<>
            <p><i>Sou Raydel Marques, esposo da Luana Faleiro e Pai da Eliza Faleiro. Me formei em fisioterapia em 2007 pela Faculdade UNIVERSO. Busco enfatizar minha abordagem clínica aos cuidados da saúde na tríade do ser humanos, almejando o equilíbrio entre corpo mente e espirito. Ofereço meus serviços com uma visão clássica de terapias manuais e recursos em prol do paciente.</i></p>
            <p>Couch de educação em dor, especialista em atuação clínica em fisioterapia traumatológica, ortopédica e desportiva. Atualmente é fisioterapeuta do SECONCI Goiás, palestrante em ergonomia na construção civil em goiás, em cumprimento da norma NR 17. Fisioterapeuta consultor da equipe de Lutas de MMA Black Thay Tiam. Proprietário e fundador do Espaço Clínico – ECMA.</p>
            <div>Especializações:
              <ul>
                <li>Osteopatia</li>
                <li>Terapias Manuais Conceito Mulligan</li>
                <li>Terapias Manuais Conceito Maitland</li>
                <li>Abordagem a dor crônica</li>
                <li>Tratamento da dor neurogênica - técnica baseada no Guideline da NICE de Classificação de Subgrupos</li>
              </ul>
            </div>
          </>}
        />
        <TeamCard
          index={2}
          name='LUANA FALEIRO SANTOS'
          job='Educadora Física'
          credentials='CREF: 03895'
          phone={['tel:062991050615', '(62) 9 9105-0615']}
          email='personal@espacoecma.com.br'
          photo={images[1]}
          text={<>
            <p><i>Sou Luana Faleiro, casada com Raydel Marques e mãe da Eliza Faleiro, me formei em Educação Física pela Faculdade UNIVERSO em 2009. Sou especialista em treinamento para grupos especiais (hipertenso, diabéticos, obesidade e outros). Estou atendendo como Personal Trainer, fazendo uso do método de treinamento através de exercícios funcionais e aparelhos ergométricos, com foco nos objetivos de cada aluno/cliente.</i></p>
            <p>Atua como Personal Trainer em seu Espaço (estúdio) no ECMA é consultora da equipe de Lutas de MMA Black Thay Tiam. Preparadora Física e consultora continuada dos pacientes de rendimento e esportista da Fisioterapia e proprietária do Espaço Clínico – ECMA.</p>
            <div>Especializações:
              <ul>
                <li>Fisiologia do Exercício</li>
                <li>Personal Training</li>
                <li>Musculação</li>
                <li>Treino de força</li>
                <li>Emagrecimento</li>
                <li>Preparação física pra TAF (Teste de Aptidão Física)</li>
              </ul>
            </div>
          </>}
          flip={true}
        />
        <TeamCard
          index={3}
          name='JULIENE GONÇALVES FERREIRA DE MORAIS'
          job='Instrutora de Pilates'
          credentials='CREFITO: 176889-F'
          phone={['tel:062981668650', '(62) 9 8166-8650']}
          email='pilates@espacoecma.com.br'
          photo={images[2]}
          text={<>
            <p>
              <i>Sou Juliene Morais, me formei em fisioterapia pela Faculdade Tamandaré em Goiânia no ano de 2008/09. Desde então venho trabalhando para dar a melhor qualidade de vida aos meus pacientes. Com mais de 10 anos de experiência na área, sempre me dedicando a aprimorar os movimentos e buscando com eficiência a melhoria dos alunos/pacientes de acordo com a necessidade e patologia de cada um sendo crianças, idosos e gestantes.</i>
            </p>
            <p>
                      Atua como instrutora de Pilates no espaço ECMA e faz atendimento a domicilio com métodos da fisioterapia. É especializada no Método Pilates.
            </p>
          </>}
        />
      </div>
    </main>
  )
}

export default Team
