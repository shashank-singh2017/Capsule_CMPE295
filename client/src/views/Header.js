import React, { Component } from "react";
import "../stylesheets/header-transparent.css";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.log("props: ", this.props);
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
              <li className="nav-item active">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Services{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "white" }}>
                  Signup
                </a>
              </li>
            </ul>
            <span>
              <p
                onClick={() => {
                  this.props.logout()
                }}
              >
                Logout
              </p>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
