import React from 'react'
import WhatsappButton from '../WhatsappButton/WhatsappButton'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const Page = (props) => (
  <div className='color-default'>
    <WhatsappButton />
    <NavBar />
    <ErrorBoundary className='page-min-height'>
      {props.children}
    </ErrorBoundary>
    <Footer />
  </div>
)

export default Page
