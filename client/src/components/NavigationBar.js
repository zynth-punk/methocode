import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Styles = styled.div`
  .navbar { background-color: #282c34; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #babdc6;
    &:hover { color: white; }
  }
  .navbar-brand {
    marginLeft: 20px;
    font-size: 1.4em;
    color: #babdc6;
    &:hover { color: white; }
  }
  .form-center {
    position: fixed !important;

    left: 35%;
    right: 35%;
  }
  
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/mainmenu">MethoCode</Navbar.Brand>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{padding: 10}} ><Button variant="outline-dark"><Nav.Link href="/help">Help</Nav.Link></Button></Nav.Item> 
          <Nav.Item style={{padding: 10}} ><Button variant="outline-dark"><Nav.Link href="/userprofile">User</Nav.Link></Button></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)