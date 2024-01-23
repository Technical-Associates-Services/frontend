import React from 'react'
import {
  LatestProjects,
  Blog,
  Banner,
  About,
  Overview,
  TestimonialsCard,
} from './components'

const Home = () => {
  return (
    <>
      <Banner />
      <About />

      <LatestProjects />
      <Overview />
      <TestimonialsCard />

      <Blog />
    </>
  )
}

export default Home
