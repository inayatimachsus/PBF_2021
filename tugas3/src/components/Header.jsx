import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'react-bootstrap';

export default class Header extends Component{
  render(){
    return(
      <div className="Header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Profile</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    )
  }
}