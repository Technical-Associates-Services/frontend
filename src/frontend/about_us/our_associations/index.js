import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomTitle from "../../../components/common/CustomTitle";
import CustomBreadcrumb from "../../../components/common/CustomBreadcrumb";
import axios from "axios";
import toast from "react-hot-toast";
import { MetaContext } from "../../../store";

const OurAssociation = () => {
      const [loading, setLoading] = useState(true);
      const [associations, setAssociations] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("our-associations");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/associates`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setAssociations(response.data.associates);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <CustomBreadcrumb
                        title="Our Association"
                        subtitle="Our Association"
                  />

                  <Container>
                        <div className="associations">
                              <CustomTitle title="our associations" />
                              <p className="associations__description">
                                    We are proud to offer products from globally
                                    recognized brands. Our partners are industry
                                    leaders in their field. Their reputation for
                                    quality and innovation ensures we deliver
                                    the best solutions to our customers.
                              </p>
                        </div>
                  </Container>

                  {associations?.map((item, index) => (
                        <div
                              className={
                                    ++index % 2 === 0
                                          ? "other-associations-section"
                                          : "brand__section"
                              }
                              key={index}
                        >
                              <Container>
                                    <CustomTitle title={item?.title} />
                                    <div className="brand">
                                          {item?.items.map(
                                                (distributor, index) => (
                                                      <div
                                                            className="brand__card"
                                                            key={index}
                                                      >
                                                            <Link
                                                                  to={
                                                                        distributor?.links ||
                                                                        "#"
                                                                  }
                                                                  target={
                                                                        distributor?.links !==
                                                                        "#s"
                                                                              ? "_blank"
                                                                              : ""
                                                                  }
                                                            >
                                                                  <img
                                                                        className="brand__image"
                                                                        src={
                                                                              distributor?.image
                                                                        }
                                                                        alt={
                                                                              distributor?.title
                                                                        }
                                                                        width="100%"
                                                                        height="100%"
                                                                  />
                                                            </Link>
                                                      </div>
                                                )
                                          )}
                                    </div>
                              </Container>
                        </div>
                  ))}
            </>
      );
};

export default OurAssociation;
