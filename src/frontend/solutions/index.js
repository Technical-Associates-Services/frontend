import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import { MetaContext } from "../../store";
import axios from "axios";
const Solutions = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("solutions");

      const [loading, setLoading] = useState(false);
      const [solutions, setSolutions] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/solutions`)
                  .then((response) => {
                        if (response.data.result === "success") {
                              setSolutions(response.data.solutions);
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
                  <CustomBreadcrumb title="Solutions" subtitle="solutions" />
                  <Container>
                        <div className="solutions">
                              <Row>
                                    {solutions.map((card, index) => (
                                          <Col lg={4} key={index}>
                                                <div className="solutions__card">
                                                      <div className="image-overlay">
                                                            <img
                                                                  className="solutions__image"
                                                                  src={
                                                                        card?.image
                                                                  }
                                                                  alt="solutions"
                                                            />
                                                            <div className="overlay">
                                                                  <Link
                                                                        to={`/solutions/${card?.slug}`}
                                                                  >
                                                                        <i class="ri-links-fill"></i>
                                                                  </Link>
                                                            </div>
                                                      </div>

                                                      <div className="solutions__content">
                                                            <h4 className="solutions__title">
                                                                  {card?.sub_title}
                                                            </h4>
                                                            <p className="solutions__samary">
                                                                  {
                                                                        card?.summary
                                                                  }
                                                            </p>
                                                            <Link
                                                                  to={`/solutions/${card?.slug}`}
                                                            >
                                                                  <div className="read-btn">
                                                                        Read
                                                                        More
                                                                  </div>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </Col>
                                    ))}
                              </Row>
                        </div>
                  </Container>
            </>
      );
};

export default Solutions;
