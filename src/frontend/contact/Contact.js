import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import { MetaContext } from "../../store";
import ContactForm from "./ContactForm";

const Contact = () => {
      const [loading, setLoading] = useState(false);
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("contact-us");

      return (
            <>
                  <CustomBreadcrumb title="Contact" subtitle="Contact" />

                  <Container>
                        <div className="contact">
                              <Row>
                                    <Col lg={5}>
                                          <div className="contact__form--sec">
                                                <h3 className="mb-0">
                                                      Get in touch with us
                                                </h3>
                                                <div className="contact__form--box">
                                                      <ContactForm
                                                            contactStatus={true}
                                                            loading={loading}
                                                            setLoading={
                                                                  setLoading
                                                            }
                                                      />
                                                </div>
                                          </div>
                                    </Col>
                                    <Col lg={7}>
                                          <div className="contact__info--sec">
                                                <h3 className="mb-0">
                                                      Contact Information
                                                </h3>

                                                <ul className="contact__info">
                                                      <li className="info address mb-3 align-items-start">
                                                            <i class="ri-map-pin-2-line"></i>
                                                            <div className="address">
                                                                  <p className="w-100 mb-1">
                                                                        Aspen
                                                                        Marg,
                                                                        Maitighar,
                                                                  </p>
                                                                  <p className="w-100 mb-1">
                                                                        St.
                                                                        Xavier
                                                                        College
                                                                        Rd,
                                                                        Kathmandu,
                                                                  </p>

                                                                  <p className="w-100 mb-1">
                                                                        Nepal –
                                                                        44600
                                                                  </p>
                                                            </div>
                                                      </li>
                                                      <li className="info number mb-3 align-items-center">
                                                            <i class="ri-phone-line"></i>
                                                            <p className="mb-0">
                                                                  01-5339555
                                                            </p>
                                                      </li>
                                                      <li className="info email mb-3 align-items-center">
                                                            <i class="ri-mail-line"></i>
                                                            <p className="mb-0">
                                                                  info@tas.com.np
                                                            </p>
                                                      </li>
                                                </ul>
                                          </div>
                                          <div className="map-holder">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56524.25978518923!2d85.314859!3d27.693619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b1fa335cdf%3A0x9fc5dd60e0888272!2sTechnical%20Associates%20Services!5e0!3m2!1sen!2sus!4v1705056416241!5m2!1sen!2sus"></iframe>
                                          </div>
                                    </Col>
                              </Row>
                        </div>
                  </Container>
            </>
      );
};

export default Contact;
