import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'
import { waterPumpsData } from '../../../data/data'

const WaterPumps = () => {
  return (
    <>
      <CustomBreadcrumb title="water pumps" subtitle="water pumps" />
      <ProductDetailCard
        description={waterPumpsData.description}
        image={waterPumpsData.image}
        link="#"
      />
      <ProductDetailCard
        classes={12}
        description={waterPumpsData.description}
        newClass="mb-5"
      />
    </>
  )
}

export default WaterPumps
