import React, { Component } from 'react';
import '../stylesheets/header-transparent.css';

class HeaderTransparent extends Component {
  render() {
    return (
      <div className="container-fluid main-box">
           <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/" style={{color: 'green',fontWeight: 900}}>CAPSULE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <a className="nav-link" href="/login" style={{color: 'white'}}><strong>Login</strong></a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="/UserDashboard" style={{color: 'white'}}><strong>Dashboard</strong></a>
                        </li>
                    </ul>
                </div>
            </nav>
      </div>
    );
  }
}

export default HeaderTransparent;
