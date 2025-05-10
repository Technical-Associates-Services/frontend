import React from "react";
import ProductCategory from "../ProductCategory";
import ProductSubCategory from "../ProductSubCategory";
import ProductChildCategory from "../ProductChildCategory";

const MenuList = ({ categories }) => {
      return (
            <>
                  <ul className="sub-menu">
                        {categories?.map((item, index) => (
                              <ProductCategory item={item} key={index}>
                                    {item.subCategory?.length > 0 && (
                                          <ul className="sub-category">
                                                {item.subCategory.map(
                                                      (item, index) => (
                                                            <ProductSubCategory
                                                                  ctSubCategory
                                                                  item={item}
                                                                  key={index}
                                                            >
                                                                  {item
                                                                        .childCategory
                                                                        ?.length >
                                                                        0 && (
                                                                        <ul className="child-category">
                                                                              {item.childCategory.map(
                                                                                    (
                                                                                          item,
                                                                                          index
                                                                                    ) => (
                                                                                          <ProductChildCategory
                                                                                                item={
                                                                                                      item
                                                                                                }
                                                                                                key={
                                                                                                      index
                                                                                                }
                                                                                          />
                                                                                    )
                                                                              )}
                                                                        </ul>
                                                                  )}
                                                            </ProductSubCategory>
                                                      )
                                                )}
                                          </ul>
                                    )}
                              </ProductCategory>
                        ))}
                  </ul>
            </>
      );
};

export default MenuList;
