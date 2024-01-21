import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { banners } from '../../../../data/data'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Navigation]}
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="banner__image"
                style={{ backgroundImage: `url(${banner.image}) ` }}
              >
                <div className="banner__title--holder">
                  <div className="title__holder--content">
                    <p className="category">{banner.category}</p>
                    <h3 className="banner__title">{banner.title}</h3>
                    <div className="banner__description">
                      {banner.description}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Banner
