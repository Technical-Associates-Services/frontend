import React from 'react'
import {
  LatestProjects,
  Blog,
  Banner,
  About,
  Overview,
  TestimonialsCard,
} from './components'
import References from './components/references'

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <LatestProjects />
      <References />
      <Overview />
      <TestimonialsCard />
      <Blog />
    </>
  )
}

export default Home
