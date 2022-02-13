import "./App.css";

import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Footer from "./Footer";
import Navbar from "./Navbar";
class App extends React.Component {
  render() {
    return (
      <div className="test">
        <Navbar />
        <Hero />
        <AboutMe />
        <Services />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
