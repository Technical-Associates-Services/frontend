import React from 'react'
import { Link } from 'react-router-dom'

const TopPanel = () => {
  return (
    <>
      <div className="toppanel">
        <div className="toppanel__left--panel">
          <div className="toppanel__info">
            <Link to="tel:07787744741">info@tas.com.np</Link>
          </div>
          <div className="toppanel__social--list">
            <ul className="social-icons">
              <li className="icon">
                <Link to="">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </li>
              <li className="icon">
                <Link to="">
                  <i className="ri-twitter-line"></i>
                </Link>
              </li>
              <li className="icon">
                <Link to="">
                  <i className="ri-instagram-line"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="toppanel__right--panel">
          <p className="number">
            <span>Toll Free: </span>
            1-800-987-6543
          </p>
        </div>
      </div>
    </>
  )
}

export default TopPanel
