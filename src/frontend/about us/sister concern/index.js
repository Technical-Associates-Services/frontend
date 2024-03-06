import React, { useState } from 'react'
import { Container, Row, Col, Collapse, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomTitle from '../../../components/common/CustomTitle'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'
import { ExpandButton } from './styles'

const SisterConcern = () => {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  return (
    <>
      <CustomBreadcrumb title="Sister Concern" subtitle="Sister Concern" />

      <div className="sister-concern">
        <div className="block">
          <Container>
            <Row>
              <Col lg={5}>
                <div className="block__left">
                  <img
                    className="block__logo"
                    src="/images/HT-logo-png-fn2-300x89.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={7}>
                <div className="block__right">
                  <CustomTitle title="Healthcare Technologies Pvt. LTD." />
                  <p className="block__description">
                    Healthcare Technologies deals with Medical Equipment,
                    Medical Instruments, Medical Consumables, Oxygen Therapy
                    Equipment and Personal Healthcare Equipment.
                  </p>

                  <h5
                    className="block__subtitle d-flex gap-5 mt-4 align-items-center"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    Our Major Representations
                    <ExpandButton>
                      <span class="material-symbols-outlined">add</span>
                    </ExpandButton>
                  </h5>

                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <ul>
                        <li>
                          Microlife (Personal Healthcare Equipments and
                          Instruments)
                        </li>
                        <li>Philips Respironics (Respiratory Technology)</li>
                        <li>
                          3M (Infection Control, Critical Care &amp; Infection
                          Control)
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="block">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="block__left">
                  <CustomTitle title="Sigma Technologies Pvt. Ltd.." />
                  <p className="block__description">
                    Sigma Technologies Pvt. Ltd. provides solution for drinking
                    water systems, Filter for hot beverages, Filters for ice
                    cube machines, Filters for post mix, in-line iron removal
                    systems, in-line alkalization and mineralization system ,
                    Solar water heater, Hot water heat pumps, Convector heaters,
                    infrared heaters, Wood fire places, water pressure boosting
                    pumps, Electric water geyser, Air purifier, De-humidifiers,
                    human safety products, road safety products, floor safety
                    products.
                  </p>
                  <h5
                    className="block__subtitle d-flex gap-5 mt-4 align-items-center"
                    onClick={() => setOpen1(!open1)}
                    aria-controls="example-collapse-text1"
                    aria-expanded={open1}
                  >
                    Major Representations
                    <ExpandButton>
                      <span class="material-symbols-outlined">add</span>
                    </ExpandButton>
                  </h5>

                  <Collapse in={open1}>
                    <div id="example-collapse-text1">
                      <ul>
                        <li>3M</li>
                        <li>Aqua Filter</li>
                        <li>Naffco</li>
                        <li>Hochiki</li>
                        <li>Danfoss</li>
                        <li>Dr Care</li>
                        <li>Solarflame</li>
                        <li>The Heating Expert</li>
                        <li>Dantherm</li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col lg={5}>
                <div className="block__right w-100 h-100">
                  <img
                    className="block__logo"
                    src="/images/sigma1-e1627452743571.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="block">
          <Container>
            <Row>
              <Col lg={5}>
                <div className="block__left">
                  <img className="block__logo" src="/images/sun.png" alt="" />
                </div>
              </Col>
              <Col lg={7}>
                <div className="block__right">
                  <CustomTitle title="Sun Medical Concern Pvt. LTD." />
                  <p className="block__description">
                    It is one of the leading business houses, which provide
                    solutions for Healthcare Sectors. It deals with Medical
                    Equipment, Medical Consumables, specialty healthcare
                    solutions etc.
                  </p>
                  <h5
                    className="block__subtitle d-flex gap-5 mt-4 align-items-center"
                    onClick={() => setOpen2(!open2)}
                    aria-controls="example-collapse-text1"
                    aria-expanded={open2}
                  >
                    Major Representations
                    <ExpandButton>
                      <span class="material-symbols-outlined">add</span>
                    </ExpandButton>
                  </h5>
                  <Collapse in={open2}>
                    <div id="example-collapse-text1">
                      <ul>
                        <li>GE Healthcare(Medical Equipments)</li>
                        <li>Paramount Beds (Hospital Furnitures)</li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="block">
          <Container>
            <Row>
              <Col lg={7}>
                <div className="block__left">
                  <CustomTitle title="Future Techniques  Pvt. Ltd.." />
                  <p className="block__description">
                    Future Techniques is dedicated to providing top-notch
                    turnkey systems and stainless steel components, drawing on
                    our wealth of experience from over a thousand installations
                    globally. Our customized units are designed to meet your
                    specific requirements, offering a comprehensive suite of
                    services, including expert advice, meticulous planning,
                    precise engineering, thorough supervision, and specialized
                    training.
                  </p>
                  <h5
                    className="block__subtitle d-flex gap-5 mt-4 align-items-center"
                    onClick={() => setOpen3(!open3)}
                    aria-controls="example-collapse-text1"
                    aria-expanded={open3}
                  >
                    Major Representations
                    <ExpandButton>
                      <span class="material-symbols-outlined">add</span>
                    </ExpandButton>
                  </h5>
                  <Collapse in={open3}>
                    <div id="example-collapse-text1">
                      <ul>
                        <li>GE Healthcare(Medical Equipments)</li>
                        <li>Paramount Beds (Hospital Furnitures)</li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col lg={5}>
                <div className="block__right w-100 h-100">
                  <img
                    className="block__logo"
                    src="/images/future.png"
                    alt=""
                    width={'250'}
                    height={'auto'}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default SisterConcern
