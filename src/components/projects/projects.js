import React from 'react';
import './projects.css';


import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const Projects = () => {
  return (
    <div id='projects' className='pt-3 pb-3'>
      <h1 className='text-center font-details-b pb-4'>Projects</h1>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>
              <a href='https://github.com/angelz510/Hangry'>
                Hangry!
              </a>
            </Card.Title>
            <Card.Text>
              Returns nearest food options depending on hunger level. 
              <br />Level 1 and 2 returns places that deliver.
              <br />Level 3 and 4, places that are within walking distance as well as deliver.
              <br />Level 5, places within walking distance. 
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">HTML, CSS, JS, Mongoose, Node, Bootstrap, MongoDB</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Gif Machine</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Real time API calls</small>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>
              <a href='https://pages.git.generalassemb.ly/angelz510/Project-0-Rock-Paper-Scissors/'>
                Rock, Paper Scissors
              </a>
            </Card.Title>
            <Card.Text>
              Simple game of Rock, Paper, Scissors where you play versus the computer.
              <br/>Best out of 3 wins.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">HTML, JS, CSS</small>
          </Card.Footer>
        </Card>
      </CardDeck>
<br />
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>
              <a href='https://git.generalassemb.ly/angelz510/dreamlink-frontend'>
                DreamLink
              </a>
            </Card.Title>
            <Card.Text>
              Beta project for community. DreamLink is a private scholarship hub for undocumented students.
              <br />Students can sign in/sign up.
              <br />Admin have full CRUD for scholarships.
              <br />Scholarships are seeded that from list of scholarships provided by California non-profits.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">MERN stack, Materialize, real time API calls</small>
          </Card.Footer>
        </Card>

      </CardDeck>
    </div>
  )
}

export default Projects;