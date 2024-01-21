import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { solutionCard } from '../../data/data'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'
const Solutions = () => {
  return (
    <>
      <CustomBreadcrumb title="Solutions" subtitle="solutions" />
      <Container>
        <div className="solutions">
          <Row>
            {solutionCard.map((card, index) => (
              <Col lg={4} key={index}>
                <div className="solutions__card">
                  <div className="image-overlay">
                    <img
                      className="solutions__image"
                      src={card.image}
                      alt="solutions"
                    />
                    <div className="overlay">
                      <Link to="/solutions-details">
                        <i class="ri-links-fill"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="solutions__content">
                    <h4 className="solutions__title">{card.title}</h4>
                    <p className="solutions__samary">{card.description}</p>
                    <Link to="/solutions-details">
                      <div className="read-btn">Read More</div>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Solutions
