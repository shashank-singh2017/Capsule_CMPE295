import React, { Component } from "react";
import "../stylesheets/login-signup.css";
import Header from "./Header";
import web3 from "../web3";
import capsuleUser from "../capsuleUser";
import swal from 'sweetalert';

const myAccount = "0x7Ebf0931004CC7B1161B091e1381A56926c2A5db";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          userType: "",
          balance: "",
          value: "",
          message: "",
          address: ""
        };
    }

  async componentDidMount() {
    const {
      firstName,
      lastName,
      email,
      userType
    } = await capsuleUser.methods.getUser(myAccount).call();

    this.setState({ firstName, lastName, email, userType });
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    console.log(accounts);

    this.setState({
      value: "0.01"
    });

    swal("You have Logged in Successfully !!")
    .then(value => {
        this.props.history.push('/UserDashboard');
    })

    const user = await capsuleUser.methods.getUser(this.state.address).call();

    localStorage.setItem("cur_fname", user[0]);
    localStorage.setItem("cur_lname", user[1]);
    localStorage.setItem("cur_email", user[2]);
    localStorage.setItem("cur_type", user[3]);
    localStorage.setItem("cur_address", this.state.address);

    this.setState({
      firstName: user[0],
      lastName: user[1],
      email: user[2],
      userType: user[3],
      message: "You have succefully logged in!"
    });
  };

  logout = () => {

    localStorage.setItem("cur_fname", "");
    localStorage.setItem("cur_lname", "");
    localStorage.setItem("cur_email", "");
    localStorage.setItem("cur_type", "");
    localStorage.setItem("cur_address", "");

    swal("You have Logged out Successfully!").then(value => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{ height: "100%", paddingBottom: "2%" }}
      >
        <Header logout={this.logout}/>

        <div className="row box-login" style={{ paddingTop: "2%" }}>
          <h1>Login</h1>

          <form
            style={{ width: "100%", marginTop: 20 }}
            onSubmit={this.onSubmit}
          >
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" style={{ float: "left" }}>
                Ether Address
              </label>
              <input
                name={this.state.address}
                type="password"
                className="form-control"
                id="eth_add"
                placeholder="Ether Address"
                onChange={event =>
                  this.setState({ address: event.target.value })
                }
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

// 0x9b6E8A3366084aae75ceC8b4348B8281080949f9
