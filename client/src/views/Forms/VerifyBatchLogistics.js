import React, { Component } from "react";
import storage from "../../storage";
import web3 from "../../web3";

class VerifyBatchLogistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationName: "",
      destinationAddress: "",
      shipmentNum: "",
      quantity: "",
      departureTime: "",
      estimatedArrivalTime: "",
      productId: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();

    console.log(this.props.batchId);

    await storage.methods
      .setLogisticsData(
        this.props.batchId,
        this.state.destinationName,
        this.state.destinationAddress,
        this.state.shipmentNum,
        this.state.quantity,
        this.state.departureTime,
        this.state.estimatedArrivalTime,
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
              Destination Name
            </label>
            <input
              type="text"
              class="form-control"
              id="fname"
              aria-describedby="emailHelp"
              placeholder="Enter Manufacturer"
              onChange={event =>
                this.setState({ destinationName: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Destination Address
            </label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Enter logistics"
              onChange={event =>
                this.setState({ destinationAddress: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Shipment Number
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ shipmentNum: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Quantity
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ quantity: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Departure Time
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter end user"
              onChange={event =>
                this.setState({ departureTime: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Estimated Arrival Time
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Name"
              onChange={event =>
                this.setState({ estimatedArrivalTime: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Product Id
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Name"
              onChange={event =>
                this.setState({ productId: event.target.value })
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

export default VerifyBatchLogistics;
