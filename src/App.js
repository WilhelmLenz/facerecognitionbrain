import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
// import Facerecognition from './components/Facerecognition/Facerecognition'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm />
       {/* <Facerecognition />  */}
      </div>
    );
  }
}

export default App;
