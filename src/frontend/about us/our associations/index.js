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

      <div className="distributors-section">
        <Container>
          <CustomTitle title="distributors" />
          <div className="distributors">
            {distributors.map((distributor, inadex) => (
              <div className="distributors__card">
                <Link to="">
                  <img
                    className="distributors__image"
                    src={distributor.logo}
                    alt=""
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
          <div className="associations">
            {associations.map((logo, index) => (
              <div className="associations__card">
                <Link to="">
                  <img className="associations__image" src={logo.logo} alt="" />
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
