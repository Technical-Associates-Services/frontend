import React from 'react'
import { Link } from 'react-router-dom'
import DropdownIcon from '../../../../../icons/DropdownIcon'

const MenuItem = ({ index, title, slug, children }) => {
  return (
    <>
      <li key={index} className="menu__item ">
        <Link to={slug}>
          {title}
          {children && <DropdownIcon />}
        </Link>
        {children && children}
      </li>
    </>
  )
}

export default MenuItem
