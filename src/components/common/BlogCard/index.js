import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";

const BlogCard = ({ data }) => {
      return (
            <>
                  <div className="blog__card">
                        <Link to={`/blogs/${data.slug}`} >
                              <div
                                    className="blog__img"
                                    style={{
                                          backgroundImage: `url(${data.image})`,
                                    }}
                              >
                                    <div className="time">
                                          <h4>{data?.date}</h4>
                                    </div>
                              </div>
                        </Link>
                        <div className="blog__title--section">
                              <p className="title-header">
                                    By <Link to={`/`} className="blog__link">{data?.category_name}</Link>
                              </p>

                              <Link to={`/blogs/${data.slug}`}>
                                    <div className="blog__title">
                                          {data?.title}
                                    </div>
                              </Link>
                              <Link to={`/blogs/${data?.slug}`}>
                                    <CustomButton btnData="read more" />
                              </Link>
                        </div>
                  </div>
            </>
      );
};

export default BlogCard;
