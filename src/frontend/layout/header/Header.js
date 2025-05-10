import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MenuItem from "../../../components/frontend/layout/header/MenuItem";
import TopPanel from "../../../components/frontend/layout/header/TopPanel";
import MobileMenu from "../../../components/frontend/layout/header/MobileMenu";
import { productCategory } from "../../../data/data";
import ProductCategory from "../../../components/frontend/layout/header/ProductCategory";
import ProductSubCategory from "../../../components/frontend/layout/header/ProductSubCategory";
import ProductChildCategory from "../../../components/frontend/layout/header/ProductChildCategory";
import axios from "axios";
import toast from "react-hot-toast";
import MenuList from "../../../components/frontend/layout/header/MenuList";
const Header = () => {
      const [loading, setLoading] = useState(false);
      const [categories, setCategories] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/categories`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCategories(response.data.categories);
                        }
                  })
                  .catch((error) => {
                        toast.error(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <header>
                        <TopPanel />
                        <div className="header">
                              <div className="header__logo">
                                    <Link to="/">
                                          <img
                                                src="/images/logo.png"
                                                alt="logo"
                                          />
                                    </Link>
                              </div>
                              <nav>
                                    <div className="header__menu">
                                          <ul className="menu__list">
                                                <MenuItem
                                                      title="home"
                                                      slug="/"
                                                />
                                                <MenuItem
                                                      title="about us"
                                                      slug="/"
                                                >
                                                      <ul className="sub-menu">
                                                            <li className="sub-menu__item">
                                                                  <Link to="/about-us">
                                                                        About
                                                                        TAS
                                                                  </Link>
                                                            </li>
                                                            <li className="sub-menu__item">
                                                                  <Link to="/associations">
                                                                        our
                                                                        associations
                                                                  </Link>
                                                            </li>
                                                            <li className="sub-menu__item">
                                                                  <Link to="/sister-concern">
                                                                        sister
                                                                        concern
                                                                  </Link>
                                                            </li>
                                                      </ul>
                                                </MenuItem>
                                                <MenuItem
                                                      title="services"
                                                      slug="/services"
                                                />
                                                <MenuItem
                                                      title="solution"
                                                      slug="/solutions"
                                                />

                                                {/* <MenuItem
                                                      title="references"
                                                      slug="/references"
                                                /> */}

                                                <MenuItem
                                                      title="our products"
                                                      slug="/"
                                                >
                                                      <MenuList
                                                            categories={
                                                                  categories
                                                            }
                                                      />
                                                </MenuItem>
                                                <MenuItem
                                                      title="contact us"
                                                      slug="/contact-us"
                                                />
                                          </ul>
                                    </div>
                              </nav>
                              <div className="toll-free">
                                    <p className="number">
                                          <span>Contact Us: </span>
                                          01-5339555
                                    </p>
                              </div>

                              <MobileMenu categories={categories} />
                        </div>
                  </header>
            </>
      );
};

export default Header;
