import React from 'react'
import { Link } from 'react-router-dom'
import DropdownIcon from '../../../../../icons/DropdownIcon'

const MenuItem = ({ index, title, slug, children }) => {
  return (
    <>
      <li key={index} className="menu__item menu__link--acitve">
        <Link to={slug}>{title}</Link>
        {children && <DropdownIcon />}
        {children && children}
      </li>
    </>
  )
}

export default MenuItem
