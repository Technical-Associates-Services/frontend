import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'
import { waterAndSpaceHeatingaData } from '../../../data/data'

const WaterAndSpaceHeating = () => {
  return (
    <>
      <CustomBreadcrumb
        title="Water & Space Heating Systems"
        subtitle="Space Heating"
      />
      <ProductDetailCard />
    </>
  )
}

export default WaterAndSpaceHeating
