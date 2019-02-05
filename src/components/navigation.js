import React, { Component } from 'react';
import logo from './../logo.png';
import './../App.css';
import Navbar from 'react-bootstrap/Navbar'


class Navigation extends Component {
  render() {
    return (
      
 <div>      
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' Getgee'}
    </Navbar.Brand>
   
  </Navbar>
</div>

      
    );
  }
}

export default Navigation;