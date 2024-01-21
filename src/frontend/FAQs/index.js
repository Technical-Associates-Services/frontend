import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import CustomTitle from '../../components/common/CustomTitle'
import Accordion from 'react-bootstrap/Accordion'
import FAQsCard from '../../components/frontend/FAQs/FAQsCard'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'

const FAQs = () => {
  return (
    <>
      <CustomBreadcrumb title="FAQs" subtitle="FAQs" />

      <Container fluid className="px-0">
        <FAQsCard title="Residential" />
      </Container>

      <div
        className="faqs-bg-image"
        style={{ backgroundImage: 'url("/images/img-6.jpg")' }}
      >
        <Container>
          <div className="content">
            <p>
              With diverse capabilities and extensive manufacturing experience,
              you can rely on Amwerk as a critical part of your supply chain.
            </p>
          </div>
        </Container>
      </div>
      <Container fluid className="px-0">
        <FAQsCard order={2} title="Commercial" />
      </Container>
    </>
  )
}

export default FAQs
