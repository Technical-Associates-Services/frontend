import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'
import { waterPumpsData } from '../../../data/data'
import { commercialWterPump } from '../../../data/data'

const WaterPumps = () => {
  return (
    <>
      <CustomBreadcrumb title="water pumps" subtitle="water pumps" />
      <ProductDetailCard
        description={waterPumpsData.description}
        image={waterPumpsData.image}
        link="#"
        title="grundfos water pumps"
      />
     
      <ProductDetailCard
        title="Grundfos Industrial & Commercial Water Pumps In Nepal"
        description="<ul><li>Pumps for Hot Water for Water Transfer, Hot Water Circulation, solar.</li> <li>Pumps for Air-Conditioning for Water Transfer, Chilled Water Circulation.</li></ul>"
        image="/images/water pump.avif"
        order={2}
        backgroundColor="#f8f8f8"
        padding="3rem 0"
        marginBottom="2rem"
      />
      <ProductDetailCard
        title="Domestic Water Pumps In Nepal"
        description="<ul><li>Pumps for your Home for Water Transfer, Submersible Pumps, Water Treatment pumps, gardening pumps, wastewater pumps, rainwater pumps.</li>
        <li>Pumps for Apartments, Hotels & Hospitals for Water Transfer, Submersible Pumps, Air-conditioning Pumps, Hot water circulation pumps, Pressure Boosting pumps, Water Treatment Pumps, gardening pumps, wastewater pumps, and rainwater pumps.</li>
        </ul>"
        image="/images/water-pump.png"
      />
    </>
  )
}

export default WaterPumps
