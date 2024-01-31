import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'

const SpaceHeating = () => {
  return (
    <>
      <CustomBreadcrumb title="space heating" subtitle="space heating" />
      <ProductDetailCard
        title="Space Heating – Electric Floor Heating System"
        description="<p>Electric heating is an energy-efficient and environmentally friendly floor heating solution. It is flexible for new build homes and renovations for both wet and dry installation</p>
        <p>Quick-responding heating systems are easy to control. They enable great comfort and convenience with their user-friendly navigation providing long-lasting effects according to the highest-ranking quality standards.</p>"
        link="#"
        image="/images/indoor-mat.jpg"
      />

      <ProductDetailCard
        title="Features and Benefits"
        description="<ul><li>For any room in your home</li><li>For any type of flooring</li><li>Prevent slipping on wet tiles in bathrooms or kitchen</li></ul>"
        image="/images/indoor-mat.jpg"
        backgroundColor="#f8f8f8"
        padding="3rem 0"
        marginBottom="2rem"
        order={2}
      />

      <ProductDetailCard
        title="Flexible solution for comfort or total space heating concept"
        description="<p>Electric heating can be utilized as comfort heating (as an additional heat source) or as the primary heat source.</p><ul><li>For any room in your home</li><li>For any type of flooring</li><li>Prevent slipping on wet tiles in bathrooms or kitchen</li></ul>"
        image="/images/indoor-mat.jpg"
      />
      <ProductDetailCard
        title="Floor type: ceramic tiles, natural stone or terrazzo"
        description="<p>Ceramic tiles and marble floors, granite, and terrazzo are smart, easy to maintain, and almost indestructible. There are many advantages to choosing a stone floor. However, unheated stone floors are very uncomfortable.</p>
        <p>On the other hand, cold stone floors can be combined with electric underfloor heating. Our heating cables or mats can be placed directly under the stone floor to help ensure warm feet and a comfortable temperature in the room.</p>"
        image="/images/ceramic titles.jpg"
        backgroundColor="#f8f8f8"
        padding="3rem 0"
        marginBottom="2rem"
        order={2}
      />

      <ProductDetailCard
        title="Floor-type: wooden parquet and laminates"
        description="<p>Ceramic tiles and marble floors, granite, and terrazzo are smart, easy to maintain, and almost indestructible. There are many advantages to choosing a stone floor. However, unheated stone floors are very uncomfortable.</p>
        <p>On the other hand, cold stone floors can be combined with electric underfloor heating. Our heating cables or mats can be placed directly under the stone floor to help ensure warm feet and a comfortable temperature in the room.</p>"
        image="/images/wooden.jpg"
      />

      <ProductDetailCard
        title="Floor type: wall-to-wall carpeting"
        description="<p>Ceramic tiles and marble floors, granite, and terrazzo are smart, easy to maintain, and almost indestructible. There are many advantages to choosing a stone floor. However, unheated stone floors are very uncomfortable.</p>
        <p>On the other hand, cold stone floors can be combined with electric underfloor heating. Our heating cables or mats can be placed directly under the stone floor to help ensure warm feet and a comfortable temperature in the room.</p>"
        image="/images/wall-to-wall carpeting.jpg"
        backgroundColor="#f8f8f8"
        padding="4rem 0"
        order={2}
      />
    </>
  )
}

export default SpaceHeating
