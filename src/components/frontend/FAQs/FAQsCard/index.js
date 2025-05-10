import React from "react";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import CustomTitle from "../../../common/CustomTitle";

const FAQsCard = ({ order, title, style, faqs, image }) => {
      return (
            <>
                  <div className="custom-wrapper" style={style}>
                        <Row className="mx-0">
                              {order ? (
                                    <Col lg={6} style={{ order: "2" }}>
                                          <div className="left">
                                                <img
                                                      className="left__image"
                                                      src={image}
                                                      alt={title}
                                                />
                                          </div>
                                    </Col>
                              ) : (
                                    <Col lg={6}>
                                          <div className="left">
                                                <img
                                                      className="left__image"
                                                      src={image}
                                                      alt={title}
                                                />
                                          </div>
                                    </Col>
                              )}

                              <Col lg={6} className="px-0">
                                    <div className="right">
                                          <CustomTitle title={title} />
                                          <Accordion defaultActiveKey="0">
                                                {faqs.map((data, index) => (
                                                      <Accordion.Item
                                                            eventKey={`${index}`}
                                                            key={index}
                                                      >
                                                            <Accordion.Header>
                                                                  {
                                                                        data?.question
                                                                  }
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                  {data?.answer}
                                                            </Accordion.Body>
                                                      </Accordion.Item>
                                                ))}
                                          </Accordion>
                                    </div>
                              </Col>
                        </Row>
                  </div>
            </>
      );
};

export default FAQsCard;
