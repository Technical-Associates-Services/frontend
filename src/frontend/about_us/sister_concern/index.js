import { sanitizeHtml } from "../../../utils/sanitize";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomTitle from "../../../components/common/CustomTitle";
import CustomBreadcrumb from "../../../components/common/CustomBreadcrumb";
import axios from "axios";
import { BlockDescription } from "./styles";
import { MetaContext } from "../../../store";

const SisterConcern = () => {
      const [loading, setLoading] = useState(true);
      const [concerns, setConcerns] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("sister-concern");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/sister-concern`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setConcerns(response.data.concerns);
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
                  <CustomBreadcrumb
                        title="Sister Concern"
                        subtitle="Sister Concern"
                  />

                  <div className="sister-concern">
                        {concerns?.map((item, index) => (
                              <div className="block" key={index}>
                                    <Container>
                                          <Row>
                                                {index % 2 === 0 ? (
                                                      <Col lg={5}>
                                                            <div className="block__left">
                                                                  <img
                                                                        className="block__logo"
                                                                        src={
                                                                              item?.image
                                                                        }
                                                                        alt={
                                                                              item?.title
                                                                        }
                                                                        width={
                                                                              "100%"
                                                                        }
                                                                        height={
                                                                              "100%"
                                                                        }
                                                                  />
                                                            </div>
                                                      </Col>
                                                ) : null}
                                                <Col lg={7}>
                                                      <div className="block__right">
                                                            <CustomTitle
                                                                  title={
                                                                        item?.title
                                                                  }
                                                            />
                                                            <BlockDescription
                                                                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(item?.description,) }}
                                                            />
                                                      </div>
                                                </Col>
                                                {index % 2 === 1 ? (
                                                      <Col lg={5}>
                                                            <div className="block__left">
                                                                  <img
                                                                        className="block__logo"
                                                                        src={
                                                                              item?.image
                                                                        }
                                                                        alt={
                                                                              item?.title
                                                                        }
                                                                        width={
                                                                              "100%"
                                                                        }
                                                                        height={
                                                                              "100%"
                                                                        }
                                                                  />
                                                            </div>
                                                      </Col>
                                                ) : null}
                                          </Row>
                                    </Container>
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default SisterConcern;
