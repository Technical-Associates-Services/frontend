import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomTitle from "../../../../components/common/CustomTitle";
import { Link } from "react-router-dom";
import CustomButton from "../../../../components/common/button/CustomButton";
import { ProductImage } from "./styles";

const ProductDetailCard = ({
      product,
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
      endItem,
}) => {
      return (
            <>
                  <Container
                        fluid
                        style={{ backgroundColor, padding, marginBottom }}
                        className={endItem ? "mb-5 pb-5" : ""}
                  >
                        <Container className={spaceClass}>
                              <div className="product-detail">
                                    <Row>
                                          {order ? (
                                                <Col
                                                      lg={classes ? classes : 6}
                                                      style={{ order: "2" }}
                                                >
                                                      <div className="product__content">
                                                            {title && (
                                                                  <CustomTitle
                                                                        title={
                                                                              title
                                                                        }
                                                                  />
                                                            )}
                                                            <div
                                                                  className="product__description"
                                                                  dangerouslySetInnerHTML={{
                                                                        __html: description,
                                                                  }}
                                                            ></div>
                                                            {link && (
                                                                  <div className="download">
                                                                        <span>
                                                                              Download
                                                                              our
                                                                              product
                                                                              profile
                                                                              to
                                                                              access
                                                                              offline.
                                                                        </span>
                                                                        <h6>
                                                                              GET
                                                                              THE
                                                                              PRODUCT
                                                                              PROFILE
                                                                              (PDF)
                                                                        </h6>
                                                                        <Link
                                                                              to={
                                                                                    link
                                                                              }
                                                                              target="_blank"
                                                                        >
                                                                              <CustomButton btnData="download bhochure" />
                                                                        </Link>
                                                                  </div>
                                                            )}
                                                      </div>
                                                </Col>
                                          ) : (
                                                <Col lg={classes ? classes : 6}>
                                                      <div className="product__content">
                                                            {title && (
                                                                  <CustomTitle
                                                                        title={
                                                                              title
                                                                        }
                                                                  />
                                                            )}
                                                            <div
                                                                  className="product__description"
                                                                  dangerouslySetInnerHTML={{
                                                                        __html: description,
                                                                  }}
                                                            ></div>
                                                            {link && (
                                                                  <div className="download">
                                                                        <span>
                                                                              Download
                                                                              our
                                                                              product
                                                                              profile
                                                                              to
                                                                              access
                                                                              offline.
                                                                        </span>
                                                                        <h6>
                                                                              GET
                                                                              THE
                                                                              PRODUCT
                                                                              PROFILE
                                                                              (PDF)
                                                                        </h6>
                                                                        <Link
                                                                              to={
                                                                                    link
                                                                              }
                                                                        >
                                                                              <CustomButton btnData="download Brochure" />
                                                                        </Link>
                                                                  </div>
                                                            )}
                                                      </div>
                                                </Col>
                                          )}

                                          {image && (
                                                <Col lg={classes ? classes : 6}>
                                                      {product?.brand_image && (
                                                            <Link
                                                                  to={
                                                                        product?.brand_link
                                                                  }
                                                                  target="_blank"
                                                                  className="d-flex justify-content-end"
                                                            >
                                                                  <img
                                                                        className="product__image"
                                                                        src={
                                                                              product?.brand_image
                                                                        }
                                                                        alt={
                                                                              product?.brand_name
                                                                        }
                                                                  />
                                                            </Link>
                                                      )}
                                                      <ProductImage>
                                                            <img
                                                                  className="product__image"
                                                                  src={image}
                                                                  alt={title}
                                                            />
                                                      </ProductImage>
                                                </Col>
                                          )}
                                    </Row>
                              </div>
                        </Container>
                  </Container>
            </>
      );
};

export default ProductDetailCard;
