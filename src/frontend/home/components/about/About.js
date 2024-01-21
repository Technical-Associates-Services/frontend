import React from 'react'
import CustomButton from '../../../../components/common/button/CustomButton'
import { Container, Row, Col } from 'react-bootstrap'
import CustomTitle from '../../../../components/common/CustomTitle'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Container>
        <div className="about">
          <Row>
            <Col lg={6}>
              <img
                className="about__image"
                src="/images/about-img.png"
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div className="about__content">
                <CustomTitle title="about  TAS" />
                <p className="about__text">
                  Technical Associates Services (TAS) aim to provide cost
                  effective engineering solutions to people and industries in
                  Nepal.
                </p>
                <p className="about__text">
                  Technical Associates Services (TAS) aim to provide cost
                  effective engineering solutions to people and industries in
                  Nepal. We provide complete solutions for Water Treatment
                  Systems, Waste Treatment Systems, Water Treatment accessories,
                  Pharma water distributions system, Pumping Solutions (Grundfos
                  Pumps), Compressed Air Systems, Medical Gas Pipeline Systems,
                  Sprinklers & Irrigation System, Professional Laundry
                  solutions, PSA type Oxygen & Nitrogen Generators, Modular
                  Operation Theatres, Fire Fighting Systems and Flowmeters.
                </p>
                <Link to="/about-us">
                  <CustomButton btnData="Learn More" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default About
