import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';

import MainPage from './views/Mainpage';
import Signup from './views/Signup';
import DefaultLayout from './containers/DefaultLayout';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/Home" render={props => <MainPage />} />
                <Route path="/Signup" render={props => <Signup />} />
                <Route path="/" render={props => <DefaultLayout {...props}/>} />
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
