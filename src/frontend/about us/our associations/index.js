import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomTitle from '../../../components/common/CustomTitle'
import { distributors } from '../../../data/data'
import { associations } from '../../../data/data'
import CustomButton from '../../../components/common/button/CustomButton'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'

const OurAssociation = () => {
  return (
    <>
      <CustomBreadcrumb title="Our Association" subtitle="Our Association" />

      <Container>
        <div className="associations">
          <CustomTitle title="our associations" />
          <p className="associations__description">
            We are proud to offer products from globally recognized brands. Our
            partners are industry leaders in their field. Their reputation for
            quality and innovation ensures we deliver the best solutions to our
            customers.
          </p>
        </div>
      </Container>

      <div className="brand__section">
        <Container>
          <CustomTitle title="distributors" />
          <div className="brand">
            {distributors.map((distributor, index) => (
              <div className="brand__card" key={index}>
                <Link to="">
                  <img
                    className="brand__image"
                    src={distributor.logo}
                    alt="image"
                    width="100%"
                    height="100%"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="other-associations-section">
          <CustomTitle title="other associations" />
          <div className="brand">
            {associations.map((logo, index) => (
              <div className="brand__card" key={index}>
                <Link to="">
                  <img
                    className="brand__image"
                    src={logo.logo}
                    alt="image"
                    width="100%"
                    height="100%"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurAssociation
