import React from 'react'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import ProductDetailCard from '../components/ProductDetailCard'

const MedicalGasPipelineSystem = () => {
  return (
    <>
      <CustomBreadcrumb
        title="medical gas pipeline system"
        subtitle="medical gas pipeline system"
      />
      <ProductDetailCard
        title="medical gas pipeline system"
        description="<p>TAS is the Nepal’s largest supplier of medical gas equipment, including medical air plants, medical vacuum plants, Oxygen Generation Plants, manifolds and pipeline components to NFPA 99 standards and HTM 02-01 / ISO standards. Medical gas service and support is central to everything we offer our customers, and we maintain the Nepal’s largest service force dedicated exclusively to medical gas.</p>"
        link="#"
        image="/images/img-4.jpg"
      />
      <ProductDetailCard
        title="distribution system "
        description="<p>TAS is the Nepal’s largest supplier of medical gas equipment, including medical air plants, medical vacuum plants, Oxygen Generation Plants, manifolds and pipeline components to NFPA 99 standards and HTM 02-01 / ISO standards. Medical gas service and support is central to everything we offer our customers, and we maintain the Nepal’s largest service force dedicated exclusively to medical gas.</p>"
        image="/images/word-image-1.jpeg"
        backgroundColor="#f8f8f8"
        padding="3rem 0"
        marginBottom="2rem"
        order={2}
      />
      <ProductDetailCard
        title="mainfold system & control panels"
        description="<p>Accessories for Medical Gases Systems:</p>"
        image="/images/flash-tas-pipeline.png"
        classes={12}
      />
    </>
  )
}

export default MedicalGasPipelineSystem
