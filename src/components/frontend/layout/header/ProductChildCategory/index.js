import React from 'react'
import { Link } from 'react-router-dom'
import DroprightIcon from '../../../../../icons/DroprightIcon'

const ProductChildCategory = ({ item, children }) => {
  return (
    <>
      <li className="child-category__item">
        <Link to={item.slug}>
          {item.childCategoryName}
          {children && <DroprightIcon />}
        </Link>
        {children && children}
      </li>
    </>
  )
}

export default ProductChildCategory
