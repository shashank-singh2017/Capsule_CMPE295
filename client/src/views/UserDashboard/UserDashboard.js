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
import { Nav, Tab } from 'react-bootstrap';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Header />
        <Row style={{paddingLeft: '3%', backgroundColor: 'gray'}}>
            <h3 style={{paddingTop: 5}}>User Dashboard</h3>
        </Row>
        <br/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav className="flex-column">
                <Nav.Item style={{display: 'inline', border: '1px solid'}} >
                    <Nav.Link eventKey="first">Batch Details</Nav.Link>
                </Nav.Item>
                <br/>
                <Nav.Item style={{display: 'inline', border: '1px solid'}}>
                  <Nav.Link eventKey="second">My Account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
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

                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i> My Account
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <tbody>
                              <tr>
                                <td>First Name</td>
                                <td>Shashank</td>
                              </tr>
                              <tr>
                                  <td>Last Name</td>
                                  <td>Singh</td>
                              </tr>
                              <tr>
                                <td>Registered Email</td>
                                <td>abc@gmail.com</td>
                              </tr>
                              <tr>
                                  <td>User Type</td>
                                  <td>Manufacturer</td>
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
