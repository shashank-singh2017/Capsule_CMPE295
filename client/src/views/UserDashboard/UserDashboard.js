import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from "reactstrap";
import Header from "../Header";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Nav, Tab } from "react-bootstrap";
import ModalComponent from '../ModalComponent/ModalComponent';
import storage from "../../storage";
import VerifyBatchManufacturer from '../Forms/VerifyBatchManufacturer';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: localStorage.getItem("cur_fname"),
      lname: localStorage.getItem("cur_lname"),
      email: localStorage.getItem("cur_email"),
      userType: localStorage.getItem("cur_type"),
      address: localStorage.getItem("cur_address"),
      batches: [],
      verifyModalBody: 'dfhevfhjew',
      isVerifyModalOpen: false
    };
  }

  componentDidMount = () => {
    storage.methods
      .getUserBatchIds("0xca35b7d915458ef540ade6068dfe2f44e8fa733c")
      .call()
      .then(batchIds => {
        return batchIds;
      })
      .then(batchIds => {
        console.log(batchIds);
        let currentBatches = [];
        for (var i = 0; i < batchIds.length; i++) {
          let temp_details = {};
          temp_details["batch_id"] = batchIds[i];

          storage.methods
            .getNextAction(batchIds[i])
            .call()
            .then(cur_party => {
              console.log(cur_party);
              temp_details["cur_actor"] = cur_party;

              return temp_details;
            })
            .then(data => {
              console.log(data);
              currentBatches.push(data);
              console.log(batchIds.length);
              console.log(currentBatches.length);

              if (currentBatches.length === batchIds.length) {
                this.setState({
                  batches: currentBatches
                });
              }
            });
        }
      });
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  getUserIndex = user => {
    if (user === "MANUFACTURER") {
      return 0;
    } else if (user === "LOGISTICS") {
      return 1;
    } else if (user === "RETAILER") {
      return 2;
    } else if (user === "ENDUSER") {
      return 3;
    } else if (user === "DONE") {
      return 4;
    } else {
      return 5;
    }
  };

  getManufacturerStatus = user => {
    const user_index = this.getUserIndex(user);

    console.log("cur_actor: ", user_index);

    if (user_index === 0) {
      return <Badge color="warning">In Process</Badge>;
    } else if (user_index > 0 && user_index <= 4) {
      return <Badge color="success">Completed</Badge>;
    } else if (user_index > 4) {
      return <Badge>Not Available</Badge>;
    }
  };

  getLogisticsStatus = user => {
    const user_index = this.getUserIndex(user);

    if (user_index === 1) {
      return <Badge color="warning">In Process</Badge>;
    } else if (user_index > 1) {
      return <Badge color="success">Completed</Badge>;
    } else {
      return <Badge>Not Available</Badge>;
    }
  };

  getRetailerStatus = user => {
    const user_index = this.getUserIndex(user);

    if (user_index === 2) {
      return <Badge color="warning">In Process</Badge>;
    } else if (user_index > 2) {
      return <Badge color="success">Completed</Badge>;
    } else {
      return <Badge>NotAvailable</Badge>;
    }
  };

  getEndUserStatus = user => {
    const user_index = this.getUserIndex(user);

    if (user_index === 3) {
      return <Badge color="warning">In Process</Badge>;
    } else if (user_index > 3) {
      return <Badge color="success">Completed</Badge>;
    } else {
      return <Badge>NotAvailable</Badge>;
    }
  };

  openVerifyModal = (batchData) => {
      this.setState({
          isVerifyModalOpen: true
      })
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Header />
        <Row style={{ paddingLeft: "3%", backgroundColor: "gray" }}>
          <h3 style={{ paddingTop: 5 }}>User Dashboard</h3>
        </Row>
        <br />
        <ModalComponent
            isOpen={this.state.isVerifyModalOpen}
            modalBody={<VerifyBatchManufacturer />}
            closeModal={this.state.closeVerifyModal}
        />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav className="flex-column">
                <Nav.Item style={{ display: "inline", border: "1px solid" }}>
                  <Nav.Link eventKey="first">Batch Details</Nav.Link>
                </Nav.Item>
                <br />
                <Nav.Item style={{ display: "inline", border: "1px solid" }}>
                  <Nav.Link eventKey="second">My Account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify" /> Batches Overview
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Batch Id</th>
                            <th>Manufacturer</th>
                            <th>Logistics</th>
                            <th>Retailer</th>
                            <th>End user</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.batches.length > 0
                            ? this.state.batches.map((entry, index) => {
                                return (
                                  <tr key={index} onClick={() => {
                                      this.openVerifyModal(entry)
                                  }}>
                                    <td>{entry["batch_id"]}</td>
                                    <td>
                                      {this.getManufacturerStatus(
                                        entry.cur_actor
                                      )}
                                    </td>
                                    <td>
                                      {this.getLogisticsStatus(entry.cur_actor)}
                                    </td>
                                    <td>
                                      {this.getRetailerStatus(entry.cur_actor)}
                                    </td>
                                    <td>
                                      {this.getEndUserStatus(entry.cur_actor)}
                                    </td>
                                    <td>
                                      <i
                                        className="fa fa-eye fa-md"
                                        style={{ marginTop: 0 }}
                                      />
                                    </td>
                                  </tr>
                                );
                              })
                            : this.state.batches.map(entry => {
                                return <span />;
                              })}
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Card>
                    <CardHeader>
                      <i className="fa fa-align-justify" /> My Account
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <tbody>
                          <tr>
                            <td>User Address</td>
                            <td>{this.state.address}</td>
                          </tr>
                          <tr>
                            <td>First Name</td>
                            <td>{this.state.fname}</td>
                          </tr>
                          <tr>
                            <td>Last Name</td>
                            <td>{this.state.lname}</td>
                          </tr>
                          <tr>
                            <td>Registered Email</td>
                            <td>{this.state.email}</td>
                          </tr>
                          <tr>
                            <td>User Type</td>
                            <td>{this.state.userType}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default UserDashboard;
