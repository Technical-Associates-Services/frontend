import { sanitizeHtml } from "../../utils/sanitize";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import CustomTitle from "../../components/common/CustomTitle";
import { MetaContext } from "../../store";

const ReferencesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const metaCtx = useContext(MetaContext);
  if (metaCtx?.handleSlug) {
    metaCtx.handleSlug("references");
  }

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SECRET_KEY}/api/references`
        );
        if (
          response.data?.result === "success" &&
          Array.isArray(response.data?.categories)
        ) {
          setCategories(response.data.categories);
        }
      } catch (error) {
        console.error("Error fetching references:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReferences();
  }, []);

  return (
    <>
      <CustomBreadcrumb title="References" subtitle="References" />
      <Container>
        <div className="references-page">
          <div className="references-page__content">
            <CustomTitle title="Our Project References" />
            <p>
              We take pride in our track record of delivering high-quality engineering and utility solutions across commercial, industrial, and residential sectors in Nepal. Below are some of our esteemed project references.
            </p>
          </div>

          {categories && categories.length > 0 ? (
            categories.map((cat, idx) => (
              <div key={idx} className="mb-5">
                <CustomTitle title={cat.title} />
                <Row className="g-4 mt-2">
                  {cat.references && cat.references.length > 0 ? (
                    cat.references.map((item, rIdx) => (
                      <Col lg={4} md={6} key={rIdx}>
                        <div
                          style={{
                            background: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                            overflow: "hidden",
                            border: "1px solid #eaeaea",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover"
                              }}
                            />
                          )}
                          <div style={{ padding: "1.2rem", flex: 1 }}>
                            <h5 style={{ fontWeight: 600, color: "#222", marginBottom: "0.5rem" }}>
                              {item.title}
                            </h5>
                            {item.description && (
                              <div
                                style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}
                                dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.description) }}
                              />
                            )}
                          </div>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <Col>
                      <p style={{ color: "#888", fontStyle: "italic" }}>No references available in this category.</p>
                    </Col>
                  )}
                </Row>
              </div>
            ))
          ) : (
            !loading && (
              <p style={{ color: "#777", marginTop: "1rem" }}>
                Our portfolio of client projects and installations is continuously expanding.
              </p>
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default ReferencesPage;
