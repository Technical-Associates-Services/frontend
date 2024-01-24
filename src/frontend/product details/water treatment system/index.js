import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'
import { waterPumpsData } from '../../../data/data'

const WaterTreatmentSystem = () => {
  return (
    <>
      <CustomBreadcrumb
        title="water treatment system"
        subtitle="Water Treatment System In Nepal"
      />

      <ProductDetailCard />
    </>
  )
}

export default WaterTreatmentSystem
