import React from 'react'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const Page = (props) => (
  <div className='color-default'>
    <WhatsappButton />
    <NavBar />
    <div className='page-min-height'>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Page
