import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomTitle from '../../../../components/common/CustomTitle'
import { Link } from 'react-router-dom'
import CustomButton from '../../../../components/common/button/CustomButton'
import { productDetails } from '../../../../data/data'

const ProductDetailCard = ({ description, image, classes, link, newClass }) => {
  return (
    <>
      <Container className={newClass}>
        <div className="product-detail">
          <Row>
            <Col lg={classes ? classes : 7}>
              <div className="product__content">
                <CustomTitle title="Water & Space Heating Systems" />
                <div
                  className="product__description"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                {link && (
                  <div className="download">
                    <span>Download our product profile to access offline.</span>
                    <h6>GET THE PRODUCT PROFILE (PDF)</h6>
                    <Link to={link}>
                      <CustomButton btnData="download bhochure" />
                    </Link>
                  </div>
                )}
              </div>
            </Col>
            {image && (
              <Col lg={5}>
                <img className="product__image" src={image} alt="" />
              </Col>
            )}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default ProductDetailCard
