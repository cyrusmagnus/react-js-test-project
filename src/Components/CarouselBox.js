import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import SliderImg_1 from '../assets/slider/1.jpeg';
import SliderImg_2 from '../assets/slider/2.jpg';

console.log(SliderImg_1)

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={SliderImg_1}
            alt='Slider'
          />
          <Carousel.Caption>
            <h1>Image</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={SliderImg_2}
            alt='Slider'
          />
          <Carousel.Caption>
            <h1>Image</h1>
            <p>
              lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
