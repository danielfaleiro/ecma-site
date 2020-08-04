import React from 'react'
import Testmony from './Testmony'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Title from '../PageElements/Title'

const Testimonials = () => {
  return (
    <section className="section-container center flex-wrap section-vpa flex-column min-max-width tc">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Title>Depoimentos</Title>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className='hm30 flex justify-between flex-wrap flex-row ts'>
        <Testmony id='0' />
        <Testmony id='1' />
        <Testmony id='2' />
      </ScrollAnimation>
    </section>
  )
}

export default Testimonials
