import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomTitle from "../../../components/common/CustomTitle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import CustomBreadcrumb from "../../../components/common/CustomBreadcrumb";
import { MetaContext } from "../../../store";

const AboutTas = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("about-us");
      
      return (
            <>
                  <CustomBreadcrumb title="About TAS" subtitle="about tas" />
                  <Container>
                        <div className="tas">
                              <Row className="g-5">
                                    <Col lg={6}>
                                          <img
                                                src="/images/about.png"
                                                className="tas__image img-fluid"
                                                alt="tas"
                                          />
                                    </Col>
                                    <Col lg={6}>
                                          <div className="tas__content">
                                                <CustomTitle title="about us" />
                                                <p className="tas__description text-align">
                                                      <strong>
                                                            Technical Associates
                                                            Services P. Ltd.{" "}
                                                      </strong>
                                                      was formed in the year{" "}
                                                      <strong>
                                                            2002&nbsp;
                                                      </strong>
                                                      with an aim to provide
                                                      cost effective engineering
                                                      solutions to Nepalese
                                                      people and industries.
                                                </p>
                                                <p className="tas__description text-align">
                                                      We provide complete
                                                      solutions for Water
                                                      Treatment Systems, Waste
                                                      Treatment Systems, Water
                                                      Treatment Accessories,
                                                      Water Heating Systems,
                                                      Pharma water distributions
                                                      system, Pumping Solutions,
                                                      Compressed Air Systems,
                                                      Medical Gas Pipeline
                                                      Systems, Sprinklers &
                                                      Irrigation System,
                                                      Professional Laundry
                                                      solutions, PSA type Oxygen
                                                      & Nitrogen Generators,
                                                      Modular Operation
                                                      Theatres, Fire Fighting
                                                      Systems and Flowmeters.
                                                </p>
                                                <p className="tas__description text-align">
                                                      Our office is located at
                                                      the heart of Kathmandu
                                                      city in Maitighar Mandala,
                                                      with all the required
                                                      infrastructure. We also
                                                      have a branch office and
                                                      warehouse located at
                                                      Birgunj.
                                                </p>
                                          </div>
                                    </Col>
                              </Row>
                        </div>

                        <div className="items">
                              <Row>
                                    <Col lg={4}>
                                          <div className="items__item">
                                                <div className="items__content">
                                                      <img
                                                            src="/images/vision.png"
                                                            alt=""
                                                      />
                                                      <h4>
                                                            vision
                                                            <span>01</span>
                                                      </h4>
                                                      <div className="items__description">
                                                            To be a leading
                                                            innovator in Utility
                                                            and Engineering
                                                            Solutions,
                                                            delivering
                                                            cutting-edge
                                                            products that
                                                            empower businesses
                                                            and communities in
                                                            Nepal and beyond.
                                                      </div>
                                                </div>
                                          </div>
                                    </Col>
                                    <Col lg={4}>
                                          <div className="items__item">
                                                <div className="items__content">
                                                      <img
                                                            src="/images/mission.png"
                                                            alt="mission"
                                                      />
                                                      <h4>
                                                            mission
                                                            <span>02</span>
                                                      </h4>
                                                      <div className="items__description">
                                                            To deliver premium,
                                                            durable, and
                                                            eco-friendly
                                                            products & services
                                                            that meet the needs
                                                            of our customers and
                                                            provide exceptional
                                                            customer service
                                                            with a focus on
                                                            personalized advice
                                                            and timely
                                                            deliveries.
                                                      </div>
                                                </div>
                                          </div>
                                    </Col>
                                    <Col lg={4}>
                                          <div className="items__item">
                                                <div className="items__content">
                                                      <img
                                                            src="/images/development.png"
                                                            alt="development"
                                                      />
                                                      <h4>
                                                            development
                                                            <span>03</span>
                                                      </h4>
                                                      <div className="items__description">
                                                            TAS is committed to
                                                            driving digital
                                                            transformation in
                                                            Nepal's Commercial,
                                                            Industrial,
                                                            Residential &
                                                            Hospitality sectors.
                                                            Our innovative
                                                            solutions are
                                                            designed to enhance
                                                            operational
                                                            efficiency, improve
                                                            customer
                                                            experiences, and
                                                            strengthen security.
                                                      </div>
                                                </div>
                                          </div>
                                    </Col>
                              </Row>
                        </div>
                  </Container>
                  <div
                        className="testimonials"
                        style={{
                              backgroundImage:
                                    "url('/images/testimonial-bg3.jpg')",
                        }}
                  ></div>
            </>
      );
};

export default AboutTas;
