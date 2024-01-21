import React from 'react'

const CustomTitle = ({ title, customStyle }) => {
  return (
    <>
      <h3 className="title" style={customStyle}>
        {title}
      </h3>
    </>
  )
}

export default CustomTitle
