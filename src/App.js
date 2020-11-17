import React from 'react';
import './App.css';
//components
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';
import TitleMsg from './components/title-msg/title-msg';
//pages
import About from './pages/about/about';

import Container from 'react-bootstrap/Container';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';

const App = () => {
  return (
  <div className='App' style={{ position: 'relative' }}>
    <MyNavbar />
    <MyCarousel />
    <TitleMsg />

    <div>
      <Parallax 
        blur={{ min: -1000, max: 1000 }} 
        bgImage={require("./assets/parallax/bg.jpg")} 
        bgImageAlt="geometric" 
        strength={-200}
      >
        <Container className='container-box rounded'>
          <Fade duration={500}>
            <About />
          </Fade>
        </Container>
      </Parallax>
    </div>
  </div>);
};

export default App;