import React, { Component } from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Whatis extends Component {
  render() {
    return (
      
      <div className="App-whatis">
        <div className="container">
          <h1>
             What is G?
          </h1>
            <p>
               G is a free and open data commons. It uses a universal database and trust network to return control of our data to the users who created it while still allowing for mass collaboration. It will allow people to easily change the applications they use to access their data and choose only the functionality they want in an application. It will allow anyone to collaborate without using the same applications. The structure is an ecosystem, anything can be replaced without destroying the whole.
             </p>
                  <iframe 
                    width="441" 
                    height="244"
                    src="https://www.youtube.com/embed/YVCSkdSaCb0"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                   </iframe>

                   <p>Read More:</p>

                     
            </div>
             <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                       <ButtonGroup className="mr-2" aria-label="First group">

                        <Button 
                          variant="secondary"
                          className="button"         
                          href="https://georgiebc.wordpress.com/2015/12/24/getgee-tools-for-self-governance-part-1/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          Synopsis
                          </Button>
                         <Button 
                          variant="secondary"
                          className="button"         
                          href="https://georgiebc.wordpress.com/2016/04/25/transcript-from-talk-about-getgee/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          Cuba Conf 2016
                          </Button>
                         <Button 
                          variant="secondary"
                          className="button"         
                          href="https://georgiebc.wordpress.com/2017/05/09/the-evolution-of-democracy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          Medialab Keynote 2016
                          </Button>
                         <Button 
                          variant="secondary"
                          className="button"         
                          href="https://georgiebc.wordpress.com/2017/08/01/transcript-of-keynote-at-rmll/"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          RMLL Keynote 2017
                          </Button>

                       </ButtonGroup>
                      </ButtonToolbar>
        </div>
      
    );
  }
}

export default Whatis;
