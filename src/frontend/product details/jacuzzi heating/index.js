import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'

const JacuzziHeating = () => {
  return (
    <>
      <CustomBreadcrumb title="Jacuzzi Heating" subtitle="jacuzzi heating" />
      <ProductDetailCard
        title="jacuzzi heating"
        description="<p>We Provide Jacuzzi Heating Solutions to achieve energy saving at high standards. Heat pump with COP over 5 and Flat Plate Collectors with 7kwh per day save much energy to provide pay-back time period of 2-3 years. We are the leading supplier and distributor of Jacuzzi Heat Pumps in Nepal. These are not only the most efficient but also economical pool heat pumps available in the market. They help in maintaining a comfortable soothing temperature all around the year. These also allow maximum usage and utilization of the pool. These Heat Pumps require a small amount of energy to operate the compressor and fan motor and hence effectively reduce energy bills. In reality, our heat pumps produce up to 5 times more heat energy than the electricity consumed by them. Pool heat pumps can be widely installed in any kind of Swimming Pool, Spa, Hot Water for homes and many other places</p>"
        link="#"
        image="/images/jacuzzi.jpg"
      />
      <ProductDetailCard
        title="We are friendly to the environment"
        description="<ul><li>Eco-friendly refrigerant R32</li>
        <li>Lower GWP 675 (GWP: Global Warming Potential)</li></ul>"
        image="/images/eco.jpg"
        backgroundColor="#f8f8f8"
        padding="4rem 0"
        order={2}
      />
    </>
  )
}

export default JacuzziHeating
