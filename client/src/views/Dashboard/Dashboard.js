import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Container} from 'reactstrap';
import Header from "../Header";
import ModalComponent from '../ModalComponent/ModalComponent';
import CreateBatchModal from '../ModalComponent/CreateBatchModal';
import CreateUserModal from '../ModalComponent/CreateUserModal';
import CreateBatchForm from '../Forms/CreateBatchForm';
import Signup from '../Signup';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      isModalOpen: false,
      modalBody: '',
      isBatchModalOpen: false,
      batchModalBody: '',
      isCreateUserOpen: false,
      createUserModalBody: ''
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  openModal = (modal_data) => {
      this.setState({
          modalBody: modal_data,
          isModalOpen: true
      });
  }

  openBatchModal = () => {
      this.setState({
          batchModalBody: <CreateBatchForm />,
          isBatchModalOpen: true
      });
  }

  openCreateUserModal = () => {
      this.setState({
          createUserModalBody: <Signup />,
          isCreateUserOpen: true
      })
  }

  closeBatchModal = () => {
      this.setState({
          isBatchModalOpen: false
      });
  }

  closeCreateUserModal = () => {
      this.setState({
          isCreateUserOpen: false
      })
  }

  closeModal = () => {
      this.setState({
          isModalOpen: false
      });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Header />
        <Container fluid={true}>
            <Row>
                <Col xs="2" sm="2" lg="2">
                    <SideNav onSelect={(selected) => {
                        // Add your code here
                    }} style={{backgroundColor: 'black'}}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home" style={{display: 'inline'}}>
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText onClick={() => {
                                this.openBatchModal();
                            }}>
                                Create Batch
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Users Details
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-plus" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText onClick={() => {
                                this.openCreateUserModal();
                            }}>
                                Create User
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                    </SideNav>
                </Col>

                <Col xs="10" sm="10" lg="10">
                    <Container>
                    <br />
                    <CreateUserModal isCreateUserOpen={this.state.isCreateUserOpen} closeCreateUserModal={this.closeCreateUserModal} createUserModalBody={this.state.createUserModalBody}/>
                    <CreateBatchModal isBatchModalOpen={this.state.isBatchModalOpen} closeBatchModal={this.closeBatchModal} batchModalBody={this.state.batchModalBody}/>
                    <ModalComponent isOpen={this.state.isModalOpen} closeModal={this.closeModal} modalBody={this.state.modalBody}/>
                    <Row>
                      <Col xs="12" sm="6" lg="4">
                        <Card className="text-white bg-info" style={{height: '100%', textAlign: 'center'}}>
                          <CardBody className="pb-0">
                            <div className="text-value">06</div>
                            <div>Total Users</div>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" lg="4">
                        <Card className="text-white bg-info" style={{height: '100%', textAlign: 'center'}}>
                          <CardBody className="pb-0">
                            <div className="text-value">03</div>
                            <div>Total Roles</div>
                          </CardBody>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" lg="4">
                        <Card className="text-white bg-info" style={{height: '100%', textAlign: 'center'}}>
                          <CardBody className="pb-0">
                            <div className="text-value">10</div>
                            <div>Total Batches</div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <br/>
                    <br/>

                    <Row>
                        <Col xs="12" lg="12">
                            <Card>
                              <CardHeader>
                                <i className="fa fa-align-justify"></i> Batches Overview
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
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr onClick={() => {
                                      this.openModal("hello1");
                                  }}>
                                    <td>02xbdahjfkavhbjnshvksbd</td>
                                    <td>Abc Pharma</td>
                                    <td>One logisics</td>
                                    <td>Star medicines</td>
                                    <td>Hilberto Rodriguez</td>
                                  </tr>
                                  <tr onClick={() => {
                                      this.openModal("hello2");
                                  }}>
                                      <td>01gfhgdhgdhdfhfdhvksku</td>
                                      <td>Bio Labs</td>
                                      <td>logi one</td>
                                      <td>Ameri medi ltd.</td>
                                      <td>Sandy Joe</td>
                                  </tr>
                                  <tr onClick={() => {
                                      this.openModal("hello3");
                                  }}>
                                      <td>05xbdahkjiescnnshvksbde</td>
                                      <td>Tri pharma</td>
                                      <td>Moon shippers</td>
                                      <td>Bell medicos</td>
                                      <td>Amber Jr</td>
                                  </tr>
                                  <tr>
                                      <td>08xbdahjgnhfjfgshvksjhftf</td>
                                      <td>Unique ltd.</td>
                                      <td>One logisics</td>
                                      <td>Vineet drugs</td>
                                      <td>Shashank Singh</td>
                                  </tr>
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
