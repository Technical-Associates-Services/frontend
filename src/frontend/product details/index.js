import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'
import CustomTitle from '../../components/common/CustomTitle'
import { Link } from 'react-router-dom'
import CustomButton from '../../components/common/button/CustomButton'

const ProductDetails = () => {
  return (
    <>
      <CustomBreadcrumb
        title="Water & Space Heating Systems"
        subtitle="Space Heating"
      />
      <Container>
        <div className="product">
          <Row>
            <Col lg={7}>
              <div className="product__content">
                <CustomTitle title="Water & Space Heating Systems" />
                <p className="product__description">
                  Water heating is a heat transfer process that uses an energy
                  source to heat water above its initial temperature. Typical
                  domestic uses of hot water include cooking, cleaning, bathing,
                  and space heating. In industry, hot water and water heated to
                  steam have many uses.
                </p>
                <p className="product__description">
                  Electric space and water heating systems are second only to
                  natural gas as the preferred primary heating choice for
                  domestic, commercial and industrial premises in Nepal.
                </p>
                <div className="download">
                  <span>Download our product profile to access offline.</span>
                  <h6>GET THE PRODUCT PROFILE (PDF)</h6>
                  <Link to="">
                    <CustomButton btnData="download bhochure" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <img
                className="product__image"
                src="/images/product-1.png"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ProductDetails
