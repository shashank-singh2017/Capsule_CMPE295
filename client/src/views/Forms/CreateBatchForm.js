import React, { Component } from 'react';

class CreateBatchForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <form
            style={{ width: "100%", marginTop: 20 }}
            onSubmit={this.onSubmit}
          >

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Product
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Details"
            />
          </div>

            <div class="form-group">
              <label for="exampleInputEmail1" style={{ float: "left" }}>
                 Manufacturer
              </label>
              <input
                type="text"
                class="form-control"
                id="fname"
                aria-describedby="emailHelp"
                placeholder="Enter Manufacturer"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1" style={{ float: "left" }}>
                Logistics
              </label>
              <input
                // name={this.state.lastName}
                type="text"
                class="form-control"
                id="lname"
                placeholder="Enter logistics"
                // onChange={event =>
                //   this.setState({ lastName: event.target.value })
                // }
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1" style={{ float: "left" }}>
                Retailer
              </label>
              <input
                // name={this.state.email}
                type="text"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter Retailer"
                // onChange={event => this.setState({ email: event.target.value })}
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1" style={{ float: "left" }}>
                End User
              </label>
              <input
                // name={this.state.email}
                type="text"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter end user"
                // onChange={event => this.setState({ email: event.target.value })}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
      </div>
    );
  }
}

export default CreateBatchForm;
