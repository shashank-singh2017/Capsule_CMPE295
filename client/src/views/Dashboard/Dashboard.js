import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Container} from 'reactstrap';
import Header from "../Header";
import ModalComponent from '../ModalComponent/ModalComponent';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      isModalOpen: false,
      modalBody: ''
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
        <Container>
        <br />
        <br />
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
                        <th>Retailer</th>
                        <th>End user</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr onClick={() => {
                          this.openModal("hello1");
                      }}>
                        <td>03xbdahjfkavhbjnshvksbdzs</td>
                        <td>Samppa Nori</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                      </tr>
                      <tr onClick={() => {
                          this.openModal("hello2");
                      }}>
                        <td>03xbdahjfkavhbjnshvksbdzs</td>
                        <td>Estavan Lykos</td>
                        <td>2012/02/01</td>
                        <td>Staff</td>
                      </tr>
                      <tr onClick={() => {
                          this.openModal("hello3");
                      }}>
                        <td>03xbdahjfkavhbjnshvksbdzs</td>
                        <td>Chetan Mohamed</td>
                        <td>2012/02/01</td>
                        <td>Admin</td>
                      </tr>
                      <tr>
                        <td>03xbdahjfkavhbjnshvksbdzs</td>
                        <td>Derick Maximinus</td>
                        <td>2012/03/01</td>
                        <td>Member</td>
                      </tr>
                      <tr>
                        <td>03xbdahjfkavhbjnshvksbdzs</td>
                        <td>Friderik Dávid</td>
                        <td>2012/01/21</td>
                        <td>Staff</td>
                      </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
