import React, { useState, useEffect } from 'react'

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const threshold = 200

      setIsVisible(scrollTop > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <>
      <div
        className={`scroll-btn ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <div className="icon">
          <i className="ri-arrow-up-s-line"></i>
        </div>
      </div>
    </>
  )
}

export default ScrollButton
