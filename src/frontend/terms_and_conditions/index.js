import React, { useContext, useEffect, useState } from "react";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import { Container, Spinner } from "react-bootstrap";
import { PolicyContent } from "./style";
import axios from "axios";
import { MetaContext } from "../../store";

const TermsAndCondition = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("terms-and-condition");

      const [loading, setLoading] = useState(false);
      const [policy, setPolicy] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/pages/terms-and-condition`,
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
                        title="Terms & Condition"
                        subtitle="Terms & Condition"
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

export default TermsAndCondition;
