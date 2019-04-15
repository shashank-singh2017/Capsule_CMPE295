import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Container,
  Badge
} from "reactstrap";
import Header from "../Header";
import ModalComponent from "../ModalComponent/ModalComponent";
import CreateBatchModal from "../ModalComponent/CreateBatchModal";
import CreateUserModal from "../ModalComponent/CreateUserModal";
import CreateBatchForm from "../Forms/CreateBatchForm";
import Signup from "../Signup";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ProgressModal from "../ModalComponent/ProgressModal";
import storage from "../../storage";
import capsuleUser from "../../capsuleUser";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      isModalOpen: false,
      modalBody: "",
      isBatchModalOpen: false,
      batchModalBody: "",
      isCreateUserOpen: false,
      createUserModalBody: "",
      isProgressModalOpen: false,
      progressModalBody: "",
      batches: [],
      user_details: []
    };
  }

  componentDidMount = () => {
    storage.methods
      .getAllBatchIds()
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

    capsuleUser.methods
      .listOfAddress()
      .call()
      .then(user_addresses => {
        return user_addresses;
      })
      .then(user_addresses => {
        console.log(user_addresses);
        let userDetails = [];
        for (var i = 0; i < user_addresses.length; i++) {
          let temp_details = {};
          temp_details["address"] = user_addresses[i];

          capsuleUser.methods
            .getUser(user_addresses[i])
            .call()
            .then(cur_user => {
              console.log(cur_user);
              temp_details["fname"] = cur_user[0];
              temp_details["lname"] = cur_user[1];
              temp_details["email"] = cur_user[2];
              temp_details["type"] = cur_user[4];
              return temp_details;
            })
            .then(data => {
              console.log(data);
              userDetails.push(data);

              if (userDetails.length === user_addresses.length) {
                console.log(userDetails);
                this.setState({
                  user_details: userDetails
                });
              }
            });
        }
      });
  };

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  openModal = modal_data => {
    this.setState({
      modalBody: modal_data,
      isModalOpen: true
    });
  };

  openBatchModal = () => {
    this.setState({
      batchModalBody: <CreateBatchForm />,
      isBatchModalOpen: true
    });
  };

  openCreateUserModal = () => {
    this.setState({
      createUserModalBody: <Signup />,
      isCreateUserOpen: true
    });
  };

  closeBatchModal = () => {
    this.setState({
      isBatchModalOpen: false
    });
  };

  closeCreateUserModal = () => {
    this.setState({
      isCreateUserOpen: false
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  openProgressModal = () => {
    console.log("inside openProgressModal");

    this.setState({
      progressModalBody: ["123", "234", "345", "567"],
      isProgressModalOpen: true
    });
  };

  closeProgressModal = () => {
    this.setState({
      isProgressModalOpen: false
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

  render() {
    return (
      <div className="animated fadeIn">
        <Header />
        <Container fluid={true}>
          <Row>
            <Col xs="2" sm="2" lg="2">
              <SideNav style={{ backgroundColor: "black" }}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home" style={{ display: "inline" }}>
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-home"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText
                      onClick={() => {
                        this.openBatchModal();
                      }}
                    >
                      Create Batch
                    </NavText>
                  </NavItem>
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-user"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Users Details</NavText>
                  </NavItem>
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-plus"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText
                      onClick={() => {
                        this.openCreateUserModal();
                      }}
                    >
                      Create User
                    </NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
            </Col>

            <Col xs="10" sm="10" lg="10">
              <Container fluid={true}>
                <br />
                <ProgressModal
                  isProgressModalOpen={this.state.isProgressModalOpen}
                  progressModalBody={this.state.progressModalBody}
                  closeProgressModal={this.closeProgressModal}
                />
                <CreateUserModal
                  isCreateUserOpen={this.state.isCreateUserOpen}
                  closeCreateUserModal={this.closeCreateUserModal}
                  createUserModalBody={this.state.createUserModalBody}
                />
                <CreateBatchModal
                  isBatchModalOpen={this.state.isBatchModalOpen}
                  closeBatchModal={this.closeBatchModal}
                  batchModalBody={this.state.batchModalBody}
                />
                <ModalComponent
                  isOpen={this.state.isModalOpen}
                  closeModal={this.closeModal}
                  modalBody={this.state.modalBody}
                />

                <Row>
                  <Col xs="12" sm="6" lg="4">
                    <Card
                      className="text-white bg-info"
                      style={{ height: "100%", textAlign: "center" }}
                    >
                      <CardBody className="pb-0">
                        <div className="text-value">
                          {this.state.user_details.length}
                        </div>
                        <div>Total Users</div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="4">
                    <Card
                      className="text-white bg-info"
                      style={{ height: "100%", textAlign: "center" }}
                    >
                      <CardBody className="pb-0">
                        <div className="text-value">4</div>
                        <div>Total Roles</div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="4">
                    <Card
                      className="text-white bg-info"
                      style={{ height: "100%", textAlign: "center" }}
                    >
                      <CardBody className="pb-0">
                        <div className="text-value">
                          {this.state.batches.length}
                        </div>
                        <div>Total Batches</div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <br />
                <br />

                <Row>
                  <Col xs="12" lg="12">
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
                              <td />
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.batches.map((entry, index) => {
                              return (
                                <tr key={index}>
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
                            })}
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
