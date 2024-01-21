import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomTitle from '../../../components/common/CustomTitle'
import CustomBreadcrumb from '../../../components/common/CustomBreadcrumb'

const SisterConcern = () => {
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
                  <CustomTitle title="Healthcare Technologies P. LTD." />
                  <p className="block__description">
                    Healthcare Technologies deals with Medical Equipment,
                    Medical Instruments, Medical Consumables, Oxygen Therapy
                    Equipment and Personal Healthcare Equipment.
                  </p>
                  <h5 className="block__subtitle">
                    Major representations are:
                  </h5>
                  <ul>
                    <li>
                      Microlife (Personal Healthcare Equipments and Instruments)
                    </li>
                    <li>Philips Respironics (Respiratory Technology)</li>
                    <li>
                      3M (Infection Control, Critical Care &amp; Infection
                      Control)
                    </li>
                  </ul>
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
                  <h5 className="block__subtitle">
                    Major representations are:
                  </h5>
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
              </Col>
              <Col lg={5}>
                <div className="block__right">
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
      </div>
    </>
  )
}

export default SisterConcern
