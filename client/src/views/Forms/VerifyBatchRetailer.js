import React, { Component } from "react";
import storage from "../../storage";
import web3 from "../../web3";

class VerifyBatchRetailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalTime: "",
      quantity: "",
      shipmentNum: "",
      warehouseName: "",
      damagedItemsRecvd: "",
      damagedItemsQuantity: "",
      productId: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();

    await storage.methods
      .setRetailerData(
        this.props.batchId,
        this.state.arrivalTime,
        this.state.quantity,
        this.state.shipmentNum,
        this.state.warehouseName,
        this.state.damagedItemsRecvd,
        this.state.damagedItemsQuantity,
        this.state.productId
      )
      .send({
        from: accounts[0]
      });
  };

  declineBatch = async batchId => {
    let accounts = await web3.eth.getAccounts();

    storage.methods.setIsDeclined(batchId).send({
      from: accounts[0]
    });
  };

  render() {
    return (
      <div className="animated fadeIn">
        <form style={{ width: "100%", marginTop: 20 }} onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Arrival Time
            </label>
            <input
              type="text"
              class="form-control"
              id="fname"
              aria-describedby="emailHelp"
              placeholder="Enter Arrival Time"
              onChange={event =>
                this.setState({ arrivalTime: event.target.value })
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
              placeholder="Enter Quantity"
              onChange={event =>
                this.setState({ quantity: event.target.value })
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
              placeholder="Enter Shipment Number"
              onChange={event =>
                this.setState({ shipmentNum: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Warehouse Name
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Warehouse Name"
              onChange={event =>
                this.setState({ warehouseName: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Damaged Items Received
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Damaged Items Received"
              onChange={event =>
                this.setState({ damagedItemsRecvd: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Damaged Items Quantity
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Damaged Items Quantity"
              onChange={event =>
                this.setState({ damagedItemsQuantity: event.target.value })
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
              placeholder="Product Id"
              onChange={event =>
                this.setState({ productId: event.target.value })
              }
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>

        <button
          class="btn btn-danger"
          onClick={() => {
            this.declineBatch(this.props.batchId);
          }}
          style={{ float: "right" }}
        >
          Decline
        </button>
      </div>
    );
  }
}

export default VerifyBatchRetailer;
