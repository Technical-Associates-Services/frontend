import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../button/CustomButton'

const BlogCard = ({ data }) => {
  return (
    <>
      <div className="blog__card">
        <Link to={`/detail/${data.id}`}>
          <div
            className="blog__img"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="time">
              <h4>{data.day}</h4>
              <h5>{data.month}</h5>
              <h5>{data.year}</h5>
            </div>
          </div>
        </Link>
        <div className="blog__title--section">
          <p className="title-header">
            By <Link to="">Frenify</Link> -In <Link to="">Nepal</Link>
          </p>

          <Link to={`/detail/${data.id}`}>
            <div className="blog__title">{data.title}</div>
          </Link>
          <Link to={`/detail/${data.id}`}>
            <CustomButton btnData="read more" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogCard
