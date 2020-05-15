import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #001659; }
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
    position: absolute !important;
    left: 35%;
    right: 35%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/mainmenu">MethoCode</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/help">help</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/userprofile">User</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)