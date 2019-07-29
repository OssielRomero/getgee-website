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
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=heathermarsh%40riseup%2enet&lc=CA&item_name=Heather%20Marsh&currency_code=CAD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted"
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
