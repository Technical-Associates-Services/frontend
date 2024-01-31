import React from 'react'
import { Link } from 'react-router-dom'
import DroprightIcon from '../../../../../icons/DroprightIcon'

const ProductChildCategory = ({ item, children }) => {
  return (
    <>
      <li className="child-category__item">
        <Link to="#">{item.childCategoryName}</Link>
        {children && <DroprightIcon />}
        {children && children}
      </li>
    </>
  )
}

export default ProductChildCategory
