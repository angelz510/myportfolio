import React from 'react';
import './carousel.css';

import Carousel from 'react-bootstrap/Carousel';
import ScrollDown from '../scroll-down/scroll-down';

import oakport from '../../assets/carousel/oakport.webp';
import wireframes from '../../assets/carousel/wireframes.webp';
import keyboard from '../../assets/carousel/keyboard.webp';


const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={oakport} alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={wireframes} alt="Second slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={keyboard} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  )
}

export default MyCarousel;