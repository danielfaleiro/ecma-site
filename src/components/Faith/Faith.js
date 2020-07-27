import React from 'react'
import pdf from './DECLARAÇÃO DE FÉ ECMA.pdf'
import 'animate.css/animate.min.css'
import AnchorButton from '../AnchorButton/AnchorButton'

const Faith = () => {
  return (
    <main className='hm-default lato top-page page-min-height'>
      <section className='min-max-width center flex-column container-tpa'>
        <h1 className='tc lato color-ecma-gold'>Nossa Confessionalidade</h1>
        <p className='text'>
          Temos a <strong>Teologia Reformada</strong>, como base de nossas vidas, que une a fé à prática e
          definições doutrinárias exemplificadas especialmente pela Bíblia, pelos críticos
          das eras apostólicas e pós-apostólicas. Essa teologia sempre abraçou uma rica vida
          espiritual e intelectual, experienciada por algumas das melhores mentes dos tempos
          clássicos e modernos. Nós praticamos essa tradição duradoura. Consequentemente, somos
          livres para discutir e viver nossa fé frente as outras tendências religiosas, culturas
          e políticas. Entretanto, o ECMA acolhe colaboradores, parceiros, pacientes, clientes
          e amigos de diversas origens, respeitando suas tradições religiosas.
        </p>
      </section>
      <section className='min-max-width center flex-column container-bpa'>
        <h1 className='tc color-ecma-gold lato'>Nossa Confissão de Fé</h1>
        <p className='text'>
          Ser uma família cristã é ver o ser humano como uma criação <strong>divina</strong>, onde as enfermidades é
          obra do mal e do mundo em que vivemos. Em nossa abordagem Deus toma o lugar central, respeitando
          as individualidades e buscando o centro das necessidades de cada um, que se dispõe a fazer parte do nosso trabalho.
        </p>
        <span className='center'>
          <AnchorButton className='hm-default' to={pdf} toOutside text={'Leia Nossa Confissão de Fé'}/>
        </span>
      </section>
    </main>
  )
}

export default Faith
