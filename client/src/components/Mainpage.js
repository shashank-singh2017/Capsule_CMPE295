import React, { Component } from 'react';
import '../stylesheets/mainpage.css';
import MainImage from './MainImage';
import AboutUs from './AboutUs';
import Footer from './Footer';
import WelcomeQuote from './WelcomeQuote';

class Mainpage extends Component {
  render() {
    return (
      <div className="container-fluid main-page">
            <MainImage />
            <WelcomeQuote />
            <AboutUs />
            <Footer />
      </div>
    );
  }
}

export default Mainpage;