import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogDetails from "../frontend/blog_detail/BlogDetails";
import Home from "../frontend/home";
import Contact from "../frontend/contact/Contact";
import BlogAndNews from "../frontend/blog_and_news";
import AboutTas from "../frontend/about_us/about_tas";
import OurAssociation from "../frontend/about_us/our_associations";
import SisterConcern from "../frontend/about_us/sister_concern";
import FAQs from "../frontend/FAQs";
import Services from "../frontend/our_services";
import Solutions from "../frontend/solutions";
import SolutionsDetails from "../frontend/solutions details";
import WaterPumps from "../frontend/product details/water pumps";
import ReferencesPage from "../frontend/references";
import TermsAndCondition from "../frontend/terms_and_conditions";
import PrivacyPolicy from "../frontend/privacy_policy";
import HeatExchangerPage from "../frontend/product details/heat-exchanger-nepal";

const PublicRouter = () => {
      return (
            <>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/preview/product" element={
                              <React.Suspense fallback={<div>Loading Preview...</div>}>
                                    {React.createElement(React.lazy(() => import('../app/ProductPreview')))}
                              </React.Suspense>
                        } />

                        <Route path="/blogs" element={<BlogAndNews />} />
                        <Route
                              path="/blogs/:blogId"
                              element={<BlogDetails />}
                        />

                        <Route path="/about-us" element={<AboutTas />} />
                        <Route
                              path="/associations"
                              element={<OurAssociation />}
                        />
                        <Route
                              path="/sister-concern"
                              element={<SisterConcern />}
                        />
                        <Route path="/faqs" element={<FAQs />} />
                        <Route path="/services" element={<Services />} />

                        {/* Solution */}
                        <Route
                              path="/solutions/:solutionId"
                              element={<SolutionsDetails />}
                        />
                        <Route path="/solutions" element={<Solutions />} />

                        {/* References */}
                        <Route
                              path="/references"
                              element={<ReferencesPage />}
                        />

                        <Route
                              path="product/:productId"
                              element={<WaterPumps />}
                        />

                        {/* <Route
                              path="/product/heat-exchanger-nepal"
                              element={<HeatExchangerPage />}
                        /> */}

                        {/* Privacy Policy */}
                        <Route
                              path="/privacy-policy"
                              element={<PrivacyPolicy />}
                        />

                        {/* Terms & Condition */}
                        <Route
                              path="/terms-and-condition"
                              element={<TermsAndCondition />}
                        />
                  </Routes>
            </>
      );
};

export default PublicRouter;
