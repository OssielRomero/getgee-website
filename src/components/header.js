import React, { Component } from 'react';
import logo from './../logo.png';
import './../App.css';
import Button from 'react-bootstrap/Button'

class Header extends Component {
  render() {
    return (
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
          The Universal Database
          </h1>      
          <p>
            We have free software. We need free databases.
          </p>

          
          <Button 
            variant="danger"
            className="button"         
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </Button>
        </header>
      
    );
  }
}

export default Header;
