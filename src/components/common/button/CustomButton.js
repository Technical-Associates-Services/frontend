import React from 'react'

const CustomButton = ({ btnData, customStyle }) => {
  return (
    <>
      <div className="custom-button" style={customStyle}>
        {btnData}
      </div>
    </>
  )
}

export default CustomButton
