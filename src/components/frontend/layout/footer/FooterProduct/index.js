import React from 'react'
import { Link } from 'react-router-dom'

const FooterProduct = ({ data }) => {
  return (
    <>
      <li className="item">
        <Link to={data.slug}>{data.title}</Link>
      </li>
    </>
  )
}

export default FooterProduct
