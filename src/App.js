import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Project from "./components/Project";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import ThankYou from "./components/ThankYou";
import "./App.css";
// import "./index.css"
import Portfolio from './components/Portfolio';
import About from './components/About';
function App () {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <ThankYou />
      <Footer />
    </div>
  )
}

export default App;