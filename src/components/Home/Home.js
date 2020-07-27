import React from 'react'
import Carousel from '../Carousel/Carousel'
import Introduction from '../Introduction/Introduction'
import ServicesList from '../Services/ServicesList'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <main className='page-min-height'>
      <Carousel />
      <Introduction />
      <ServicesList/>
      <Testimonials />
    </main>
  )
}

export default Home
