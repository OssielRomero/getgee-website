import React, { Component } from 'react';
import image1 from './../assets/image1.png';
import './../App.css';

class Whatdoes extends Component {
  render() {
    return (
      
        <div className="App-whatdoes">
          <div className="container">
         
          <h1>
          What does G do?
          </h1>

          <p>
          With G, we filter out astroturfing and spam using trust networks.  Everyone has control of their own information filters. We aren't overwhelmed by celebrity influence because the structure promotes the people contributing research instead. Everyone can choose who they work with but all research is open and linked. We allow diversity of opinion and different viewpoints. We let our own trust networks decide what is important to show us instead of leaving it up to search engines or social media platforms.

          </p>


          <img src={image1} className="App-image" alt="logo" />

          
         
          </div>
        </div>
      
    );
  }
}

export default Whatdoes;
