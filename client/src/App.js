import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routing from './components/Routing';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Routing />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
