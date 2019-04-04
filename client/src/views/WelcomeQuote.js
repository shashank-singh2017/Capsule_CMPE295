import React, { Component } from 'react';
import '../stylesheets/welcome-quote.css';

class WelcomeQuote extends Component {
  render() {
    return (
      <div className="container-fluid" style={{paddingTop: 30, paddingBottom: 40, backgroundColor: '#fbf1fb'}}>
            <h1>Welcome to Capsule</h1>
            <br/>
            <br/>
            <h3>A Blockchain based Supply chain Management System </h3>
      </div>
    );
  }
}

export default WelcomeQuote;