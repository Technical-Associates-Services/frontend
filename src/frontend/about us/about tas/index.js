import React from 'react'
import About from '../../home/components/about/About'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomTitle from '../../../components/common/CustomTitle'
import { testimonialsCards } from '../../../data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'

const AboutTas = () => {
  return (
    <>
      <CustomBreadcrumb title="About TAS" subtitle="about tas" />
      <Container>
        <div className="tas">
          <Row>
            <Col lg={6}>
              <img
                src="/images/tas-company.jpg"
                className="tas__image"
                alt="tas"
              />
            </Col>
            <Col lg={6}>
              <div className="tas__content">
                <CustomTitle title="about TAS" />
                <p className="tas__description">
                  <strong>Technical Associates Services P. Ltd. </strong>was
                  formed in the year <strong>2002&nbsp;</strong>with an aim to
                  provide cost effective engineering solutions to Nepalese
                  people and industries.
                </p>
                <p className="tas__description">
                  We provide complete solutions for Water Treatment Systems,
                  Waste Treatment Systems, Water Treatment Accessories, Water
                  Heating Systems, Pharma water distributions system, Pumping
                  Solutions, Compressed Air Systems, Medical Gas Pipeline
                  Systems, Sprinklers & Irrigation System, Professional Laundry
                  solutions, PSA type Oxygen & Nitrogen Generators, Modular
                  Operation Theatres, Fire Fighting Systems and Flowmeters.
                </p>
                <p className="tas__description">
                  Our office is located at the heart of Kathmandu city in
                  Maitighar Mandala, with all the required infrastructure. We
                  also have a branch office and warehouse located at Birgunj.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="items">
          <Row>
            <Col lg={4}>
              <div className="items__item">
                <div className="items__content">
                  <img src="/images/vision.png" alt="" />
                  <h4>
                    vision
                    <span>01</span>
                  </h4>
                  <div className="items__description">
                    Preserved believing extremity. Easy mr pain felt in. Too
                    northward affection additions nay.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="items__item">
                <div className="items__content">
                  <img src="/images/mission.png" alt="mission" />
                  <h4>
                    mission
                    <span>02</span>
                  </h4>
                  <div className="items__description">
                    Preserved believing extremity. Easy mr pain felt in. Too
                    northward affection additions nay.
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="items__item">
                <div className="items__content">
                  <img src="/images/development.png" alt="development" />
                  <h4>
                    development
                    <span>03</span>
                  </h4>
                  <div className="items__description">
                    Preserved believing extremity. Easy mr pain felt in. Too
                    northward affection additions nay.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div
        className="testimonials"
        style={{
          backgroundImage: "url('/images/testimonial-bg3.jpg')",
        }}
      >
        <Container>
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
              <SwiperSlide>
                <div className="testimonials__card" key={index}>
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
        </Container>
      </div>
    </>
  )
}

export default AboutTas
