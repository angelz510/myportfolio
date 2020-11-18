import React from 'react';
import './App.css';
//components
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';
import TitleMsg from './components/title-msg/title-msg';
//pages
import About from './pages/about/about';
import Skills from './pages/skills/skills';

import Container from 'react-bootstrap/Container';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Bgimage from './assets/parallax/bg.jpg';

const App = () => {
  return (
  <div className='App' style={{ position: 'relative' }}>
    <MyNavbar />
    <MyCarousel />
    <TitleMsg />

    <div>
      <Parallax 
        blur={{ min: -30, max: 30 }} 
        bgImage={Bgimage} 
        bgImageAlt="geometric" 
        strength={-200}
      >
        <Container className='container-box rounded'>
          <Fade duration={1000}>
            <About />
          </Fade>
        </Container>
      </Parallax>
    </div>

    <div>
      <Skills />
    </div>
  </div>);
};

export default App;