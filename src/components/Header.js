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
  NavbarText, Card
} from 'react-bootstrap';

const Header = (props) => {


  return (
    <div className="col-12">
      <div className="row">
        <Navbar bg="light" expand="sm" className="navbar" fixed="top" >
          <Navbar.Brand className="logo" href="#home"><img
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
              <div className="drop">
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Newsroom</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">Partners</NavDropdown.Item>
                </div>
              </NavDropdown> <pre>   </pre>

              {/* //drop2 */}

              <NavDropdown title="Learn" id="basic-nav-dropdown" className="text">
                <div className="drop">
                  <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Guides</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Help Center</NavDropdown.Item>
                </div>
                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown> <pre>   </pre>

              {/* drop3 */}


              <NavDropdown title="Legal" id="basic-nav-dropdown" className="text">
                <div className="drop">
                  <NavDropdown.Item href="#action/3.1">Privacy Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Terms Of Use </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Trademarks</NavDropdown.Item>
                </div>

                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown> <pre>                                                   </pre>

              <Form inline>
                <div className="app"> <button className="btn btn1">Log In</button>
                  <button className="btn btn2">Sign Up</button></div>

              </Form>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;