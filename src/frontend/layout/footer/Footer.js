import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterMenuItem from "../../../components/frontend/layout/footer/FooterMenuItem";
import { footerMenus } from "../../../data/data";
import FooterProduct from "../../../components/frontend/layout/footer/FooterProduct";
import { FooterLogoContainer, FooterParent, FooterText } from "./styles";
import axios from "axios";
import SubscriberForm from "./SubscriberForm";

const currentYear = new Date().getFullYear();

const Footer = () => {
      const [loading, setLoading] = useState(false);
      const [products, setProducts] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/products`)
                  .then((response) => {
                        if (response.data.result === "success") {
                              setProducts(response.data.products);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <footer>
                        <Container>
                              <div className="footer__content">
                                    <Row>
                                          <Col lg={4}>
                                                <div className="footer__logo-section">
                                                      <FooterLogoContainer className="d-flex gap-4 align-items-center mb-4">
                                                            <Link to="/">
                                                                  <img
                                                                        className="footer__logo"
                                                                        src="/images/logo.png"
                                                                        alt="logo"
                                                                  />
                                                            </Link>
                                                            <FooterParent>
                                                                  <img
                                                                        className="img-fluid"
                                                                        src="/images/kg.png"
                                                                        alt="logo"
                                                                  />
                                                            </FooterParent>
                                                      </FooterLogoContainer>
                                                      <FooterText>
                                                            <p>
                                                                  We aim to
                                                                  provide cost
                                                                  effective
                                                                  engineering
                                                                  solutions to
                                                                  people and
                                                                  industries in
                                                                  Nepal.
                                                            </p>
                                                      </FooterText>

                                                      <SubscriberForm />
                                                </div>
                                          </Col>
                                          <Col lg={8}>
                                                <Row>
                                                      <Col lg={4}>
                                                            <div className="footer__links">
                                                                  <h4>
                                                                        Quick
                                                                        Links
                                                                  </h4>
                                                                  <ul>
                                                                        {footerMenus.map(
                                                                              (
                                                                                    footerMenu,
                                                                                    index
                                                                              ) => (
                                                                                    <FooterMenuItem
                                                                                          data={
                                                                                                footerMenu
                                                                                          }
                                                                                          key={
                                                                                                index
                                                                                          }
                                                                                    />
                                                                              )
                                                                        )}
                                                                  </ul>
                                                            </div>
                                                      </Col>

                                                      <Col lg={4}>
                                                            <div className="footer__product">
                                                                  <h4>
                                                                        Our
                                                                        Product
                                                                  </h4>
                                                                  <ul>
                                                                        {products.map(
                                                                              (
                                                                                    footerProduct,
                                                                                    index
                                                                              ) => (
                                                                                    <FooterProduct
                                                                                          data={
                                                                                                footerProduct
                                                                                          }
                                                                                          key={
                                                                                                index
                                                                                          }
                                                                                    />
                                                                              )
                                                                        )}
                                                                  </ul>
                                                            </div>
                                                      </Col>

                                                      <Col lg={4}>
                                                            <div className="footer__contact">
                                                                  <h4>
                                                                        Contact
                                                                        Us
                                                                  </h4>
                                                                  <ul className="contact-info">
                                                                        <li className="info address">
                                                                              <i className="ri-map-pin-2-line"></i>
                                                                              <p>
                                                                                    Technical
                                                                                    Associates
                                                                                    Services,
                                                                                    Aspen
                                                                                    Marg,
                                                                                    Maitighar,
                                                                                    St.
                                                                                    Xavier
                                                                                    College
                                                                                    Rd,
                                                                                    Kathmandu,
                                                                                    Nepal
                                                                                    –
                                                                                    44600
                                                                              </p>
                                                                        </li>
                                                                        <li className="info number">
                                                                              <i className="ri-phone-line"></i>
                                                                              <p>
                                                                                    01-5339555
                                                                              </p>
                                                                        </li>
                                                                        <li className="info email">
                                                                              <i className="ri-mail-line"></i>
                                                                              <p>
                                                                                    info@tas.com.np
                                                                              </p>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </Col>
                                                </Row>
                                          </Col>
                                    </Row>
                              </div>
                        </Container>
                        <div className="footer__bottom">
                              <Container>
                                    <div className="bottom-list">
                                          <div className="footer__copyright">
                                                Copyright &copy; {currentYear}{" "}
                                                TAS. All Rights Reserved.
                                          </div>
                                    </div>
                              </Container>
                        </div>
                  </footer>
            </>
      );
};

export default Footer;
