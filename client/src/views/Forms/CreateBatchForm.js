import React, { Component } from "react";
import storage from "../../storage";
import web3 from "../../web3";

class CreateBatchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturer_add: "",
      logistics_add: "",
      retailer_add: "",
      endUser_add: "",
      product_name: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();

    this.setState({
      message: "Waiting on transaction success...",
      value: "0.01"
    });

    await storage.methods
      .setBatch(
        this.state.manufacturer_add,
        this.state.logistics_add,
        this.state.retailer_add,
        this.state.endUser_add,
        this.state.product_name
      )
      .send({
        from: accounts[0]
      });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <form style={{ width: "100%", marginTop: 20 }} onSubmit={this.onSubmit}>
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
              onChange={event =>
                this.setState({ manufacturer_add: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Logistics
            </label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Enter logistics"
              onChange={event =>
                this.setState({ logistics_add: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Retailer
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ retailer_add: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              End User
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter end user"
              onChange={event =>
                this.setState({ endUser_add: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Product
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Name"
              onChange={event =>
                this.setState({ product_name: event.target.value })
              }
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
