import React, { Component } from "react";
import "../stylesheets/login-signup.css";
import Header from "./Header";
// import web3 from "../web3";
// import capsuleUser from "../capsuleUser";

// const myAccount = "0x9b6E8A3366084aae75ceC8b4348B8281080949f9";

class Login extends Component {
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

  // async componentDidMount() {
  //   // const manager = await lottery.methods.manager().call();
  //   const {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     userType
  //   } = await capsuleUser.methods.getUser(myAccount).call();
  //   // const balance = await web3.eth.getBalance(capsuleUser.options.address);
  //   this.setState({ firstName, lastName, email, password, userType });
  // }

  onSubmit = async event => {
    event.preventDefault();

    // const accounts = await web3.eth.getAccounts();

    this.setState({
      message: "Trying to login...",
      value: "0.01"
    });

    // console.log(this.state.address);

    // const user = await capsuleUser.methods.getUser(this.state.address).call();

    // console.log(user);

    // this.setState({
    //   firstName: user[0],
    //   lastName: user[1],
    //   email: user[2],
    //   password: user[3],
    //   userType: user[4],
    //   message: "You have succefully logged in!"
    // });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{ height: "100%", paddingBottom: "2%" }}
      >
        <Header />

        <div className="row box-login" style={{ paddingTop: "2%" }}>
          <h1>Login</h1>

          <form
            style={{ width: "100%", marginTop: 20 }}
            onSubmit={this.onSubmit}
          >

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

export default Login;
