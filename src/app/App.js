import React from "react";
import "../styles/main.sass";
import "remixicon/fonts/remixicon.css";
import PublicRouter from "../router/PublicRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer, Header } from "../frontend/home/components";
import ScrollToTop from "../ScrollToTop";
import ScrollButton from "../components/ScrollButton";
import Enquiry from "../components/EnquiryUs";
import SEO from "../seo";
import { MetaContextProvider } from "../store/MetaContext";
import { Toaster } from "react-hot-toast";

const App = () => {
      return (
            <>
                  <MetaContextProvider>
                        <Toaster position="top-right" />
                        <Router>
                              <SEO />
                              <ScrollToTop />
                              <ScrollButton />
                              <Enquiry />
                              <Header />
                              <PublicRouter />
                              <Footer />
                        </Router>
                  </MetaContextProvider>
            </>
      );
};

export default App;
