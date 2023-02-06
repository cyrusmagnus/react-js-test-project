import React, { Component } from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'

import image1 from '../assets/about-tab/1.jpg'
import image2 from '../assets/about-tab/2.jpg'
import image3 from '../assets/about-tab/3.jpg'
import image4 from '../assets/about-tab/4.jpg'
import image5 from '../assets/about-tab/5.jpg'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                  <img src={image1} className='img-fluid' alt='about-tab'/>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit deleniti optio unde recusandae ratione excepturi, 
                    laboriosam aliquam vero tempore provident earum illum ipsam 
                    corporis molestiae!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src={image2} className='img-fluid' alt='about-tab'/>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit deleniti optio unde recusandae ratione excepturi, 
                    laboriosam aliquam vero tempore provident earum illum ipsam 
                    corporis molestiae!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src={image3} className='img-fluid' alt='about-tab'/>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit deleniti optio unde recusandae ratione excepturi, 
                    laboriosam aliquam vero tempore provident earum illum ipsam 
                    corporis molestiae!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img src={image4} className='img-fluid' alt='about-tab'/>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit deleniti optio unde recusandae ratione excepturi, 
                    laboriosam aliquam vero tempore provident earum illum ipsam 
                    corporis molestiae!
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img src={image5} className='img-fluid' alt='about-tab'/>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Suscipit deleniti optio unde recusandae ratione excepturi, 
                    laboriosam aliquam vero tempore provident earum illum ipsam 
                    corporis molestiae!
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
