import React, { Component } from "react";
import storage from "../../storage";
import web3 from "../../web3";

class VerifyBatchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        drugName: '',
        quantity: '',
        arrivalTime: '',
        productId: '',
        productQualityRating: '',
        deliveryMetricsRating: '',
        reviewComments: ''
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();

    await storage.methods
      .setManufacturerData(
        this.state.drugName,
        this.state.quantity,
        this.state.arrivalTime,
        this.state.productId,
        this.state.productQualityRating,
        this.state.deliveryMetricsRating,

        this.state.productId
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
              Drug Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fname"
              aria-describedby="emailHelp"
              placeholder="Enter Manufacturer"
              onChange={event =>
                this.setState({ drugName: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Quantity
            </label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Enter logistics"
              onChange={event =>
                this.setState({ quantity: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Arrival Time
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ arrivalTime: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Product Id
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ productId: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Product Quality Rating
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter end user"
              onChange={event =>
                this.setState({ productQualityRating: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Delivery Metrics Rating
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Name"
              onChange={event =>
                this.setState({ deliveryMetricsRating: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
                Review Comments
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Name"
              onChange={event =>
                this.setState({ reviewComments: event.target.value })
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

export default VerifyBatchUser;
