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

      <ProductDetailCard
        title="water treatment system"
        description="<p>Wastewater treatment consists of a series of treatment processes for the removal of unwanted physical, chemical, and gaseous impurities present in water. Different processes, techniques and methods are adopted for the removal of different kinds of impurities.</p>"
        image="/images/water-treatment-plant.jpg"
        link="#"
      />

      <ProductDetailCard
        title="filter"
        description="<p>Filtration is a process of removal of suspended matter. For the removal of turbid suspended matter in the raw water, pressure sand & dual media filters are used. For a reduction in iron content(suspended form), either an iron removal or an activated carbon filter with prechlorination can be used. Free chlorine in water can be adsorbed by using activated carbon filters. Filtration systems are normally designed, based on raw water velocity.</p>
        <p>Tas offers a wide range of filtration systems. Filters are available with single, 5-way valve operation & multiple valve operation depending on fluoride and the application. Filters are available in MS(painted /epoxy coated), FRP & HDPE construction.</p>
        <h5>Different types of filters available are:</h5> <ul><li>Sand Filter</li> <li>Iron removable filter</li></ul>"
        classes={12}
        backgroundColor="#f8f8f8"
        padding="3rem"
        marginBottom="2rem"
      />

      <ProductDetailCard
        title="softener"
        description="<p>Softening is a widely used technology for reducing hotness forming ions(Ca and Mg) which precipitate and scale at very low temperatures and pressures. Softening is a reversible ion exchange process wherein the hardness-forming ions are exchanged with sodium ions and present in the resin group. TAS offers a wide range of softening plants with versatility inflow, flexibility in resin quantities and ease of operation.</p>"
        image="/images/softener.jpg"
      />
      <ProductDetailCard
        title="Demineralization"
        description="<p>Softening is a widely used technology for reducing hotness forming ions(Ca and Mg) which precipitate and scale at very low temperatures and pressures. Softening is a reversible ion exchange process wherein the hardness-forming ions are exchanged with sodium ions and present in the resin group. TAS offers a wide range of softening plants with versatility inflow, flexibility in resin quantities and ease of operation.</p>"
        image="/images/dimineralizer2.jpg"
        order={2}
        backgroundColor="#f8f8f8"
        padding="3rem"
        marginBottom="2rem"
      />
      <ProductDetailCard
        title="Ultrafiltration (UF)"
        description="<p>Softening is a widely used technology for reducing hotness forming ions(Ca and Mg) which precipitate and scale at very low temperatures and pressures. Softening is a reversible ion exchange process wherein the hardness-forming ions are exchanged with sodium ions and present in the resin group. TAS offers a wide range of softening plants with versatility inflow, flexibility in resin quantities and ease of operation.</p>"
        image="/images/ultra1-300x237-1.jpg"
      />
      <ProductDetailCard
        title="Reverse osmosis"
        description="<p>Softening is a widely used technology for reducing hotness forming ions(Ca and Mg) which precipitate and scale at very low temperatures and pressures. Softening is a reversible ion exchange process wherein the hardness-forming ions are exchanged with sodium ions and present in the resin group. TAS offers a wide range of softening plants with versatility inflow, flexibility in resin quantities and ease of operation.</p>"
        image="/images/reverse_osmosis.jpg"
        order={2}
        backgroundColor="#f8f8f8"
        padding="3rem"
        marginBottom="2rem"
      />
      <ProductDetailCard
        title="specialized solutions"
        description="<ul><li><h5> IRON AND AMMONIA REMOVAL</h5><p>e design and engineer the iron and ammonia removal system, which has been a typical problem in Kathmandu valley borewell water.</p></li>
        <li><h5>DRINKING WATER PLANT</h5><p>e design and engineer the iron and ammonia removal system, which has been a typical problem in Kathmandu valley borewell water.</p></li></ul>"
        classes={12}
      />
      <ProductDetailCard
        title="accessories "
        description="<p>Softening is a widely used technology for reducing hotness forming ions(Ca and Mg) which precipitate and scale at very low temperatures and pressures. Softening is a reversible ion exchange process wherein the hardness-forming ions are exchanged with sodium ions and present in the resin group. TAS offers a wide range of softening plants with versatility inflow, flexibility in resin quantities and ease of operation.</p>
        <ul><li>FRP and MS vessels</li><li>Multipot Valves</li><li>lectronic Dossing Pump</li></ul>"
        image="/images/water-treatment-accessories.jpg"
        order={2}
        backgroundColor="#f8f8f8"
        padding="3rem"
      />
    </>
  )
}

export default WaterTreatmentSystem
