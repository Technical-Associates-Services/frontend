import React from "react";
import { Link } from "react-router-dom";
import DroprightIcon from "../../../../../icons/DroprightIcon";

const ProductChildCategory = ({ item, children, arrowStatus, onClick }) => {
      return (
            <>
                  <li className="child-category__item">
                        <Link
                              target={item?.link ? "_blank" : ""}
                              onClick={onClick}
                              to={
                                    item?.link
                                          ? item.link
                                          : `/product/${item.slug}`
                              }
                        >
                              {item.title}
                              {!arrowStatus && children && <DroprightIcon />}
                        </Link>
                        {children && children}
                  </li>
            </>
      );
};

export default ProductChildCategory;
