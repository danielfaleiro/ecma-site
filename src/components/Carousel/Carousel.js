import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.css'
import links from '../../links'
import Slider from 'react-slick'
import AnchorButton from '../AnchorButton/AnchorButton'
import BackgroundImage from 'gatsby-background-image'

const CarouselSlide = ({ title, text, button, link }) => {
  return (
    <div className='min-max-width center flex-column'>
      <h1 className='carousel-title mb0 hpa white roboto'>
        {title}
      </h1>
      <p className='carousel-subtitle hpa white lato'>
        {text}
      </p>
      <AnchorButton className='hma' to={link} text={button}/>
    </div>
  )
}

const Carousel = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    appendDots: dots => (
      <div
        style={{
          position: 'relative',
          top: '-45px',
          padding: '10px'
        }}
      >
        <ul
          style={{
            margin: '0px',
            paddingInlineStart: '0'
          }}
        > {dots} </ul>
      </div>
    )
  }

  return (
    <aside id='carousel' className='carousel top-page'>
      <Slider {...settings}>
        <BackgroundImage
          Tag='div'
          fluid={images[0]}
          className='carousel-container'
        >
          <CarouselSlide
            title="Fisioterapia, Pilates e Personal Trainer em um único lugar"
            text="Temos a solução completa para sua saúde e bem-estar."
            button="Conheça Nossas Especialidades"
            link={links.services.self}
          />
        </BackgroundImage>
        <BackgroundImage
          Tag='div'
          fluid={images[1]}
          className='carousel-container'
          style={{
            backgroundColor: 'rgba(25, 40, 53, 0.61)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <CarouselSlide
            title="2 em 1: Personal Trainer + Espaço de Treinamento"
            text="Aqui você tem os dois serviços em um só. Com acompanhamento e motivação de treino a treino. Faça uma avaliação e assim te ajudaremos com seus objetivos!"
            button="Saiba Mais"
            link={links.services.training}
          />
        </BackgroundImage>
        <BackgroundImage
          Tag='div'
          fluid={images[2]}
          className='carousel-container'
        >
          <CarouselSlide
            title="Pilates Clássico"
            text="O nosso Pilates respeita a filosofia do Pilates em sua essência. Experiencie com a gente o melhor do Pilates."
            button="Saiba Mais"
            link={links.services.pilates}
          />
        </BackgroundImage>
        <BackgroundImage
          Tag='div'
          fluid={images[3]}
          className='carousel-container'
        >
          <CarouselSlide
            title="Espaço Relaxar ECMA"
            text="Contrate nossa equipe para seu evento. Tenha um momento de relaxamento em um ambiente climatizado com massagem na cadeira Quick, terapias manuais e área de descanso."
            button="Saiba Mais"
            link={links.services.relax}
          />
        </BackgroundImage>
      </Slider>
    </aside>
  )
}

export default Carousel
