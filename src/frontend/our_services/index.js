import { sanitizeHtml } from "../../utils/sanitize";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import { serviceCard as defaultServices } from "../../data/data";
import { MetaContext } from "../../store";

const Services = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("services");

      const [services, setServices] = useState(defaultServices);

      useEffect(() => {
            const fetchServices = async () => {
                  try {
                        const response = await axios.get(
                              `${process.env.REACT_APP_SECRET_KEY}/api/services`
                        );
                        if (
                              response.data?.result === "success" &&
                              Array.isArray(response.data?.services) &&
                              response.data.services.length > 0
                        ) {
                              setServices(response.data.services);
                        }
                  } catch (error) {
                        console.error("Error fetching services:", error);
                  }
            };
            fetchServices();
      }, []);

      return (
            <>
                  <CustomBreadcrumb title="services" subtitle="services" />
                  <div className="services">
                        <Container>
                              <Row>
                                    {services.map((card, index) => (
                                          <Col lg={6} key={index}>
                                                <div className="services__card">
                                                      <Row>
                                                            <Col lg={6}>
                                                                  <img
                                                                        className="services__image"
                                                                        src={
                                                                              card.image
                                                                        }
                                                                        alt={card.title || "service"}
                                                                  />
                                                            </Col>
                                                            <Col lg={6}>
                                                                  <div className="services__content">
                                                                        <h4 className="services__title">
                                                                              {
                                                                                    card.title
                                                                              }
                                                                        </h4>
                                                                        <div 
                                                                              className="services__details"
                                                                              dangerouslySetInnerHTML={{ __html: sanitizeHtml(card.description || "") }}
                                                                        />
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
