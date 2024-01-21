import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { serverCard } from '../../data/data'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'
import { serviceCard } from '../../data/data'
const Services = () => {
  return (
    <>
      <CustomBreadcrumb title="services" subtitle="services" />
      <div className="services">
        <Container>
          <Row>
            {serviceCard.map((card, index) => (
              <Col lg={6} key={index}>
                <div className="services__card">
                  <Row>
                    <Col lg={6}>
                      <img
                        className="services__image"
                        src={card.image}
                        alt=""
                      />
                    </Col>
                    <Col lg={6}>
                      <div className="services__content">
                        <h4 className="services__title">{card.title}</h4>
                        <p className="services__details">{card.description}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Services
