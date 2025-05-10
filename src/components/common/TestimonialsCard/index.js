import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CustomTitle from "../CustomTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";

const TestimonialsCard = () => {
      const [loading, setLoading] = useState(false);
      const [testimonials, setTestimonials] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/testimonials`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        setTestimonials(response.data.testimonials);
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
                  <Container>
                        <div className="testimonials">
                              <CustomTitle title="Testimonials" />
                              {!loading
                                    ? testimonials?.length > 0 && (
                                            <Swiper
                                                  slidesPerView={1}
                                                  spaceBetween={10}
                                                  autoplay={{
                                                        delay: 3000,
                                                        disableOnInteraction: false,
                                                  }}
                                                  breakpoints={{
                                                        640: {
                                                              slidesPerView: 1,
                                                              spaceBetween: 20,
                                                        },
                                                        768: {
                                                              slidesPerView: 2,
                                                              spaceBetween: 40,
                                                        },
                                                        1024: {
                                                              slidesPerView: 3,
                                                              spaceBetween: 50,
                                                        },
                                                  }}
                                                  modules={[
                                                        Navigation,
                                                        Autoplay,
                                                  ]}
                                                  className="mySwiper"
                                            >
                                                  {testimonials?.map(
                                                        (item, index) => (
                                                              <SwiperSlide
                                                                    key={index}
                                                              >
                                                                    <div className="testimonials__card">
                                                                          <div className="testimonials__content">
                                                                                <p className="testimonials__text">
                                                                                      {
                                                                                            item?.message
                                                                                      }
                                                                                </p>
                                                                          </div>
                                                                          <div className="testimonials__client">
                                                                                <img
                                                                                      src={
                                                                                            item?.image
                                                                                      }
                                                                                      className="testimonials__client--image"
                                                                                      alt="client"
                                                                                />
                                                                                <div className="testimonials__client--text">
                                                                                      <span>
                                                                                            {
                                                                                                  item?.position
                                                                                            }
                                                                                      </span>
                                                                                      <h4 className="testimonials__client--name">
                                                                                            {
                                                                                                  item?.name
                                                                                            }
                                                                                      </h4>
                                                                                </div>
                                                                          </div>
                                                                    </div>
                                                              </SwiperSlide>
                                                        )
                                                  )}
                                            </Swiper>
                                      )
                                    : null}
                        </div>
                  </Container>
            </>
      );
};

export default TestimonialsCard;
