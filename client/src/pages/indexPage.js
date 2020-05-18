import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';
import BodyLayout from '../components/BodyLayout'
import Button from 'react-bootstrap/Button';
import './Stylesheets/IndexPage.css'

const Styles = styled.div`
  .navbar { background-color: #282c34; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #babdc6;
    font-size: 2vw;
    &:hover { color: white; }
  }
  .navbar-brand {
    text-align: center;
    padding: 0.2vw;
    font-size: 3vw;
    color: #babdc6;
    &:hover { color: white; }
  }
  .navbar-collapse {
    text-align: left;
  }
`;



function IndexPage() {
  return (
    <div className="App">
      <div className="App-Navigation-Index">
        <Styles>
          <Navbar expand="lg">
            <Navbar.Brand href="/index">MethoCode</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item style={{padding: 10}}><Button className="userInput-at-Index" variant="outline-dark"><Nav.Link href="/userlogin">Log In</Nav.Link></Button></Nav.Item> 
                <Nav.Item style={{padding: 10}}><Button className="userInput-at-Index" variant="outline-dark"><Nav.Link href="/usersignup">Sign In</Nav.Link></Button></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </div>
      <div className="">
        <div className="App-Index-logo">
          <img className="App-logo" alt="Metho! CODE!"src={require('../images/welcomelogo.jpg')}></img>
        </div>
      </div>
    </div>
    
  );
}

export default IndexPage;