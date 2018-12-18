import React, { Component } from 'react';
import '../stylesheets/mainpage.css';
import MainImage from './MainImage';
import AboutUs from './AboutUs';

class Mainpage extends Component {
  render() {
    return (
      <div className="container-fluid main-page">
            <MainImage />
            <AboutUs />
      </div>
    );
  }
}

export default Mainpage;