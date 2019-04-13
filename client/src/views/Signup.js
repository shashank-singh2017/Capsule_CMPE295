import React, { Component } from "react";
import "../stylesheets/login-signup.css";
import web3 from "../web3";
import capsuleUser from "../capsuleUser";


class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
    balance: "",
    value: "",
    message: "",
    address: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();

    this.setState({
      message: "Waiting on transaction success...",
      value: "0.01"
    });

    await capsuleUser.methods
      .setUser(
        this.state.address,
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password,
        this.state.userType
      )
      .send({
        from: accounts[0],
        value: web3.utils.toWei('0.1', "ether")
      });

    this.setState({ message: "You have been entered!" });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{ height: "100%", paddingBottom: "2%" }}
      >

        <div className="row box-login" style={{ paddingTop: "2%" }}>
          <h1>Signup</h1>

          <form
            style={{ width: "100%", marginTop: 20 }}
            onSubmit={this.onSubmit}
          >
            <div class="form-group">
              <label for="exampleInputEmail1" style={{ float: "left" }}>
                First Name
              </label>
              <input
                name={this.state.firstName}
                type="text"
                class="form-control"
                id="fname"
                aria-describedby="emailHelp"
                placeholder="Enter First Name"
                onChange={event =>
                  this.setState({ firstName: event.target.value })
                }
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" style={{ float: "left" }}>
                Last Name
              </label>
              <input
                name={this.state.lastName}
                type="text"
                class="form-control"
                id="lname"
                placeholder="Enter Last Name"
                onChange={event =>
                  this.setState({ lastName: event.target.value })
                }
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1" style={{ float: "left" }}>
                Email address
              </label>
              <input
                name={this.state.email}
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={event => this.setState({ email: event.target.value })}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" style={{ float: "left" }}>
                Password
              </label>
              <input
                name={this.state.password}
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Password"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" style={{ float: "left" }}>
                Ether Address
              </label>
              <input
                name={this.state.address}
                type="password"
                class="form-control"
                id="eth_add"
                placeholder="Ether Address"
                onChange={event =>
                  this.setState({ address: event.target.value })
                }
              />
            </div>

            <div class="form-group">
              <label for="exampleSelect1" style={{ float: "left" }}>
                Select User Type
              </label>
              <select
                name={this.state.userType}
                class="form-control"
                id="userType"
                placeholder="User Type"
                onChange={event =>
                  this.setState({ userType: event.target.value })
                }
              >
                <option />
                <option>General User</option>
                <option>Manufacturer</option>
                <option>Retailer</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Signup;
