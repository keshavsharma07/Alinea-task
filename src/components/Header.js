import React, { useState } from 'react';
import './Header.css'
import {
  Collapse,
  Navbar,
  FormControl,
  NavbarBrand,
  Nav,
  NavDropdown,
  Form,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'react-bootstrap';

const Header = (props) => {
  

  return (
    <div className="col-12">
      <div className="row">
    <Navbar bg="light" expand="lg" className="navbar" fixed="top" >
  <Navbar.Brand  className="logo" href="#home"><img
        src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno%402x.png"
        width="150"
        height="57"
        className="logo"
        alt="OnJuno"
      /></Navbar.Brand>
      <pre>  </pre>
      <br></br>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" ><p className="text">Home</p></Nav.Link> <pre>   </pre>
     
      <NavDropdown title="Company" id="basic-nav-dropdown" className="text2">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> <pre>   </pre>

        {/* //drop2 */}

        <NavDropdown title="Learn" id="basic-nav-dropdown" className="text">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> <pre>   </pre>

      {/* drop3 */}


      <NavDropdown title="Legal" id="basic-nav-dropdown" className="text">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
   
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> <pre>                                                    </pre>

      <Form inline>
      <Button variant="outline-light">Login</Button><pre>  </pre>
      <Button variant="outline-light">Login</Button>
</Form>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div>
</div>
  );
}

export default Header;