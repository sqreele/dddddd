import React from 'react'
import{Navbar,Nav} from 'react-bootstrap'
import {Link} from 'gatsby';
export default(props)=>(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
 
      <Nav.Link as={Link} to="/About" >About us</Nav.Link>
     
      <Nav.Link as={Link} to="/Contact" >Contact</Nav.Link>
     
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
)