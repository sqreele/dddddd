import React from 'react'
import{Navbar,Nav} from 'react-bootstrap'
import {Link} from 'gatsby';
export default(props)=>(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/" >
       <b className="text-dark">home</b>
      
      </Nav.Link>
 
      <Nav.Link as={Link} to="/About" > <b className="text-dark">About us</b></Nav.Link>
     
      <Nav.Link as={Link} to="/Contact" ><b className="text-dark">Contact</b></Nav.Link>
     
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)