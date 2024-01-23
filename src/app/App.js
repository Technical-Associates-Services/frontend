import React from 'react'
import '../styles/main.sass'
import 'remixicon/fonts/remixicon.css'
import PublicRouter from '../router/PublicRouter'
import { BrowserRouter as Router } from 'react-router-dom'
import { Footer, Header } from '../frontend/home/components'
import ScrollToTop from '../ScrollToTop'
import ScrollButton from '../components/ScrollButton'
import Enquiry from '../components/EnquiryUs'

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ScrollButton />
        <Enquiry />

        <Header />

        <PublicRouter />

        <Footer />
      </Router>
    </>
  )
}

export default App
