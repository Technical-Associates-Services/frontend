import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../../../data/data'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomButton from '../../../../components/common/button/CustomButton'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'
import CustomTitle from '../../../../components/common/CustomTitle'
import BlogCard from '../../../../components/common/BlogCard'

const Blog = () => {
  return (
    <div className="blog">
      <div
        className="blog__bg--image"
        style={{ backgroundImage: 'url("/images/map.png")' }}
      >
        <Container>
          <CustomTitle
            title="Thoughts & Experiments"
            customStyle={{ width: '300px' }}
          />

          <div className="blog__list">
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
                <SwiperSlide>
                  <BlogCard data={blog} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Blog
