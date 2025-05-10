import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../../components/common/BlogCard";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import axios from "axios";
import { MetaContext } from "../../store";

const BlogAndNews = () => {
      const [loading, setLoading] = useState(false);
      const [blogs, setBlogs] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("blogs");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/blogs`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        setBlogs(response.data.blogs);
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <CustomBreadcrumb title="blogs" subtitle="blogs" />

                  <Container>
                        <div
                              className="blogs"
                              style={{ paddingBottom: "6rem" }}
                        >
                              <Row className="g-4">
                                    {!loading ? (
                                          blogs?.map((item, index) => (
                                                <Col lg={4}>
                                                      <BlogCard
                                                            data={item}
                                                            index={index}
                                                      />
                                                </Col>
                                          ))
                                    ) : (
                                          <div className="text-center py-5">
                                                <Spinner />
                                          </div>
                                    )}
                              </Row>
                        </div>
                  </Container>
            </>
      );
};

export default BlogAndNews;
