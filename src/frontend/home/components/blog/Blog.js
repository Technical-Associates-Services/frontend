import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import CustomTitle from "../../../../components/common/CustomTitle";
import BlogCard from "../../../../components/common/BlogCard";
import axios from "axios";

const Blog = () => {
      const [loading, setLoading] = useState(false);
      const [blogs, setBlogs] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/blogs`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        setBlogs(response.data.blogs);
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
            <div className="blog">
                  <div
                        className="blog__bg--image"
                        style={{ backgroundImage: 'url("/images/map.png")' }}
                  >
                        <Container className="py-5">
                              <CustomTitle
                                    title="Thoughts & Experiments"
                                    customStyle={{ width: "300px" }}
                              />

                              <div className="blog__list">
                                    {!loading ? (
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
                                                modules={[Navigation, Autoplay]}
                                                className="mySwiper"
                                          >
                                                {blogs.map((blog, index) => (
                                                      <SwiperSlide key={index}>
                                                            <BlogCard
                                                                  data={blog}
                                                            />
                                                      </SwiperSlide>
                                                ))}
                                          </Swiper>
                                    ) : null}
                              </div>
                        </Container>
                  </div>
            </div>
      );
};

export default Blog;
