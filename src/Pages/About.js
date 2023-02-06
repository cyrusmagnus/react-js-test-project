import React, { Component } from 'react'
import { Container, Nav, Row, Tab } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaulActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
