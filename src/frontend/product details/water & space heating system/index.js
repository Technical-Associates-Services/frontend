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
      <ProductDetailCard
        description={waterAndSpaceHeatingaData.description}
        image={waterAndSpaceHeatingaData.image}
        link="#"
        title="Water & Space Heating Systems"
      />
      <ProductDetailCard
        description="<p>A WELL-MAINTAINED HEATING SYSTEM FOR YOUR BUSINESS AND HOUSE IS IMPORTANT FOR COST EFFICIENCY AND COMFORT.</p>
      <p>Today’s heating systems are very different from the old systems that many buildings still have. Modern heat services are smaller, quieter, and more energy efficient. There are also more options for the heating source. Systems can run on gas, electricity, and steam, as well as more eco-friendly fuel sources such as wood pellets, water, and even solar. The type of heat service source you choose will depend on the geographical location of your business and house, the size of the building, and your price limitations for the new system. You will want to keep in mind that although a more energy-efficient system might be expensive to purchase and install, you will make up the costs involved through lower heating costs. This is especially important for areas that have long-harsh-winters.</p>"
        classes={12}
        marginBottom="5rem"
      />
    </>
  )
}

export default WaterAndSpaceHeating
