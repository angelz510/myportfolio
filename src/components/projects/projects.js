import React from 'react';
import './projects.css';

import hangryimg from '../../assets/projects/hangryimg.png';
import rps from '../../assets/projects/rps.png';
import dreamlink from '../../assets/projects/dreamlink.png';
import budgetpls from '../../assets/projects/budgetpls.png';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  return (
    <div id='projects' className='pt-3 pb-3'>
      <h1 className='text-center font-details-b pb-3'>Projects</h1>
      <CardDeck>

      <Card>
          <a href='https://budget-pls.herokuapp.com/' target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src={budgetpls} className='budgetImg' />
          </a>
          <Card.Body>
            <Card.Title align='center'>
              Budget Pls
            </Card.Title>
            <Card.Text>
              Budgeting App. User can create profile. User can create, search, edit, remove expenses.
              <br/>Used firebase and incorporated google login and authentication.
              <br/>Tested components using jest and styled with Sass.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='card-footer'>
            <small className="text-muted">Tech used: JS, Sass, React with Redux, Firebase.</small>
            <a href='https://budget-pls.herokuapp.com/' target="_blank" rel="noopener noreferrer">
              <Button className='m-2 btn-sm' variant="outline-dark">Check it out!</Button>
            </a>
            <a href='https://github.com/angelz510/expensify-app' target="_blank" rel="noopener noreferrer">
              <Button className='m-2 btn-sm' variant="outline-dark">Source Code</Button>
            </a>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={hangryimg} className='projectImg' />
          <Card.Body>
            <Card.Title align='center'>
              Hangry!
            </Card.Title>
            <Card.Text>
              Returns nearest food options depending on hunger level. 
              <br />Level 1 and 2 returns places that deliver.
              <br />Level 3 and 4, places that are within walking distance as well as deliver.
              <br />Level 5, places within walking distance. 
            </Card.Text>
          </Card.Body>
          <Card.Footer className='card-footer'>
            <small className="text-muted">Tech used: HTML, CSS, JS, Mongoose, Node, Bootstrap, MongoDB.</small>
            <a href='https://github.com/angelz510/Hangry' target="_blank" rel="noopener noreferrer">
              <Button className='m-2 btn-sm' variant="outline-dark" align="center">Source Code</Button>
            </a>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={dreamlink} className='projectImg' />
          <Card.Body>
            <Card.Title align='center'>
              DreamLink
            </Card.Title>
            <Card.Text>
              Beta project for community. DreamLink is a private scholarship hub for undocumented students.
              <br />Students can sign in/sign up.
              <br />Admin have full CRUD for scholarships.
              <br />Scholarships are seeded that from list of scholarships provided by California non-profits.
            </Card.Text>
          </Card.Body>
          <Card.Footer className='card-footer'>
            <small className="text-muted">Tech used: React.js, MongoDB, Materialize, real time API calls.</small>
            <a href='https://git.generalassemb.ly/angelz510/dreamlink-frontend' target="_blank" rel="noopener noreferrer">
              <Button className='m-2 btn-sm' variant="outline-dark">Source Code</Button>
            </a>
          </Card.Footer>
        </Card>

        <Card>
          <a href='https://pages.git.generalassemb.ly/angelz510/Project-0-Rock-Paper-Scissors/' target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src={rps} className='rpsImg' />
          </a>
          <Card.Body>
            <Card.Title align='center'>
              Rock, Paper Scissors
            </Card.Title>
            <Card.Text>
              Simple game of Rock, Paper, Scissors where you play versus the computer.
              <br/>Best out of 3 wins.
              <br /><strong>Click image to play!</strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='card-footer'>
            <small className="text-muted">Tech used: HTML, JS, CSS.</small>
            <a href='https://github.com/angelz510/Project-0-RPS' target="_blank" rel="noopener noreferrer">
              <Button className='m-2 btn-sm' variant="outline-dark">Source Code</Button>
            </a>
          </Card.Footer>
        </Card>
      </CardDeck>
<br />
      <CardDeck>
        {/* <Card>
          <Card.Img variant="top" src="holder.js/100px160" className='projectImg' />
          <Card.Body>
            <Card.Title align='center'>Gif Machine</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Real time API calls</small>
          </Card.Footer>
        </Card> */}

      </CardDeck>
    </div>
  )
}

export default Projects;