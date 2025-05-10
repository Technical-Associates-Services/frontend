import React from "react";
import { Link } from "react-router-dom";
import DroprightIcon from "../../../../../icons/DroprightIcon";

const ProductSubCategory = ({ item, children, arrowStatus, onClick }) => {
      return (
            <>
                  <li className="sub-category__item">
                        <Link
                              target={item?.link ? "_blank" : ""}
                              to={
                                    item?.link
                                          ? item.link
                                          : `/product/${item.slug}`
                              }
                              onClick={onClick}
                        >
                              {item.title}
                              {!arrowStatus && children && <DroprightIcon />}
                        </Link>
                        {children && children}
                  </li>
            </>
      );
};

export default ProductSubCategory;
