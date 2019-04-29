import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row, Table, Badge } from "reactstrap";
import Header from "../Header";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Nav, Tab } from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";
import VerifyBatchManufacturer from "../Forms/VerifyBatchManufacturer";
import VerifyBatchUser from "../Forms/VerifyBatchUser";
import VerifyBatchRetailer from "../Forms/VerifyBatchRetailer";
import VerifyBatchLogistics from "../Forms/VerifyBatchLogistics";
import Progress from "../Progress/Progress";
import storage from "../../storage";

import swal from "sweetalert";

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
      modalBody: "dfhevfhjew",
      modalTitle: "Modal title",
      isModalOpen: false,
      cur_batchId: "",
      batchData_display: [],
      isAlertOpen: false
    };
  }

  componentDidMount = () => {
    storage.methods
      .getUserBatchIds(this.state.address)
      .call()
      .then(batchIds => {
        return batchIds;
      })
      .then(batchIds => {
        let currentBatches = [];
        for (var i = 0; i < batchIds.length; i++) {
          let temp_details = {};
          temp_details["batch_id"] = batchIds[i];

          storage.methods
            .getBatch(batchIds[i])
            .call()
            .then(cur_batch_detail => {
              console.log("batch_detail: ", cur_batch_detail);
              temp_details["cur_actor"] = cur_batch_detail[6];
              temp_details["is_declined"] = cur_batch_detail[5];

              return temp_details;
            })
            .then(data => {
              currentBatches.push(data);

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

  openVerifyModal = batchData => {
    let user_type = this.state.userType;
    let modal_body = "";
    let modal_title = "";

    if (
      user_type === "Manufacturer" &&
      batchData.cur_actor === "MANUFACTURER"
    ) {
      modal_body = <VerifyBatchManufacturer batchId={batchData.batch_id} />;
      modal_title = "Verify - Manufacturer";
    } else if (
      user_type === "Logistics" &&
      batchData.cur_actor === "LOGISTICS"
    ) {
      modal_body = <VerifyBatchLogistics batchId={batchData.batch_id} />;
      modal_title = "Verify - Logistics";
    } else if (user_type === "Retailer" && batchData.cur_actor === "RETAILER") {
      modal_body = <VerifyBatchRetailer batchId={batchData.batch_id} />;
    } else if (user_type === "End User" && batchData.cur_actor === "ENDUSER") {
      modal_body = <VerifyBatchUser batchId={batchData.batch_id} />;
    } else {
      modal_body = "You are not the Current Owner";
    }

    this.setState({
      modalBody: modal_body,
      modalTitle: modal_title,
      isModalOpen: true
    });
  };

  openProgressModal = batchData => {
    var batchData_display_temp = [];
    var batchData_display_done = [];

    if (batchData.cur_actor === "MANUFACTURER") {
      this.setState({
        // batchData_display: summaryData
        modalBody: <Progress summaryData={batchData_display_temp} />,
        isModalOpen: true
      });
    } else if (batchData.cur_actor === "LOGISTICS") {
      // get maufacturer Data and set to batchData_display_temp

      storage.methods
        .getManufacturerData(batchData.batch_id)
        .call()
        .then(data => {
          storage.methods
            .getManufacturerData(batchData.batch_id)
            .call()
            .then(data => {
              let data_man = [];

              data_man.push(data["0"]);
              data_man.push(data["1"]);
              data_man.push(data["2"]);
              data_man.push(data["3"]);
              data_man.push(data["4"]);
              data_man.push(data["5"]);
              data_man.push(data["6"]);

              batchData_display_temp["man"] = data_man;

              this.setState({
                // batchData_display: summaryData
                modalBody: <Progress summaryData={batchData_display_temp} />,
                isModalOpen: true
              });
            });
        });
    } else if (batchData.cur_actor === "RETAILER") {
      // get Manufacturer Data
      storage.methods
        .getManufacturerData(batchData.batch_id)
        .call()
        .then(data => {
          var data_man = [];

          data_man.push(data["0"]);
          data_man.push(data["1"]);
          data_man.push(data["2"]);
          data_man.push(data["3"]);
          data_man.push(data["4"]);
          data_man.push(data["5"]);
          data_man.push(data["6"]);

          batchData_display_temp["man"] = data_man;
          return batchData_display_temp;
        })
        .then(summaryData => {
          storage.methods
            .getLogisticsData(batchData.batch_id)
            .call()
            .then(data => {
              var data_log = [];
              data_log.push(data["0"]);
              data_log.push(data["1"]);
              data_log.push(data["2"]);
              data_log.push(data["3"]);
              data_log.push(data["4"]);
              data_log.push(data["5"]);
              data_log.push(data["6"]);

              summaryData["log"] = data_log;

              this.setState({
                // batchData_display: summaryData
                modalBody: <Progress summaryData={summaryData} />,
                isModalOpen: true
              });
            });
        });
    } else if (batchData.cur_actor === "ENDUSER") {
      storage.methods
        .getManufacturerData(batchData.batch_id)
        .call()
        .then(data => {
          let data_man = [];

          data_man.push(data["0"]);
          data_man.push(data["1"]);
          data_man.push(data["2"]);
          data_man.push(data["3"]);
          data_man.push(data["4"]);
          data_man.push(data["5"]);
          data_man.push(data["6"]);

          batchData_display_done["man"] = data_man;
          return batchData_display_done;
        })
        .then(batchData_display_done => {
          storage.methods
            .getLogisticsData(batchData.batch_id)
            .call()
            .then(data => {
              let data_log = [];
              data_log.push(data["0"]);
              data_log.push(data["1"]);
              data_log.push(data["2"]);
              data_log.push(data["3"]);
              data_log.push(data["4"]);
              data_log.push(data["5"]);
              data_log.push(data["6"]);

              batchData_display_done["log"] = data_log;

              // var xyz = batchData_display_done;
              return batchData_display_done;
            })
            .then(batchData_display_done => {
              storage.methods
                .getRetailerData(batchData.batch_id)
                .call()
                .then(data => {
                  let data_ret = [];
                  data_ret.push(data["0"]);
                  data_ret.push(data["1"]);
                  data_ret.push(data["2"]);
                  data_ret.push(data["3"]);
                  data_ret.push(data["4"]);
                  data_ret.push(data["5"]);
                  data_ret.push(data["6"]);

                  batchData_display_done["ret"] = data_ret;

                  this.setState({
                    // batchData_display: summaryData
                    modalBody: (
                      <Progress summaryData={batchData_display_done} />
                    ),
                    isModalOpen: true
                  });
                });
            });
        });
    } else if (batchData.cur_actor === "DONE") {
      storage.methods
        .getManufacturerData(batchData.batch_id)
        .call()
        .then(data => {
          let data_man = [];

          data_man.push(data["0"]);
          data_man.push(data["1"]);
          data_man.push(data["2"]);
          data_man.push(data["3"]);
          data_man.push(data["4"]);
          data_man.push(data["5"]);
          data_man.push(data["6"]);

          batchData_display_done["man"] = data_man;
          return batchData_display_done;
        })
        .then(batchData_display_done => {
          storage.methods
            .getLogisticsData(batchData.batch_id)
            .call()
            .then(data => {
              let data_log = [];
              data_log.push(data["0"]);
              data_log.push(data["1"]);
              data_log.push(data["2"]);
              data_log.push(data["3"]);
              data_log.push(data["4"]);
              data_log.push(data["5"]);
              data_log.push(data["6"]);

              batchData_display_done["log"] = data_log;

              // var xyz = batchData_display_done;
              return batchData_display_done;
            })
            .then(batchData_display_done => {
              storage.methods
                .getRetailerData(batchData.batch_id)
                .call()
                .then(data => {
                  let data_ret = [];
                  data_ret.push(data["0"]);
                  data_ret.push(data["1"]);
                  data_ret.push(data["2"]);
                  data_ret.push(data["3"]);
                  data_ret.push(data["4"]);
                  data_ret.push(data["5"]);
                  data_ret.push(data["6"]);

                  batchData_display_done["ret"] = data_ret;

                  return batchData_display_done;
                })
                .then(summaryData => {
                  storage.methods
                    .getEndUserData(batchData.batch_id)
                    .call()
                    .then(data => {
                      let data_user = [];
                      data_user.push(data["0"]);
                      data_user.push(data["1"]);
                      data_user.push(data["2"]);
                      data_user.push(data["3"]);
                      data_user.push(data["4"]);
                      data_user.push(data["5"]);
                      data_user.push(data["6"]);

                      summaryData["user"] = data_user;

                      this.setState({
                        // batchData_display: summaryData
                        modalBody: <Progress summaryData={summaryData} />,
                        isModalOpen: true
                      });
                    });
                });
            });
        });
    }
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  logout = () => {
    console.log("Logout clicked, localStorage", localStorage);
    localStorage.setItem("cur_fname", "");
    localStorage.setItem("cur_lname", "");
    localStorage.setItem("cur_email", "");
    localStorage.setItem("cur_type", "");
    localStorage.setItem("cur_address", "");

    console.log("localStorage after resetting: ", localStorage);

    swal("You have Logged out Successfully!").then(value => {
      this.props.history.push("/login");
    });
  };

  getRow = (entry, index) => {
    console.log("entry: ", entry);
    console.log("index: ", index);

    if (entry.is_declined === true) {
      return (
        <tr key={index} style={{ backgroundColor: "red" }}>
          <td key={index}>{entry["batch_id"]}</td>

          <td>{this.getManufacturerStatus(entry.cur_actor)}</td>
          <td>{this.getLogisticsStatus(entry.cur_actor)}</td>
          <td>{this.getRetailerStatus(entry.cur_actor)}</td>
          <td>{this.getEndUserStatus(entry.cur_actor)}</td>
          <td
            onClick={() => {
              this.openProgressModal(entry);
            }}
          >
            <i className="fa fa-eye fa-md" style={{ marginTop: 0 }} />
          </td>
        </tr>
      );
    } else {
      return (
        <tr key={index}>
          <td
            key={index}
            onClick={() => {
              this.openVerifyModal(entry);
            }}
            disabled="true"
          >
            {entry["batch_id"]}
          </td>

          <td>{this.getManufacturerStatus(entry.cur_actor)}</td>
          <td>{this.getLogisticsStatus(entry.cur_actor)}</td>
          <td>{this.getRetailerStatus(entry.cur_actor)}</td>
          <td>{this.getEndUserStatus(entry.cur_actor)}</td>
          <td
            onClick={() => {
              this.openProgressModal(entry);
            }}
          >
            <i className="fa fa-eye fa-md" style={{ marginTop: 0 }} />
          </td>
        </tr>
      );
    }
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Header logout={this.logout} />
        <Row style={{ paddingLeft: "3%", backgroundColor: "gray" }}>
          <h3 style={{ paddingTop: 5 }}>User Dashboard</h3>
        </Row>
        <br />
        <ModalComponent
          isOpen={this.state.isModalOpen}
          modalBody={this.state.modalBody}
          closeModal={this.closeModal}
          modalTitle={this.state.modalTitle}
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
                                return this.getRow(entry, index);
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
