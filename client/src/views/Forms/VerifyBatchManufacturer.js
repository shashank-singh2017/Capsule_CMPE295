import React, { Component } from "react";
import storage from "../../storage";
import web3 from "../../web3";

class VerifyBatchManufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturerRegNum: "",
      manufacturerName: "",
      manufacturerAddress: "",
      typeOfDrug: "",
      logisticHandlerName: "",
      labTestResults: "",
      productId: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    let accounts = await web3.eth.getAccounts();

    console.log(this.props.batchId);

    await storage.methods
      .setManufacturerData(
        this.props.batchId,
        this.state.manufacturerRegNum,
        this.state.manufacturerName,
        this.state.manufacturerAddress,
        this.state.typeOfDrug,
        this.state.logisticHandlerName,
        this.state.labTestResults,
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
              Manufacturer Registration No.
            </label>
            <input
              type="text"
              class="form-control"
              id="fname"
              aria-describedby="emailHelp"
              placeholder="Enter Manufacturer"
              onChange={event =>
                this.setState({ manufacturerRegNum: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Manufacturer Name
            </label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Enter logistics"
              onChange={event =>
                this.setState({ manufacturerName: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Manufacturer Address
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ manufacturerAddress: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Type Of Drug
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Retailer"
              onChange={event =>
                this.setState({ typeOfDrug: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1" style={{ float: "left" }}>
              Logistics Handler Name
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter end user"
              onChange={event =>
                this.setState({ logisticHandlerName: event.target.value })
              }
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" style={{ float: "left" }}>
              Lab Test Results
            </label>
            <input
              type="text"
              class="form-control"
              id="eth_add"
              placeholder="Product Name"
              onChange={event =>
                this.setState({ labTestResults: event.target.value })
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

export default VerifyBatchManufacturer;
