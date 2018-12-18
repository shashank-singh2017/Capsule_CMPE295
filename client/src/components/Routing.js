import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Mainpage from './Mainpage';
import Login from './Login';
import Signup from './Signup';

class Routing extends Component {
  render() {
    return (
      <div>
            <Route exact path="/" render={() => (
                    <div>
                        <Mainpage />
                    </div>
            )}/>

            <Route exact path="/login" render={() => (
                    <div>
                        <Login />
                    </div>
            )}/>

            <Route exact path="/signup" render={() => (
                    <div>
                        <Signup />
                    </div>
            )}/>

      </div>
    );
  }
}

export default Routing;