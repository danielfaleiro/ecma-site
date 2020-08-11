import React from 'react'
import Carousel from '../Carousel/Carousel'
import Introduction from '../Introduction/Introduction'
import ServicesList from '../Services/ServicesList'
import Testimonials from '../Testimonials/Testimonials'

const Home = ({ images }) => {
  return (
    <main>
      <Carousel images={images} />
      <Introduction />
      <ServicesList/>
      <Testimonials />
    </main>
  )
}

export default Home
