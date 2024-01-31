import React from 'react'
import { Link } from 'react-router-dom'
import DroprightIcon from '../../../../../icons/DroprightIcon'

const ProductSubCategory = ({ item, children }) => {
  return (
    <>
      <li className="sub-category__item">
        <Link to="">{item.subCategoryName}</Link>
        {children && <DroprightIcon />}
        {children && children}
      </li>
    </>
  )
}

export default ProductSubCategory
