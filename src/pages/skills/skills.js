import React from 'react';
import './skills.css';
import {skills} from './skills-data';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Skills = () => {
  return (
    <div id='skills' className='pt-3 pb-3'>
      <h1 className='text-center font-details-b pb-4'>Technologies Used</h1>
      <CardDeck>
        <Row className='d-flex justify-content-around'>
        {console.log(skills)}
        </Row>
      </CardDeck>
    </div>
  )
}

export default Skills;