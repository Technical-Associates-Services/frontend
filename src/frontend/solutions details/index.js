import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import Accordion from "react-bootstrap/Accordion";
import { solutionsData } from "../../data/data";
import axios from "axios";

const SolutionsDetails = () => {
      const { solutionId } = useParams();
      const [loading, setLoading] = useState(false);
      const [solution, setSolution] = useState([]);
      const [solutions, setSolutions] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/solutions/${solutionId}`
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setSolution(response.data.solution);
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
      }, [solutionId]);

      return (
            <>
                  <CustomBreadcrumb
                        title={solution?.title}
                        subtitle={solution?.sub_title}
                  />

                  <Container className="pb-5">
                        <div className="solutions-detail">
                              <Row>
                                    <Col lg={4}>
                                          <div className="left">
                                                <ul className="left__menu">
                                                      {solutions?.map(
                                                            (item, index) => (
                                                                  <li
                                                                        className={`left__item `}
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <Link
                                                                              to={`/solutions/${item?.slug}`}
                                                                              className={` ${
                                                                                    item?.slug ===
                                                                                    solutionId
                                                                                          ? "active"
                                                                                          : ""
                                                                              }`}
                                                                        >
                                                                              {
                                                                                    item?.sub_title
                                                                              }
                                                                        </Link>
                                                                  </li>
                                                            )
                                                      )}
                                                </ul>
                                          </div>
                                    </Col>
                                    <Col lg={8}>
                                          <div className="right">
                                                <img
                                                      className="right__image"
                                                      src={solution?.image}
                                                      alt={solution?.title}
                                                />
                                                <div className="right__title">
                                                      <h3>
                                                           {solution?.title}
                                                      </h3>
                                                      <div className="download">
                                                            <Link to="">
                                                                  <i className="ri-file-word-line"></i>
                                                                  Download Doc
                                                            </Link>
                                                            <Link to="">
                                                                  <i className="ri-file-pdf-2-line"></i>
                                                                  Download PDF
                                                            </Link>
                                                      </div>
                                                </div>
                                                <div className="right__details">
                                                      {solution?.summary && (
                                                            <p>
                                                                  {
                                                                        solution?.summary
                                                                  }
                                                            </p>
                                                      )}

                                                      <Accordion>
                                                            {solution?.additionals?.map(
                                                                  (
                                                                        item,
                                                                        index
                                                                  ) => (
                                                                        <Accordion.Item
                                                                              eventKey={
                                                                                    index
                                                                              }
                                                                        >
                                                                              <Accordion.Header>
                                                                                    <i className="ri-add-line"></i>
                                                                                    <span>
                                                                                          {
                                                                                                item?.title
                                                                                          }
                                                                                    </span>
                                                                              </Accordion.Header>
                                                                              <Accordion.Body>
                                                                                    <div
                                                                                          dangerouslySetInnerHTML={{
                                                                                                __html: item?.description,
                                                                                          }}
                                                                                    ></div>
                                                                              </Accordion.Body>
                                                                        </Accordion.Item>
                                                                  )
                                                            )}
                                                      </Accordion>
                                                      <p
                                                            dangerouslySetInnerHTML={{
                                                                  __html: solution?.description,
                                                            }}
                                                      ></p>
                                                </div>
                                          </div>
                                    </Col>
                              </Row>
                        </div>
                  </Container>
            </>
      );
};

export default SolutionsDetails;
