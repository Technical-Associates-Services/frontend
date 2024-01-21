import React from 'react'
import {
  LatestProjects,
  Testimonial,
  Blog,
  Banner,
  About,
  Overview,
} from './components'

const Home = () => {
  return (
    <>
      <Banner />
      <About />

      <Testimonial />

      <LatestProjects />
      <Overview />

      <Blog />
    </>
  )
}

export default Home
