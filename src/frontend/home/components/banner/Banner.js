import { sanitizeHtml } from "../../../../utils/sanitize";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { banners as defaultBanners } from "../../../../data/data";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

const Banner = () => {
      const [bannerList, setBannerList] = useState(defaultBanners);

      useEffect(() => {
            const fetchBanners = async () => {
                  try {
                        const response = await axios.get(
                              `${process.env.REACT_APP_SECRET_KEY}/api/banners`
                        );
                        if (
                              response.data?.result === "success" &&
                              Array.isArray(response.data?.banners) &&
                              response.data.banners.length > 0
                        ) {
                              setBannerList(response.data.banners);
                        }
                  } catch (error) {
                        console.error("Error fetching banners:", error);
                  }
            };
            fetchBanners();
      }, []);

      return (
            <>
                  <div className="banner">
                        <Swiper
                              spaceBetween={30}
                              effect={"fade"}
                              centeredSlides={true}
                              autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                              }}
                              navigation={true}
                              modules={[Autoplay, EffectFade, Navigation]}
                              className="mySwiper"
                        >
                              {bannerList.map((banner, index) => (
                                    <SwiperSlide key={index}>
                                          <div
                                                className="banner__image"
                                                style={{
                                                      backgroundImage: `url(${banner.image}) `,
                                                }}
                                          >
                                                <div className="banner__title--holder">
                                                      <div className="title__holder--content">
                                                            {banner.category && (
                                                                  <p className="category">
                                                                        {banner.category}
                                                                  </p>
                                                            )}
                                                            <h3 className="banner__title">
                                                                  {banner.title}
                                                            </h3>
                                                            {banner.description && (
                                                                  <div 
                                                                        className="banner__description"
                                                                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(banner.description) }}
                                                                  />
                                                            )}
                                                      </div>
                                                </div>
                                          </div>
                                    </SwiperSlide>
                              ))}
                        </Swiper>
                  </div>
            </>
      );
};

export default Banner;
