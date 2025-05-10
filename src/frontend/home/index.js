import React, { useContext } from "react";
import {
      LatestProjects,
      Blog,
      Banner,
      About,
      Overview,
      TestimonialsCard,
} from "./components";
import References from "./components/references";
import { MetaContext } from "../../store";

const Home = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("home-page");

      return (
            <>
                  <Banner />
                  <About />
                  <LatestProjects />
                  {/* <References /> */}
                  <Overview />
                  {/* <TestimonialsCard /> */}
                  <Blog />
            </>
      );
};

export default Home;
