import React, { Component } from 'react';
import '../stylesheets/login-signup.css';

import Header from './Header';

class Signup extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: '100%', paddingBottom: '2%'}}>
            <Header />
            
            <div className="row box-login" style={{paddingTop: '2%'}}>
                <h1>Signup</h1>
                
                <form style={{width: '100%',marginTop: 20}}> 

                    <div class="form-group">
                        <label for="exampleInputEmail1" style={{float: 'left'}}>First Name</label>
                        <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" placeholder="Enter First Name" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{float: 'left'}}>Last Name</label>
                        <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1" style={{float: 'left'}}>Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{float: 'left'}}>Password</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{float: 'left'}}>Ether Address</label>
                        <input type="password" class="form-control" id="eth_add" placeholder="Ether Address" />
                    </div>

                    <div class="form-group">
                        <label for="exampleSelect1" style={{float: 'left'}}>Select User Type</label>
                        <select class="form-control" id="userType">
                        <option>General User</option>
                        <option>Manufacturer</option>
                        <option>Retailer</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
      </div>
    );
  }
}

export default Signup;