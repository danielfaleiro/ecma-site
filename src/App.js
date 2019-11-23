import React, { Component } from 'react';
import './App.css';
import fisioImg from './components/Services/fisioterapia.jpg';
import osteoImg from './components/Services/osteopatia.jpg';
import pilatesImg from './components/Services/pilates.jpg';
import treinoImg from './components/Services/treinamento.jpg';
import relaxarImg from './components/Services/espacorelaxar.jpg';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Service from './components/Services/Service';
import Team from './components/Team/Team';
import Clinic from './components/Clinic/Clinic';
import Faith from './components/Faith/Faith';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import links from './links'
import NotFoundPage from './components/404/404';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='color-default'>
          <NavBar/>
          <Switch>
            <Route exact path={links.home} component={Home}/>
            <Route path={links.clinic} component={Clinic} />
            <Route path={links.faith} component={Faith} />
            <Route path={links.team} component={Team} />
            <Route exact path={links.services.self} component={ServicesPage} />
            <Route path={links.services.fisio} component={Fisio}/>
            <Route path={links.services.osteo} component={Osteo}/>
            <Route path={links.services.pilates} component={Pilates}/>
            <Route path={links.services.training} component={Personal}/>
            <Route path={links.services.relax} component={Relax}/>
            <Route path={links.contact} component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const Fisio = () => {
  const texts = {
    about: <>
      <p className="hm-default">Área de atuação profissional e ciência que estuda, diagnostica, previne e restabelece as disfunções dos sistemas do <strong>corpo humano</strong>. Com objetivo de preservar, manter, desenvolver ou restaurar a integridade dos sistemas osteomusculares.</p>
      <p className="hm-default">O Fisioterapeuta é o profissional de saúde, devidamente registrado no Conselho de sua classe, com formação acadêmica superior, habilitado para construção do diagnóstico cinesiológico funcional e pode prescrever condutas fisioterapêuticas.</p>
    </>,
    howItWorks: <p className="hm-default">Agende uma Avaliação com nossos profissionais, na qual serão coletadas as informações de suas queixas, necessidades físicas e seus objetivos com o tratamento. Com base nessa anamnese (entrevista), o fisioterapeuta irá montar e te entregar o <strong>Plano de Acompanhamento</strong> com uma proposta a curto, médio e longo prazo, descrevendo o objetivo de cada etapa, observações gerais e específicas, orientações e os custos do Plano.</p>,
    indication: <p className="hm-default">Crianças acima de 7 anos, jovens, adultos, 3° idade e atletas profissionais ou amadores.</p>,
    disfunctions: <>
      <p className="hm-default">Em nosso Espaço atendemos casos de fraturas diversas, traumas, entorses, luxações, desordens e desequilíbrio do sistema osteomuscular, lesões por esforço repetitivo. Atuamos também em pós-operatórios como: artrodese, artroscopia, reconstrução dos ligamentos do joelho (LCA e LCP) e cirurgias reparadoras de tendões de ombro, joelhos e tornozelos.</p>
      <p className="hm-default">Desenvolvemos um trabalho especial para patologias e disfunções da coluna, com uma proposta de <strong>Integração Multiprofissional</strong> (Osteopatia, Fisioterapia, Pilates e Funcional), cujas áreas atuam nos aspectos emocionais e físicos. Fazemos um trabalho de Educação em Dor e conscientização somatoemocional.</p>
      <p className="hm-default">O fisioterapeuta atua no acompanhamento do atleta/paciente, avaliando de forma periódica suas funções e condicionamento físico, prescrevendo condutas de ações preventivas, de tratamento de lesões e traumas físicos das suas práticas.</p>
    </>,
    time: <p className="hm-default">A durabilidade do tratamento, a quantidade de sessões e os intervalos entre elas, dependerão do quadro sintomático, tempo de lesão e dos objetivos do paciente o que torna cada caso muito peculiar.</p>,
    schedule: <p className="hm-default">Segunda a Sexta, das 15h às 21h</p>,
    procedure: <ul className="hm-default">
      <li>Avaliação Cinético-Funcional (Planejamento personalizado do tratamento)</li>
      <li>Lesões Ortopédicas e Traumatológicas</li>
      <li>Desportistas</li>
      <li>Pré e Pós-Treino (suporte e acompanhamento)</li>
      <li>Prevenção de Lesões</li>
      <li>Disfunções da Coluna (Programa de Tratamento da Dor Crônica, Educação em Dor)</li>
      <li>Alongamento</li>
    </ul>,
    contact: <>
      <p className="hm-default"><strong>Raydel Marques</strong><br />
      Telefone: <a href='tel:062991050615'>(62) 9 99105-0615</a><br />
      E-mail: <a href='mailto:raydelmm@gmail.com'>raydelmm@gmail.com</a></p>
    </>
  }
  const others = {
    services: ['Osteopatia', 'Pilates Clássico', 'Personal Trainer', 'Espaço Relaxar'],
    images: [osteoImg, pilatesImg, treinoImg, relaxarImg],
    route: [links.services.osteo, links.services.pilates, links.services.training, links.services.relax],
    
  };
  return (
    <Service
        name='Fisioterapia'
        image={fisioImg}
        others={others}
        texts={texts}
        adjustContent={true}
    />
  );
}

const Osteo = () => {
  const texts = {
    about: <>
      <p className="hm-default">É uma <strong>filosofia autônoma</strong> de cuidados de saúde primária, que usa métodos manuais para avaliar, diagnosticar e tratar disfunções dos sistemas corporais, agindo por meio da intervenção nos tecidos (articulações, músculos, fáscias, ligamentos, cápsulas, vísceras, tecidos nervoso, vasculares e linfáticos).</p>
      <p className="hm-default">A osteopatia é uma área da saúde, cujo profissional habilitado e especializado para exercê-la é o fisioterapeuta. É fundamentada em um conhecimento profundo da anatomia e fisiologia do corpo humano, buscando por meio de suas técnicas, o <strong>reequilíbrio</strong> de suas funções. O foco do tratamento é descobrir a origem da disfunção e não na localização dela.</p>
    </>,
    howItWorks: <p className="hm-default">Ao agendar uma sessão, o fisioterapeuta irá levantar as queixas do paciente e registrar seu histórico físico. Essa avaliação será a base de <strong>interpretação</strong> e início das avaliações específicas da osteopatia, para identificar a possível causa da disfunção. Em seguida, serão utilizadas técnicas manuais na busca de respostas fisiológicas imediatas, por meio de uma reavaliação em uma sessão.</p>,
    indication: <p className="hm-default">Crianças acima de 7 anos, jovens, adultos, 3° idade e atletas profissionais ou amadores.</p>,
    disfunctions: <p className="hm-default">As técnicas têm uma ampla indicação, podendo ser usadas para dores diversas, como: cefaleias, cervicalgias, dorsalgias, lombalgias, ciatalgias, musculares, tendíneas, ligamentares musculares.</p>,
    time: <p className="hm-default">A durabilidade do tratamento, a quantidade de sessões e os intervalos entre elas, dependerão da resposta sintomática de cada paciente, pois essa indicação é específica para cada caso, com o intuito de observar a resposta do corpo de acordo com os estímulos gerados.</p>,
    schedule: <p className="hm-default">Segunda a Sexta, das 15h às 21h</p>,
    procedure: <p className="hm-default">A integração das áreas, com foco no melhor resultado para o paciente. </p>,
    contact: <>
      <p className="hm-default"><strong>Raydel Marques</strong><br />
      Telefone: <a href='tel:062991050615'>(62) 9 99105-0615</a><br />
      E-mail: <a href='mailto:raydelmm@gmail.com'>raydelmm@gmail.com</a></p>
    </>
  }
  const others = {
      services: ['Fisioterapia', 'Pilates Clássico', 'Personal Trainer', 'Espaço Relaxar'],
      images: [fisioImg, pilatesImg, treinoImg, relaxarImg],
      route: [links.services.fisio, links.services.pilates, links.services.training, links.services.relax],
  };
  return (
      <Service
          name='Osteopatia'
          image={osteoImg}
          others={others}
          texts={texts}
          adjustContent={false}
      />
  );
}

const Pilates = () => {
  const texts = {
    about: <>
      <p className="hm-default">Um método de <strong>exercícios</strong> que faz o uso de molas e da gravidade do corpo que, em sua forma original, foi criado por Joseph Pilates, baseado nos princípios da respiração, concentração, centro, precisão, fluidez.</p>
      <p className="hm-default">Ao frequentar as sessões de Pilates, pode-se aprender o método do Pilates Clássico ou Pilates Contemporâneo. O Pilates Clássico foi criado no início do século XX e desde então ele cresce constantemente recebendo novas técnicas, posturas e até mesmo acessórios, dando origem ao Pilates Contemporâneo. </p>
      <p className="hm-default">O método clássico segue uma ordem específica de exercícios, apresentada pelo professor de acordo com o nível do aluno/paciente, incluindo a realização do aquecimento.</p>
    </>,
    howItWorks: <p className="hm-default">Você pode agendar uma <strong>sessão gratuita</strong> e experienciar nossos serviços. Após sua sessão, serão apresentados nossos pacotes e horários disponíveis. Se o seu intuito de fazer o Pilates for terapêutico, você será orientado a agendar uma avaliação com o fisioterapeuta para que seja traçado a melhor conduta de exercícios.</p>,
    indication: <p className="hm-default">O Pilates é indicado para todas as idades, pois respeita as individualidades das pessoas.</p>,
    disfunctions: undefined,
    time: <p className="hm-default">Não há um período estipulado para a realização do Pilates, podendo ser feito para objetivos específicos como tratamento de dores ou para qualidade de vida.</p>,
    schedule: <p className="hm-default">Segunda a Sexta, das 7h às 11h e das 15h às 21h</p>,
    procedure: <ul className="hm-default">
      <li>Até 3 alunos por horário</li>
      <li>Pacote de sessões por mês</li>
      <li>Sessões de 60 minutos</li>
    </ul>,
    contact: <>
      <p className="hm-default"><strong>Nome Sobrenome</strong><br />
      Telefone: <a href='tel:062981668650'>(62) 9 8166-8650</a><br />
      E-mail: <a href='mailto:pilates@espacoecma.com.br'>pilates@espacoecma.com.br</a></p>
    </>
  }
  const others = {
      services: ['Fisioterapia', 'Osteopatia', 'Personal Trainer', 'Espaço Relaxar'],
      images: [fisioImg, osteoImg, treinoImg, relaxarImg],
      route: [links.services.fisio, links.services.osteo, links.services.training, links.services.relax],
  }
  return (
      <Service
          name='Pilates Clássico'
          image={pilatesImg}
          others={others}
          texts={texts}
          adjustContent={false}
      />
  );
}

const Personal = () => {
  const texts = {
    about: <>
      <p className="hm-default">Área de atuação do Profissional de Educação Física capacitado para elaborar, ministrar e supervisionar os treinamentos físicos, buscando seguir os objetivos de quem o contrata, respeitando os princípios básicos de treinamento.</p>
      <p className="hm-default">O Treinador Pessoal precisa ser formado em Educação Física e estar registrado no CREF. Onde pode seguir diversas áreas, esportes coletivos, reabilitação musculoesquelética e cardíaca entre outras.</p>
    </>,
    howItWorks: <>
      <p className="hm-default">Agende uma visita com nossos profissionais, na qual será apresentado nosso espaço, formas de trabalhos, agenda disponíveis e tabela de valores. Assim já iniciamos a fase de avaliação objetivas para que possa ser agendado aula experimental e <strong>Avaliação Física</strong> que engloba: Anamnese, Avaliação da Composição Corporal: Perimetria, Dobra Cutânea e Diâmetro Ósseo. Todos dados necessários para serem comparados os resultados e ter informações como circunferência do corpo e somatotipo físico.</p>
      <p className="hm-default">Assim o Personal irá elaborar seu treino e agendar o início do acompanhamento.</p>
    </>,
    indication: <p className="hm-default">O Treinamento com Personal Trainer é indicado para crianças a partir de 7 anos, jovens, adultos e 3° idade, buscando sempre respeitar a individualidade das pessoas.</p>,
    areas: <>
      <p className="hm-default">Fortalecimento muscular, melhora de performance, aptidão física, ganho de resistência e capacidade funcional, preparação para Testes de Aptidão Física, perca de peso, ganho de massa muscular, melhora da resposta cardiopulmonar, treinamento de atletas amador e esportistas, acompanhamento de grupo especiais: hipertensos, diabéticos, obesos e gestantes.</p>
      <p className="hm-default">Desenvolvemos uma abordagem personalizada com pacientes em fase final do tratamento com treinamento direcionado para a total recuperação física e retorno ao esporte. Fazemos uma proposta de Integração Multiprofissional (Fisioterapia, Pilates e Funcional) onde o objetivo é conquistar resultados de forma eficaz e com segurança para os clientes.</p>
      <p className="hm-default">O Personal atua acompanhando o aluno/paciente, avaliando e identificando suas necessidades físicas e objetivos. Assim elabora seu plano de treinamento onde a execução é toda supervisionada e acompanhada por um profissional. A execução do treinamento é feita em nossa unidade Espaço Personal ECMA, sem custos adicionais.</p>
      </>,
    time: <p className="hm-default">A durabilidade do acompanhamento a quantidade de execução dependerá dos objetivos apresentados na Avaliação Física e do interesse do aluno. Não sendo estipulado por parte do profissional tempo de acompanhamento.</p>,
    schedule: <p className="hm-default">das 7h15min às 19h de acordo com a disponibilidade de horário.</p>,
    procedure:<ul className="hm-default">
      <li>Musculação direcionada;</li>
      <li>Pilates aparelho solo e bola;</li>
      <li>Pilates e Treinamento funcional combinado;</li>
      <li>Alongamento;</li>
      <li>Fitness;</li>
      <li>Treinamento Físico;</li>
      <li>Perda de peso;</li>
      <li>Ganho de massa muscular;</li>
      <li>Preparação Física;</li>
      <li>Melhora das Respostas Cardiorrespiratórias e pulmonares.</li>
    </ul>,
    contact: <p className="hm-default"><strong>Luana Faleiro Santos</strong><br />
    Telefone: <a href='tel:062991050615'>(62) 9 9105-0615</a><br />
    E-mail: <a href='mailto:personal@espacoecma.com.br'>personal@espacoecma.com.br</a></p>
  }
  const others = {
      services: ['Fisioterapia', 'Osteopatia', 'Pilates Clássico', 'Espaço Relaxar'],
      images: [fisioImg, osteoImg, pilatesImg, relaxarImg],
      route: [links.services.fisio, links.services.osteo, links.services.pilates, links.services.relax],
  }
  return (
      <Service
          name='Personal Trainer'
          image={treinoImg}
          others={others}
          texts={texts}
          adjustContent={false}
      />
  );
}

const Relax = () => {
  const texts = {
    about: <>
      <p className="hm-default">O excesso de compromissos das pessoas associados a uma vida com alto nível de estresse, fez com que muitas pessoas deixassem de cuidar da própria saúde e bem estar. A quick massagem é uma alternativa prática e rápida, que proporciona relaxamento muscular e redução das tensões globais, em uma técnica que dura em média 10 minutos.</p>
      <p className="hm-default">Nós montamos um ambiente com as cadeiras podendo ser de uma a seis unidades com decoração e climatização de todo o espaço. Para ambientes de trabalho, ao ar livre, em shoppings, salões de beleza, spa´s, clubes, clínicas e em diversos outros lugares, em função da sua praticidade e rapidez.</p>
    </>,
    howItWorks: <>
      <p className="hm-default">Solicite uma Proposta de Orçamento através dos nossos contatos. Montaremos seu orçamento através dos dados: número de público do evento, horário de cobertura início e fim e a quantidade de maca a ser disponibilizada.</p>
      <p className="hm-default">Uma opção para agregar valores e enriquecimento ao seu evento, contribuindo e proporcionado a boa relação das empresas, beneficiários e clientes. Uma ferreamente no despertar do interesse em cuidar da saúde e prevenir doenças ocupacionais e laborais.</p>
    </>,
    indication: <p className="hm-default">O espaço Relaxar é indicado para todas as idades.</p>,
    areas: <>
      <p className="hm-default">A cadeira acomoda o cliente em postura sentada apoiando o rosto, o peito, os joelhos e os braços. Assim este recebe as terapias nas regiões da coluna vertebral e nos braços. </p>
      <p className="hm-default">A técnicas é realizada por profissionais treinados e qualificados, indicada para diversos tipos de pessoas, promovendo melhoras da circulação sanguínea e aumenta a disposição do indivíduo, em função do seu efeito revigorante. Tendo como vantagem da técnica que o cliente não precisa trocar ou tirar a roupa e os sapatos, aumentando a sua praticidade.</p>
      </>,
    time: <p className="hm-default">A durabilidade do acompanhamento a quantidade de execução dependerá dos objetivos apresentados na Avaliação Física e do interesse do aluno. Não sendo estipulado por parte do profissional tempo de acompanhamento.</p>,
    procedure:<ul className="hm-default">
      <li>Relaxamento muscular;</li>
      <li>Diminuição da fadiga muscular;</li>
      <li>Remoção de toxinas do organismo;</li>
      <li>Aumento das trocas metabólicas e energéticas do organismo;</li>
      <li>Facilitação do deslizamento entre as fáscias e os músculos esqueléticos</li>
      <li>Melhora da textura da pele;</li>
      <li>Estímulo à produção de colágeno e elastina;</li>
      <li>Melhora do estado de possíveis aderências cutâneas;</li>
      <li>Efeito analgésico;</li>
      <li>Estímulo ao esvaziamento gástrico;</li>
      <li>Melhora do peristaltismo;</li>
      <li>Melhor ativação do sistema linfático;</li>
      <li>Melhora do bem estar respiratório e diminuição de obstruções brônquicas;</li>
      <li>Melhora da consciência corporal.</li>
    </ul>,
    budget: <p style={{display: "grid", gridTemplateColumns: "auto auto"}}className="hm-default">
      <span style={{textAlign: "right", paddingRight: "10px"}}>
        Telefone:
      </span>
      <>
        <a href='tel:06239261118'>(62) 3926-1118</a><br /><a href='tel:062991050615'>(62) 9 9105-0615</a>
      </>
      <span style={{textAlign: "right", paddingRight: "10px"}}>
        E-mail:
      </span>
      <>
        <a href='mailto:personal@espacoecma.com.br'>contato@espacoecma.com.br</a>
      </>
    </p>
  }
  const others = {
      services: ['Fisioterapia', 'Osteopatia', 'Pilates Clássico', 'Personal Trainer'],
      images: [fisioImg, osteoImg, pilatesImg, treinoImg],
      route: [links.services.fisio, links.services.osteo, links.services.training],
  }
  return (
      <Service
          name='Espaço Relaxar'
          image={relaxarImg}
          others={others}
          texts={texts}
          adjustContent={false}
      />
  );
}

export default App;
