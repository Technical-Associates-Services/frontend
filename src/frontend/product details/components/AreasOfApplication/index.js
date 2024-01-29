import React from 'react'
import { Container } from 'react-bootstrap'
import { areasOfApplication } from '../../../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'
import CustomTitle from '../../../../components/common/CustomTitle'

const AreasOfApplication = () => {
  return (
    <>
      <div className="areas-of-application">
        <Container>
          <CustomTitle title="areas of application" />
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {areasOfApplication.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div className="item__backcolor">
                    <img className="item__image" src={item.image} alt="" />
                  </div>
                  <div className="item__title">{item.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </>
  )
}

export default AreasOfApplication
