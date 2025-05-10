import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import CustomBreadcrumb from "../../components/common/CustomBreadcrumb";
import axios from "axios";

const BlogDetails = () => {
      const [loading, setLoading] = useState(false);
      const [blogs, setBlogs] = useState([]);
      const [blog, setBlog] = useState([]);
      const { blogId } = useParams();

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/blogs/${blogId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        setBlogs(response.data.blogs);
                        setBlog(response.data.blog);
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [blogId]);

      return (
            <>
                  <CustomBreadcrumb
                        title={blog?.title}
                        subtitle="Blog"
                        subLink="/blogs"
                  />

                  <Container className="pb-5 mb-5">
                        <Row>
                              <Col lg={8}>
                                    <div className="leftside">
                                          <img
                                                className="leftside__img"
                                                src={blog?.image}
                                                alt={blog?.title}
                                          />
                                          <h2>{blog?.title}</h2>
                                          <div
                                                className="leftside__description--holder"
                                                dangerouslySetInnerHTML={{
                                                      __html: blog?.description,
                                                }}
                                          ></div>
                                    </div>
                              </Col>
                              <Col lg={4}>
                                    <div className="rightside">
                                          <h2>related feed</h2>
                                          {blogs?.map((item, index) => (
                                                <div className="customcard">
                                                      <div className="customcard__content">
                                                            <Link to="">
                                                                  <img
                                                                        className="customcard__image"
                                                                        src={
                                                                              item?.image
                                                                        }
                                                                        alt={
                                                                              item?.title
                                                                        }
                                                                  />
                                                            </Link>
                                                            <div className="customcard__title">
                                                                  <p>
                                                                        <Link
                                                                              to={`/blogs/${item?.slug}`}
                                                                        >
                                                                              {
                                                                                    item?.title
                                                                              }
                                                                        </Link>
                                                                  </p>
                                                                  <div className="date">
                                                                        <i class="ri-calendar-2-line"></i>
                                                                        <span>
                                                                              {
                                                                                    item?.date
                                                                              }
                                                                        </span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};
export default BlogDetails;
