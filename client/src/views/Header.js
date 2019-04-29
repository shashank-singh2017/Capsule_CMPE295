import React, { Component } from "react";
import "../stylesheets/header-transparent.css";

import { Button } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    getLoginLink = () => {
        if(localStorage.getItem('cur_address') === '') {
            return (
                <li className="nav-item">
                  <a className="nav-link" href="/login" style={{ color: "white" }}>
                    Login
                  </a>
                </li>
            );
        }
    }

    getLogoutLink = () => {
        if(localStorage.getItem('cur_address') !== '') {
            return (
                <span>
                  <Button block outline color="primary"  onClick={() => {
                    this.props.logout()
                  }}>
                    Logout
                  </Button>
                </span>
            );
        }
    }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a
            className="navbar-brand"
            href="/"
            style={{ color: "green", fontWeight: 900 }}
          >
            CAPSULE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.getLoginLink()}
            </ul>

            {this.getLogoutLink()}
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
