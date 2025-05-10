import React from "react";
import { Link } from "react-router-dom";
import DroprightIcon from "../../../../../icons/DroprightIcon";

const ProductCategory = ({ item, children, arrowStatus, onClick }) => {
      return (
            <>
                  <li className="sub-menu__item">
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

export default ProductCategory;
