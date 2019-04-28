import React, { Component } from "react";
import "../stylesheets/header-transparent.css";

class Header extends Component {
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
                  console.log("Logout clicked, localStorage", localStorage);
                  localStorage.setItem("cur_fname", "");
                  localStorage.setItem("cur_lname", "");
                  localStorage.setItem("cur_email", "");
                  localStorage.setItem("cur_type", "");
                  localStorage.setItem("cur_address", "");

                  console.log("localStorage after resetting: ", localStorage);
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
