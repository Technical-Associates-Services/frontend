import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomCard from "../../../../components/common/CustomCard/CustomCard";

import { Container, Row, Col } from "react-bootstrap";
import CustomButton from "../../../../components/common/button/CustomButton";
import CustomTitle from "../../../../components/common/CustomTitle";
import axios from "axios";

const Projects = () => {
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
                  <div className="project">
                        <div className="project__content">
                              <Container fluid className="px-0">
                                    <Row className="mx-0">
                                          <Col lg={4}>
                                                <div className="project__left--content">
                                                      <div className="project__left__sticky--section">
                                                            <CustomTitle
                                                                  title="Our  Products"
                                                                  customStyle={{
                                                                        width: "300px",
                                                                  }}
                                                            />

                                                            <p>
                                                                  We provide
                                                                  complete
                                                                  solutions for
                                                                  Water
                                                                  Treatment
                                                                  Systems, Waste
                                                                  Treatment
                                                                  Systems, Water
                                                                  Treatment
                                                                  accessories,
                                                                  Pharma water
                                                                  distributions
                                                                  system,
                                                                  Pumping
                                                                  Solutions
                                                                  (Grundfos
                                                                  Pumps),
                                                                  Compressed Air
                                                                  Systems,
                                                                  Medical Gas
                                                                  Pipeline
                                                                  Systems,
                                                                  Sprinklers &
                                                                  Irrigation
                                                                  System,
                                                                  Professional
                                                                  Laundry
                                                                  solutions, PSA
                                                                  type Oxygen &
                                                                  Nitrogen
                                                                  Generators,
                                                                  Modular
                                                                  Operation
                                                                  Theatres, Fire
                                                                  Fighting
                                                                  Systems and
                                                                  Flowmeters.
                                                            </p>
                                                            {/* <div className="button">
                                                                  <Link to="">
                                                                        <CustomButton btnData="view all product" />
                                                                  </Link>
                                                            </div> */}
                                                      </div>
                                                </div>
                                          </Col>
                                          <Col lg={8} className="px-0">
                                                <div className="project__right--content">
                                                      {products?.length > 0 &&
                                                            products?.map(
                                                                  (
                                                                        product,
                                                                        index
                                                                  ) => (
                                                                        <CustomCard
                                                                              data={
                                                                                    product
                                                                              }
                                                                              key={
                                                                                    index
                                                                              }
                                                                        />
                                                                  )
                                                            )}
                                                </div>
                                          </Col>
                                    </Row>
                              </Container>
                        </div>
                  </div>
            </>
      );
};

export default Projects;
