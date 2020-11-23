import React from 'react';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const MyNavbar = () => {
  return (
    <>
      <Navbar fixed="top" 
      expand="md" 
      bg="dark" 
      variant="dark" 
      className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">Angel Rodriguez</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar;