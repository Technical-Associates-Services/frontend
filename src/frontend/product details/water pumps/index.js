import React, { useEffect, useState } from "react";
import CustomBreadcrumb from "../../../components/common/CustomBreadcrumb";
import ProductDetailCard from "../components/ProductDetailCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeatExchangerNepal from "./HeatExchangerNepal";

const WaterPumps = () => {
      const { productId } = useParams();
      const [loading, setLoading] = useState(false);
      const [product, setProduct] = useState([]);
      const [additional, setAdditional] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/products/${productId}/show`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setProduct(response.data.product);
                              setAdditional(response.data.product.additionals);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            window.scrollTo(0, 0);
            loadData();
      }, [productId]);

      return (
            <>
                  <Helmet>
                        <title>{product?.seo_title || product?.title}</title>
                  </Helmet>
                  <CustomBreadcrumb
                        title={product?.title}
                        subtitle={product?.title}
                  />
                  <ProductDetailCard
                        description={product?.description}
                        image={product?.image}
                        product={product}
                        link={product?.download}
                        title={product?.title}
                  />

                  {additional?.map((item, index) => (
                        <>
                              {(item?.title ||
                                    item?.description ||
                                    item?.image) && (
                                    <ProductDetailCard
                                          title={item?.title}
                                          key={index}
                                          description={item?.description}
                                          image={item?.image}
                                          classes={item?.image ? 6 : 12}
                                          order={index % 2 === 0}
                                          backgroundColor={`${
                                                index % 2 === 0 ? "#f8f8f8" : ""
                                          } `}
                                          padding={`${
                                                index % 2 === 0 ? "3rem 0" : ""
                                          }`}
                                          marginBottom={`${
                                                index % 2 === 0 ? "2rem" : ""
                                          }`}
                                          endItem={
                                                additional?.length - 1 === index
                                          }
                                    />
                              )}
                        </>
                  ))}
                  {productId === "heat-exchanger-nepal" && (
                        <HeatExchangerNepal />
                  )}
            </>
      );
};

export default WaterPumps;
