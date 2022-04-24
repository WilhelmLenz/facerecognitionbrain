import React, { useCallback } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
// import Facerecognition from './components/Facerecognition/Facerecognition'
import './App.css';


function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

    return (
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
       {/* <Facerecognition />  */}
      </div>
    );
  }

export default App;
