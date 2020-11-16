import React from 'react';
import './carousel.css';
import Carousel from 'react-bootstrap/Carousel';

import bart from '../../assets/carousel/bart.jpg';
import oakport from '../../assets/carousel/oakport.jpg';
import ScrollDown from '../scroll-down/scroll-down';

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item>
          <img className="d-block w-100 custome img" src={oakport} alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={bart} alt="Second slide"/>
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  )
}

export default MyCarousel;