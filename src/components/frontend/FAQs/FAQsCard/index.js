import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import CustomTitle from '../../../common/CustomTitle'
import { faqsData } from '../../../../data/data'

const FAQsCard = ({ order, title }) => {
  return (
    <>
      <div className="custom-wrapper">
        <Row className="mx-0">
          {order ? (
            <Col lg={6} style={{ order: '2' }}>
              <div className="left">
                <img className="left__image" src="/images/img-7.jpg" alt="" />
              </div>
            </Col>
          ) : (
            <Col lg={6}>
              <div className="left">
                <img className="left__image" src="/images/img-7.jpg" alt="" />
              </div>
            </Col>
          )}

          <Col lg={6} className="px-0">
            <div className="right">
              <CustomTitle title={title} />
              <Accordion defaultActiveKey="0">
                {faqsData.map((data, index) => (
                  <Accordion.Item eventKey={data.eventKey} key={index}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.body}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default FAQsCard
