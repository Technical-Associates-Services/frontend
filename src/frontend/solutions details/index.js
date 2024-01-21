import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'
import Accordion from 'react-bootstrap/Accordion'
import { solutionsData } from '../../data/data'

const SolutionsDetails = () => {
  return (
    <>
      <CustomBreadcrumb title="Solution Single" subtitle="solution single" />

      <Container>
        <div className="solutions-detail">
          <Row>
            <Col lg={4}>
              <div className="left">
                <ul className="left__menu">
                  <li className="left__item">
                    <Link to="">Hospitality Solutions</Link>
                  </li>
                  <li className="left__item">
                    <Link to="">Industrial Solutions</Link>
                  </li>
                  <li className="left__item">
                    <Link to="">Residential Solutions</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={8}>
              <div className="right">
                <img className="right__image" src="/images/img-1.jpg" alt="" />
                <div className="right__title">
                  <h3>Hospitality Solutions</h3>
                  <div className="download">
                    <Link to="">
                      <i class="ri-file-word-line"></i>
                      Download Doc
                    </Link>
                    <Link to="">
                      <i class="ri-file-pdf-2-line"></i>
                      Download PDF
                    </Link>
                  </div>
                </div>
                <div className="right__details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi iste accusamus voluptates, aliquid blanditiis ut.
                    Provident vitae ullam quibusdam quae libero dolores, ratione
                    vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                    iste accusamus voluptates, aliquid blanditiis ut. Provident
                    vitae ullam quibusdam quae libero dolores, ratione vel
                    cupiditate sunt amet? Sit, incidunt, laboriosam!
                  </p>

                  <Accordion>
                    {solutionsData.map((data, index) => (
                      <Accordion.Item eventKey={index}>
                        <Accordion.Header>
                          <i class="ri-add-line"></i>
                          <span>{data.itemName}</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {data.itemList?.map((list, index) => (
                              <li key={index}>{list.listName}</li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi iste accusamus voluptates, aliquid blanditiis ut.
                    Provident vitae ullam quibusdam quae libero dolores, ratione
                    vel cupiditate sunt amet? Sit, incidunt, laboriosam!Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                    iste accusamus voluptates, aliquid blanditiis ut. Provident
                    vitae ullam quibusdam quae libero dolores, ratione vel
                    cupiditate sunt amet? Sit, incidunt, laboriosam!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default SolutionsDetails
