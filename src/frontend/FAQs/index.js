import React, { useContext, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import FAQsCard from "../../components/frontend/FAQs/FAQsCard";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import { MetaContext } from "../../store";
import axios from "axios";

const FAQs = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("faqs");

      const [loading, setLoading] = useState(false);
      const [faqs, setFaqs] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/faqs`)
                  .then((response) => {
                        if (response.data.result === "success") {
                              setFaqs(response.data.types);
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
                  <CustomBreadcrumb title="FAQs" subtitle="FAQs" />

                  {!loading ? (
                        faqs?.map((item, index) => (
                              <>
                                    <Container fluid className="px-0">
                                          <FAQsCard
                                                title={item?.title}
                                                faqs={item?.faqs}
                                                order={index}
                                                image={item?.image}
                                                style={{
                                                      paddingBottom:
                                                            index % 2 === 0
                                                                  ? "2rem"
                                                                  : "10rem",
                                                }}
                                          />
                                    </Container>
                                    {index % 2 === 0 && (
                                          <div
                                                className="faqs-bg-image"
                                                style={{
                                                      backgroundImage:
                                                            'url("/images/img-6.jpg")',
                                                }}
                                          >
                                                <Container>
                                                      <div className="content">
                                                            <p>
                                                                  With diverse
                                                                  capabilities
                                                                  and extensive
                                                                  manufacturing
                                                                  experience,
                                                                  you can rely
                                                                  on Amwerk as a
                                                                  critical part
                                                                  of your supply
                                                                  chain.
                                                            </p>
                                                      </div>
                                                </Container>
                                          </div>
                                    )}
                              </>
                        ))
                  ) : (
                        <div className="text-center ">
                              <Spinner />
                        </div>
                  )}

                  {/* <Container fluid className="px-0">
                        <FAQsCard
                              order={2}
                              title="Commercial"
                              style={{ paddingBottom: "5rem" }}
                        />
                  </Container> */}
            </>
      );
};

export default FAQs;
