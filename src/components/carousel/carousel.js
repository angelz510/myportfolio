import React from 'react';
import './carousel.css';

import Carousel from 'react-bootstrap/Carousel';
import ScrollDown from '../scroll-down/scroll-down';

import oakport from '../../assets/carousel/oakport.jpg';
import wireframes from '../../assets/carousel/wireframes.jpg';
import keyboard from '../../assets/carousel/keyboard.jpg';


const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item>
          <img className="d-block w-100 custome img" src={oakport} alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={wireframes} alt="Second slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={keyboard} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  )
}

export default MyCarousel;