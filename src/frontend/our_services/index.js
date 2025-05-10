import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import { serviceCard } from "../../data/data";
import { MetaContext } from "../../store";
const Services = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("services");

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
                                                                        src={
                                                                              card.image
                                                                        }
                                                                        alt=""
                                                                  />
                                                            </Col>
                                                            <Col lg={6}>
                                                                  <div className="services__content">
                                                                        <h4 className="services__title">
                                                                              {
                                                                                    card.title
                                                                              }
                                                                        </h4>
                                                                        <p className="services__details">
                                                                              {
                                                                                    card.description
                                                                              }
                                                                        </p>
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
      );
};

export default Services;
