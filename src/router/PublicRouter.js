import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BlogDetails from '../frontend/blog detail/BlogDetails'
import Home from '../frontend/home'
import Contact from '../frontend/contact/Contact'
import BlogAndNews from '../frontend/blog and news'
import AboutTas from '../frontend/about us/about tas'
import OurAssociation from '../frontend/about us/our associations'
import SisterConcern from '../frontend/about us/sister concern'
import FAQs from '../frontend/FAQs'
import Services from '../frontend/our services'
import Solutions from '../frontend/solutions'
import SolutionsDetails from '../frontend/solutions details'
import WaterAndSpaceHeating from '../frontend/product details/water & space heating system'
import WaterTreatmentSystem from '../frontend/product details/water treatment system'
import WaterPumps from '../frontend/product details/water pumps'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<BlogDetails />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blogs" element={<BlogAndNews />} />
        <Route path="/about-us" element={<AboutTas />} />
        <Route path="/associations" element={<OurAssociation />} />
        <Route path="/sister-concern" element={<SisterConcern />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions-details" element={<SolutionsDetails />} />
        <Route path="/solution" element={<Solutions />} />
        <Route
          path="/product/water-space-heating-systems"
          element={<WaterAndSpaceHeating />}
        />
        <Route
          path="/water-treatment-system"
          element={<WaterTreatmentSystem />}
        />
        <Route path="/water-pumps" element={<WaterPumps />} />
      </Routes>
    </>
  )
}

export default PublicRouter
