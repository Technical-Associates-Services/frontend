import React from 'react'
import CustomTitle from '../../../../components/common/CustomTitle'
import { Col, Container, Row } from 'react-bootstrap'
import CustomButton from '../../../../components/common/button/CustomButton'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { referencesImages } from '../../../../data/data'

const References = () => {
  return (
    <>
      <Container>
        <div className="references">
          <Row>
            <Col lg={8}>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper"
              >
                {referencesImages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="references__images--section">
                      <Link
                        to="#"
                        className="references__image"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="content-wrap">
                          <h4 className="content-title">{item.title}</h4>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
            <Col lg={4}>
              <div className="references__content">
                <CustomTitle title="references" />
                <p className="references__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem exercitationem distinctio maiores placeat tempora
                  accusantium eius autem, sed fugit expedita aliquam?
                </p>
                <Link to="#">
                  <CustomButton btnData="Explore More" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default References
