import React, { Component } from 'react';
import './../App.css';

class Whatis extends Component {
  render() {
    return (
      
        <div className="App-whatis">
         
          <h1>
          What is G?
          </h1>

          <p>


 G is a free and open data commons. It uses a universal database and trust network to return control of our data to the users who created it while still allowing for mass collaboration. It will allow people to easily change the applications they use to access their data and choose only the functionality they want in an application. It will allow anyone to collaborate without using the same applications. The structure is an ecosystem, anything can be replaced without destroying the whole.

          </p>
          <iframe width="441" height="244"
          src="https://www.youtube.com/embed/YVCSkdSaCb0"
           frameborder="0" 
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>

          
          <button
            className="button"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More..
          </button>
        </div>
      
    );
  }
}

export default Whatis;
