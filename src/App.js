import React, { Component } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import Whatis from './components/whatis';
import Whatdoes from './components/whatdoes';
import Whatcan from './components/whatcan';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        

      <Navigation/>
        <Header/>
        	<Whatis/>
        	<div className="parallax"></div>
        	<Whatdoes/>
        	<div className="parallax"></div>
        	<Whatcan/>
        	<div className="parallax"></div>
        	<Contact/>
        <Footer/>










        </div>
      
    );
  }
}

export default App;
