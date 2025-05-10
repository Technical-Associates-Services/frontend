import React from "react";
import { Container } from "react-bootstrap";
import CustomButton from "../../../../components/common/button/CustomButton";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { overviews } from "../../../../data/overview";
// import required modules
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Overview = () => {
      return (
            <>
                  <div className="overview">
                        <div
                              className="overview__bg--image"
                              style={{
                                    backgroundImage:
                                          'url("/images/Group-1.jpg")',
                              }}
                        >
                              <Container>
                                    <Swiper
                                          className="mySwiper"
                                          autoplay={{
                                                delay: 4000,
                                                disableOnInteraction: false,
                                          }}
                                          loop={true}
                                          slidesPerView={1}
                                          modules={[Autoplay]}
                                    >
                                          {overviews.map((item, index) => (
                                                <SwiperSlide key={index}>
                                                      <div className="overview__content d-flex align-items-center gap-5">
                                                            <div className="custom-wrapper">
                                                                  <div className="overview__subtitle">
                                                                        {
                                                                              item.subTitle
                                                                        }
                                                                  </div>
                                                                  <div className="overview__title">
                                                                        {
                                                                              item.title
                                                                        }
                                                                  </div>
                                                                  <div className="overview__samary ">
                                                                        {
                                                                              item.summary
                                                                        }
                                                                  </div>
                                                            </div>
                                                            <Link to="#">
                                                                  <CustomButton btnData="Explore More" />
                                                            </Link>
                                                      </div>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </Container>
                        </div>
                  </div>
            </>
      );
};

export default Overview;
