import React from 'react';
import './App.css';
//components
import MyNavbar from "./components/navbar/navbar";
import MyCarousel from './components/carousel/carousel';
import TitleMsg from './components/title-msg/title-msg';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
//pages
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/contact';

import Container from 'react-bootstrap/Container';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Bgimage from './assets/parallax/bg.jpg';


const App = () => {
  return (
  <div className='App' style={{ position: 'relative' }}>
    <MyCarousel />
    <TitleMsg />
    <MyNavbar />

    <div>
      <Parallax 
        blur={{ min: -30, max: 30 }} 
        bgImage={Bgimage} 
        bgImageAlt="geometric" 
        strength={-200}
      >
        <div>
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </div>
      </Parallax>
    </div>

    <div>
      <Container className='container-box rounded'>
        <Fade duration={500}>
          <Skills />
        </Fade>
      </Container>
    </div>

    <div>
      <Container className='container-box rounded'>
        <Fade duration={500}>
          <hr />
          <Projects />
        </Fade>
      </Container>
    </div>

    <div>
      <Container className='container-box rounded'>
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>
    </div>

    <hr />
    <Footer />
  </div>);
};

export default App;