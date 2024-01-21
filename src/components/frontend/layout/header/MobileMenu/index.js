import React from 'react'
import { useState, useEffect } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import MenuItem from '../MenuItem'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <div className="side-menu" onClick={handleShow}>
        <i className="ri-menu-line"></i>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/images/logo.png" alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="header__menu mobile__nav">
            <ul className="menu__list">
              <MenuItem title="home" slug="/" />

              <MenuItem title="about us" sulg="/about-us">
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to="">About TAS</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">our associations</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">sister concern</Link>
                  </li>
                </ul>
              </MenuItem>

              <MenuItem title="services" sulg="/services" />
              <MenuItem title="solution" sulg="/solution">
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to="">Hospitality Solutions</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Industrial Solutions</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Residential Solutions</Link>
                  </li>
                </ul>
              </MenuItem>

              <MenuItem title="our products" slug="/our-product">
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to="">Thermax Boilers</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Water Pumps</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Compressed Air System</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Fire Fighting System</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to="">Oxygen & Nitrogen Generators</Link>
                  </li>
                </ul>
              </MenuItem>

              <MenuItem title="contact us" slug="/contact-us" />
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MobileMenu
