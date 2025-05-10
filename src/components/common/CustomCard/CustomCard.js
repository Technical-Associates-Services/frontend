import React from "react";
import { Link } from "react-router-dom";

const CustomCard = ({ data }) => {
      return (
            <>
                  <div className="custom-card">
                        <img
                              className="custom-card__image"
                              src={data?.image}
                              alt={data?.title}
                        />
                        <div className="custom-card__info">
                              <Link to={`/product/${data?.slug}`}>
                                    <div className="custom-card__title">
                                          {data.title}
                                    </div>
                              </Link>
                              <div className="custom-card__summary">
                                    {data.summary}
                              </div>
                              <div className="custom-card__button">
                                    <Link to={`/product/${data?.slug}`}>
                                          More Details
                                          <i className="ri-arrow-right-line"></i>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default CustomCard;
