import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.scss';

import MainPage from './views/Mainpage';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import UserDashboard from './views/UserDashboard/UserDashboard';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact="true" render={props => <MainPage />} />
                <Route path="/signup" exact={true} render={props => <Signup />} />
                <Route path="/login" render={props => <Login />} />
                <Route path="/Home" render={props => <MainPage />} />
                <Route path="/AdminDashboard" render={props => <Dashboard />} />
                <Route path="/UserDashboard" render={props => <UserDashboard />} />
            </div>
        </BrowserRouter>

    );
  }
}
export default App;
