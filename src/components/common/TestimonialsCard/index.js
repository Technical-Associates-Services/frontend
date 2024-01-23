import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomTitle from '../CustomTitle'
import { testimonialsCards } from '../../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'

const TestimonialsCard = () => {
  return (
    <>
      <Container>
        <div className="testimonials">
          <CustomTitle title="Testimonials" />
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
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
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {testimonialsCards.map((testimonialsCard, index) => (
              <SwiperSlide key={index}>
                <div className="testimonials__card">
                  <div className="testimonials__content">
                    <p className="testimonials__text">
                      {testimonialsCard.text}
                    </p>
                  </div>
                  <div className="testimonials__client">
                    <img
                      src={testimonialsCard.image}
                      className="testimonials__client--image"
                      alt="client"
                    />
                    <div className="testimonials__client--text">
                      <span>{testimonialsCard.post}</span>
                      <h4 className="testimonials__client--name">
                        {testimonialsCard.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  )
}

export default TestimonialsCard
