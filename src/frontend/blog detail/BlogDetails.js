import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'

const BlogDetails = () => {
  return (
    <>
      <CustomBreadcrumb title="Blog Single Page 1" subtitle="Blog" />

      <Container>
        <Row>
          <Col lg={8}>
            <div className="leftside">
              <img className="leftside__img" src="/images/img-5.jpg" alt="" />
              <div className="leftside__description--holder">
                <h5>
                  Seymour Whyte employs 475 people and generated revenue of
                  A$433 million in the fiscal year ended on 30 June 2017.
                  Founded in 1987, Seymour Whyte is a well-known Australian
                  company operating in the fields of civil engineering.
                </h5>
                <ul>
                  <li>Acquisition of 100% of Seymour Whyte’s shares</li>
                  <li>2017 revenue of A$433 million</li>
                  <li>VINCI Construction expansion in the Pacific area</li>
                </ul>
                <p>
                  On 23 October 2017, VINCI Construction finalised the
                  acquisition of the Seymour Whyte company based in Queensland.
                  The acquisition was finalised followed purchase of 100% of the
                  shares of the company previously listed on the Sydney stock
                  exchange.
                </p>
                <p>
                  Seymour Whyte employs 475 people and generated revenue of
                  A$433 million in the fiscal year ended on 30 June 2017.
                  Founded in 1987, Seymour Whyte is a well-known Australian
                  company operating in the fields of civil engineering,
                  earthworks and utilities, notably for the construction of
                  roads, bridges and water and pipeline infrastructure.
                </p>
                <blockquote>
                  “Seymour Whyte is a company that resembles us, with a strong
                  entrepreneurial culture. This acquisition will enable us to
                  expand synergies with VINCI Construction’s existing expertise
                  in Australia and more broadly in the Pacific area,” said
                  Jérôme Stubler, Chairman and Chief Executive Officer of VINCI
                  Construction.
                </blockquote>
                <p>
                  This acquisition, added to that of HEB Construction in New
                  Zealand in 2015, strengthens VINCI Construction’s operations
                  in the Pacific area, where it generated 2016 revenue of €549
                  million, employs 2,000 people and delivers wide-ranging
                  expertise in the highway construction, civil engineering, soil
                  reinforcement and oil & gas sectors.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="rightside">
              <h2>related feed</h2>

              <div className="customcard">
                <div className="customcard__content">
                  <Link to="">
                    <img
                      className="customcard__image"
                      src="/images/img-2.jpg"
                      alt="blog"
                    />
                  </Link>
                  <div className="customcard__title">
                    <p>
                      <Link to="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Link>
                    </p>
                    <div className="date">
                      <i class="ri-calendar-2-line"></i>
                      <span>09 Oct, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customcard">
                <div className="customcard__content">
                  <Link to="">
                    <img
                      className="customcard__image"
                      src="/images/img-7.jpg"
                      alt="blog"
                    />
                  </Link>
                  <div className="customcard__title">
                    <p>
                      <Link to="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Link>
                    </p>
                    <div className="date">
                      <i class="ri-calendar-2-line"></i>
                      <span>09 Oct, 2023</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customcard">
                <div className="customcard__content">
                  <Link to="">
                    <img
                      className="customcard__image"
                      src="/images/img-3.jpg"
                      alt="blog"
                    />
                  </Link>
                  <div className="customcard__title">
                    <p>
                      <Link to="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </Link>
                    </p>
                    <div className="date">
                      <i class="ri-calendar-2-line"></i>
                      <span>09 Oct, 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default BlogDetails
