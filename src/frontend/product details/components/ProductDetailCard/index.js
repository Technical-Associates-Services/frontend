import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomTitle from '../../../../components/common/CustomTitle'
import { Link } from 'react-router-dom'
import CustomButton from '../../../../components/common/button/CustomButton'
import { productDetails } from '../../../../data/data'

const ProductDetailCard = ({
  description,
  image,
  classes,
  link,
  spaceClass,
  title,
  order,
  backgroundColor,
  padding,
  marginBottom,
}) => {
  return (
    <>
      <Container fluid style={{ backgroundColor, padding, marginBottom }}>
        <Container className={spaceClass}>
          <div className="product-detail">
            <Row>
              {order ? (
                <Col lg={classes ? classes : 6} style={{ order: '2' }}>
                  <div className="product__content">
                    {title && <CustomTitle title={title} />}
                    <div
                      className="product__description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    {link && (
                      <div className="download">
                        <span>
                          Download our product profile to access offline.
                        </span>
                        <h6>GET THE PRODUCT PROFILE (PDF)</h6>
                        <Link to={link}>
                          <CustomButton btnData="download bhochure" />
                        </Link>
                      </div>
                    )}
                  </div>
                </Col>
              ) : (
                <Col lg={classes ? classes : 6}>
                  <div className="product__content">
                    {title && <CustomTitle title={title} />}
                    <div
                      className="product__description"
                      dangerouslySetInnerHTML={{ __html: description }}
                    ></div>
                    {link && (
                      <div className="download">
                        <span>
                          Download our product profile to access offline.
                        </span>
                        <h6>GET THE PRODUCT PROFILE (PDF)</h6>
                        <Link to={link}>
                          <CustomButton btnData="download bhochure" />
                        </Link>
                      </div>
                    )}
                  </div>
                </Col>
              )}

              {image && (
                <Col lg={classes ? classes : 6}>
                  <img className="product__image" src={image} alt="" />
                </Col>
              )}
            </Row>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default ProductDetailCard
