import React from 'react';
import './about.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Profile from '../../assets/profile/Profile.jpg';

const About = () => {
  return (
    <div id='about'>
      <div className='about'>
      <h1 className='pt-3 text-center font-details pb-3'>About Me</h1>
      <Container>
        <Row className='pt-3 pb-5 align-items-center'>

          {/* Profile Photo */}
          <Col xs={12} md={6}>
            <Row className='justify-content-center mb-2 mr-2'>
              <Image className='profile justify-content-end' alt='profile' src={Profile} thumbnail fluid/>
            </Row>
          </Col>

          {/* Description */}
          <Col xs={12} md={6}>
            <Row className='align-items-start p-2 my-details rounded'>
              Hi! Im <strong>&nbsp;Angel Rodriguez</strong>
              <br />A software engineer who enjoys full-stack development.
              <br />I am naturally curious how technologies work and how they can create an impact in our community.
              <br />One of the things I enjoy is making thoughful, functional, and intuative web applications.
              <br />I've build applications using Node.js, React, Django, and Express.
              <br />Before development I was working in community, career coaching system-involved youth and guiding them toward career opportunities.
              <br />When I'm not coding, I am playing soccer but due to stay at home orders I am often exploring Hyrule or Galar.
            </Row>

            {/* Buttons Row */}
            <Row>
              <Col className='d-flex justify-content-center flex-wrap'>
                <div>
                  <a href="#contact">
                    <Button className='m-2' variant="outline-primary">Contact</Button>
                  </a>
                </div>

                <div>
                  <a href='https://www.linkedin.com/in/arodriguezz/'>
                    <Button className='m-2' variant="outline-primary">Resume</Button>
                  </a>
                </div>

                <div>
                  <a href='https://www.linkedin.com/in/arodriguezz/'>
                    <Button className='m-2' variant="outline-primary">LinkedIn</Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  )
}

export default About;