import React, { Component } from 'react';
import { Card, Container, Button, Row } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

import image1 from '../assets/blog-home/1.jpg';
import image2 from '../assets/blog-home/2.jpg';
import image3 from '../assets/blog-home/3.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our Team</h2>
          <Row  md={3} className='m-4'>
            <Card>
              <Card.Img
                variant='top'
                src={image1}
                alt='blog-home'
              />
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  Lorem lorem Lorem lorem Lorem lorem Lorem lorem 
                  Lorem lorem Lorem lorem Lorem lorem Lorem lorem
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant='top'
                src={image2}
                alt='blog-home'
              />
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  Lorem lorem Lorem lorem Lorem lorem Lorem lorem 
                  Lorem lorem Lorem lorem Lorem lorem Lorem lorem
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant='top'
                src={image3}
                alt='blog-home'
              />
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  Lorem lorem Lorem lorem Lorem lorem Lorem lorem 
                  Lorem lorem Lorem lorem Lorem lorem Lorem lorem
                </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
      
    )
  }
}
