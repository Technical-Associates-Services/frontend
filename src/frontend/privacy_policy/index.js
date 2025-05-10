import React, { useContext, useEffect, useState } from "react";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import axios from "axios";
import { Container, Spinner } from "react-bootstrap";
import { PolicyContent } from "../terms_and_conditions/style";
import { MetaContext } from "../../store";

const PrivacyPolicy = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("privacy-policy");

      const [loading, setLoading] = useState(false);
      const [policy, setPolicy] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/pages/privacy-policy`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setPolicy(response.data.page);
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
                        title="Privacy Policy"
                        subtitle="Privacy Policy"
                  />

                  <Container>
                        <PolicyContent>
                              {!loading ? (
                                    <div
                                          dangerouslySetInnerHTML={{
                                                __html: policy?.description,
                                          }}
                                    ></div>
                              ) : (
                                    <div className="text-center py-5">
                                          <Spinner />
                                    </div>
                              )}
                        </PolicyContent>
                  </Container>
            </>
      );
};

export default PrivacyPolicy;
