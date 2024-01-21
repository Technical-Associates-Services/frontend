import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterMenuItem from '../../../components/frontend/layout/footer/FooterMenuItem'
import { footerMenus } from '../../../data/data'
import { footerProducts } from '../../../data/data'
import FooterProduct from '../../../components/frontend/layout/footer/FooterProduct'
import { footerData } from '../../../data/data'
import CustomButton from '../../../components/common/button/CustomButton'
import SendIcon from '../../../icons/SendIcon'
const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <div className="footer__content">
            <Row>
              <Col lg={4}>
                <div className="footer__logo-section">
                  <Link to="/">
                    <img
                      className="footer__logo"
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, nostrum et quisquam quae.
                  </p>
                  <form>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email address"
                    />
                    <Link to="">
                      <div className="send-btn">
                        <SendIcon style={{ fontSize: '16px' }} />
                      </div>
                    </Link>
                  </form>
                </div>
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={4}>
                    <div className="footer__links">
                      <h4>Quick Links</h4>
                      <ul>
                        {footerMenus.map((footerMenu, index) => (
                          <FooterMenuItem data={footerMenu} key={index} />
                        ))}
                      </ul>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="footer__product">
                      <h4>Our Product</h4>
                      <ul>
                        {footerProducts.map((footerProduct, index) => (
                          <FooterProduct data={footerProduct} key={index} />
                        ))}
                      </ul>
                    </div>
                  </Col>

                  <Col lg={4}>
                    <div className="footer__contact">
                      <h4>Contact Us</h4>
                      <ul className="contact-info">
                        <li className="info address">
                          <i className="ri-map-pin-2-line"></i>
                          <p>
                            Aspen Marg, Maitighar, St. Xavier College Rd,
                            Kathmandu, Nepal – 44600
                          </p>
                        </li>
                        <li className="info number">
                          <i className="ri-phone-line"></i>
                          <p>01-5339555</p>
                        </li>
                        <li className="info email">
                          <i className="ri-mail-line"></i>
                          <p>info@tas.com.np</p>
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
              <div className="footer__copyright">Copyright &copy; 2023 TAS</div>
              <div className="footer__credit">
                Designed & Developed By:
                <Link to="https://infinityinfosys.com/" target="_blank">
                  Infinity Infosys Pvt. Ltd.
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
