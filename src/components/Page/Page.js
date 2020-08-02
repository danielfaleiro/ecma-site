import React from 'react'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const Page = (props) => (
  <div className='color-default'>
    <WhatsappButton />
    <NavBar />
    {props.children}
    <Footer />
  </div>
)

export default Page
