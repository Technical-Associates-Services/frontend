import React from "react";
import ProductDetailCard from "../components/ProductDetailCard";
import CustomBreadcrumb from "../../../components/common/CustomBreadcrumb";
import { hotWaterHeatPumps } from "../../../data/data";
import AreasOfApplication from "../components/AreasOfApplication";
import { featureAndBenefit } from "../../../data/data";

const HeatExchangerPage = () => {
      return (
            <>
                  <CustomBreadcrumb
                        title="Hot Water Heat Pumps"
                        subtitle=" Hot Water Heat Pumps In Nepal"
                  />
                  <ProductDetailCard
                        description={hotWaterHeatPumps.description}
                        image={hotWaterHeatPumps.image}
                        title={hotWaterHeatPumps.title}
                        link="#"
                  />

                  <AreasOfApplication />
                  <ProductDetailCard
                        description={featureAndBenefit.description}
                        image={featureAndBenefit.image}
                        title={featureAndBenefit.title}
                        order={2}
                  />

                  <div className="energy-efficiency-and-saving">
                        <ProductDetailCard
                              title="Increase Energy Efficiency & Savings"
                              description="<h5>Maximum efficiency</h5> <p>The hot water storage tank is designed to maximize the efficiency of hot water production:</p> <ul>
          <li>Multiple layers of polyurethane foam fully insulate the water heater</li> <li>Stainless steel heat exchanger, with a capacity of 29 liters, runs the entire length of the tank.</li> <ul>
          </ul>"
                              image="/images/img-2.jpg"
                        />
                  </div>
            </>
      );
};

export default HeatExchangerPage;
