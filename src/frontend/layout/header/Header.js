import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import MenuItem from '../../../components/frontend/layout/header/MenuItem'
import TopPanel from '../../../components/frontend/layout/header/TopPanel'
import MobileMenu from '../../../components/frontend/layout/header/MobileMenu'
import { productCategory } from '../../../data/data'
import ProductCategory from '../../../components/frontend/layout/header/ProductCategory'
import ProductSubCategory from '../../../components/frontend/layout/header/ProductSubCategory'
import ProductChildCategory from '../../../components/frontend/layout/header/ProductChildCategory'
const Header = () => {
  return (
    <>
      <header>
        <TopPanel />
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <nav>
            <div className="header__menu">
              <ul className="menu__list">
                <MenuItem title="home" slug="/" />

                <MenuItem title="about us" slug="/">
                  <ul className="sub-menu">
                    <li className="sub-menu__item">
                      <Link to="/about-us">About TAS</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="/associations">our associations</Link>
                    </li>
                    <li className="sub-menu__item">
                      <Link to="/sister-concern">sister concern</Link>
                    </li>
                  </ul>
                </MenuItem>

                <MenuItem title="services" slug="/services" />
                <MenuItem title="solution" slug="/solution"></MenuItem>

                <MenuItem title="our products" slug="/">
                  <ul className="sub-menu">
                    {productCategory.map((item, index) => (
                      <ProductCategory item={item} key={index}>
                        {item.subCategory && (
                          <ul className="sub-category">
                            {item.subCategory.map((item, index) => (
                              <ProductSubCategory item={item} key={index}>
                                {item.subCategory.childCategory && (
                                  <ul className="child-category">
                                    {item.subCategory.childCategory.map(
                                      (item, index) => (
                                        <ProductChildCategory
                                          item={item}
                                          key={index}
                                        />
                                      )
                                    )}
                                  </ul>
                                )}
                              </ProductSubCategory>
                            ))}
                          </ul>
                        )}
                      </ProductCategory>
                    ))}
                  </ul>
                </MenuItem>

                <MenuItem title="contact us" slug="/contact-us" />
              </ul>
            </div>
          </nav>
          <div className="toll-free">
            <p className="number">
              <span>Toll Free: </span>
              1-800-987-6543
            </p>
          </div>

          <MobileMenu />
        </div>
      </header>
    </>
  )
}

export default Header
