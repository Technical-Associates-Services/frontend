import React, { useEffect, useRef } from "react";
import Mmenu from "mmenu-js";
import "mmenu-js/dist/mmenu.css";
import { Link } from "react-router-dom";
import ProductCategory from "../ProductCategory";
import ProductSubCategory from "../ProductSubCategory";
import ProductChildCategory from "../ProductChildCategory";

const MobileMenuList = ({ setShow, categories }) => {
      const menuRef = useRef(null);

      useEffect(() => {
            if (!menuRef.current) {
                  menuRef.current = new Mmenu("#menu", {
                        offCanvas: {
                              use: false,
                        },
                        counters: {
                              add: true,
                        },
                        setSelected: {
                              hover: true,
                        },
                        navbars: [
                              {
                                    position: "top",
                                    content: ["searchfield"],
                              },
                        ],
                  });
            }
      }, []);

      return (
            <>
                  <nav id="menu">
                        <ul>
                              <li>
                                    <Link onClick={() => setShow()} to="/">
                                          Home
                                    </Link>
                              </li>
                              <li>
                                    <span>About us</span>
                                    <ul>
                                          <li>
                                                <Link
                                                      onClick={() => setShow()}
                                                      to="/about-us"
                                                >
                                                      About TAS
                                                </Link>
                                          </li>
                                          <li>
                                                <Link
                                                      onClick={() => setShow()}
                                                      to="/associations"
                                                >
                                                      Our Association
                                                </Link>
                                          </li>
                                          <li>
                                                <Link
                                                      onClick={() => setShow()}
                                                      to="/sister-concern"
                                                >
                                                      Sister Concern
                                                </Link>
                                          </li>
                                    </ul>
                              </li>
                              <li>
                                    <Link
                                          onClick={() => setShow()}
                                          to="/services"
                                    >
                                          Services
                                    </Link>
                              </li>
                              <li>
                                    <Link
                                          onClick={() => setShow()}
                                          to="/solutions"
                                    >
                                          Solutions
                                    </Link>
                              </li>
                              <li>
                                    <span>Products</span>
                                    <ul>
                                          {categories?.map((item, index) => (
                                                <ProductCategory
                                                      item={item}
                                                      key={index}
                                                      arrowStatus={true}
                                                      onClick={() => setShow()}
                                                >
                                                      {item.subCategory
                                                            ?.length > 0 && (
                                                            <ul className="sub-category">
                                                                  {item.subCategory.map(
                                                                        (
                                                                              item,
                                                                              index
                                                                        ) => (
                                                                              <ProductSubCategory
                                                                                    ctSubCategory
                                                                                    item={
                                                                                          item
                                                                                    }
                                                                                    key={
                                                                                          index
                                                                                    }
                                                                                    arrowStatus={
                                                                                          true
                                                                                    }
                                                                                    onClick={() => setShow()}
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
                                                                                                                  arrowStatus={
                                                                                                                        true
                                                                                                                  }
                                                                                                                  onClick={() => setShow()}
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
                              </li>
                              <li>
                                    <Link
                                          onClick={() => setShow()}
                                          to="/contact-us"
                                    >
                                          Contact Us
                                    </Link>
                              </li>
                        </ul>
                  </nav>
            </>
      );
};

export default MobileMenuList;
