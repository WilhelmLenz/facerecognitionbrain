import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
// import Facerecognition from './components/Facerecognition/Facerecognition'
import './App.css';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      'input': '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('Click');
  }

  render() {

  const particlesInit = async(main) => {
    await loadFull(main);
  }

    return (
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
       {/* <Facerecognition />  */}
      </div>
    );
    }
  }

export default App;
