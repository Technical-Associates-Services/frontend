import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Helmet } from "react-helmet";

const MetaContext = createContext({
      handleSlug: (slug, e) => {},
      meta: [],
});

export const MetaContextProvider = (props) => {
      const [loading, setLoading] = useState(false);
      const [meta, setMeta] = useState([]);
      const [slug, setSlug] = useState("");
      const [plugins, setPlugins] = useState([]);

      const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
      const canonicalUrl = `https://tas.com.np${currentPath === '/' ? '' : currentPath.replace(/\/+$/, '')}`;

      const handleSlug = (slug) => {
            setSlug(slug);
      };

      const loadData = async () => {
            setLoading(true);
            if (slug) {
                  await axios
                        .get(
                              `${process.env.REACT_APP_SECRET_KEY}/api/pages/${slug}`,
                              {
                                    headers: {
                                          apikey: process.env.REACT_APP_API_KEY,
                                    },
                              }
                        )
                        .then((response) => {
                              if (response.data.result === "success") {
                                    setMeta(response.data.page);
                              }
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  setLoading(false);
            }

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/plugins`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setPlugins(response.data.plugin);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
      };

      useEffect(() => {
            loadData();
      }, [currentPath, slug]);

      const context = {
            handleSlug: handleSlug,
            meta: meta,
      };

      const MetaData = () => {
            return (
                  <>
                        {meta.slug === slug ? (
                              <Helmet>
                                    <title>{meta.seo_title || meta.title}</title>
                                    {meta.seo_description && (
                                          <meta
                                                name="description"
                                                content={meta.seo_description}
                                          />
                                    )}
                                    {meta.seo_keyword && (
                                          <meta
                                                name="keywords"
                                                content={meta.seo_keyword}
                                          />
                                    )}
                                    <link
                                          rel="canonical"
                                          href={canonicalUrl}
                                    />
                              </Helmet>
                        ) : null}
                  </>
            );
      };

      return (
            <>
                  <MetaContext.Provider value={context}>
                        <MetaData />

                        {props.children}
                  </MetaContext.Provider>
            </>
      );
};

export default MetaContext;
