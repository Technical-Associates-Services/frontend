import React from 'react'
import { Link } from 'react-router-dom'
import DroprightIcon from '../../../../../icons/DroprightIcon'

const ProductCategory = ({ item, children }) => {
  return (
    <>
      <li className="sub-menu__item">
        <Link to={item.slug}>
          {item.category}
          {children && <DroprightIcon />}
        </Link>
        {children && children}
      </li>
    </>
  )
}

export default ProductCategory
