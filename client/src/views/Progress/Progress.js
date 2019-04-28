import React, { Component } from "react";
import storage from "../../storage";
import web3 from "../../web3";
import { Row, Col, Card, CardHeader, CardBody, Container } from "reactstrap";

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

  render() {
    return (
      <div className="animated fadeIn">
            <Row>
                <Col xs="12" sm="12" md="12">
                    <Row>
                        <Col xs="1" sm="1" md="1">
                        </Col>
                        <Col xs="10" sm="10" md="9">
                            <Card className="text-white bg-info" style={{minHeight: 250}}>
                              <CardHeader>
                                Manufacturer
                              </CardHeader>
                              <CardBody style={{backgroundColor: 'gray'}}>

                                  <Row>
                                      <Col md="4">
                                         Product Id
                                      </Col>
                                      <Col md="8">
                                        P1265
                                      </Col>
                                  </Row>

                                  <Row>
                                      <Col md="4">
                                         Manufacturer Reg. No.
                                      </Col>
                                      <Col md="8">
                                        M1234
                                      </Col>
                                  </Row>

                                  <Row>
                                      <Col md="4">
                                         Manufacturer Name
                                      </Col>
                                      <Col md="8">
                                        ABC Pharma
                                      </Col>
                                  </Row>

                                  <Row>
                                      <Col md="4">
                                         Manufacturer Address
                                      </Col>
                                      <Col md="8">
                                         1318 The Alameda
                                      </Col>
                                  </Row>

                                  <Row>
                                      <Col md="4">
                                         Type Of Drug
                                      </Col>
                                      <Col md="8">
                                        M1234
                                      </Col>
                                  </Row>

                                  <Row>
                                      <Col md="4">
                                         Logistics Handler
                                      </Col>
                                      <Col md="8">
                                        Star Logistics
                                      </Col>
                                  </Row>

                                  <Row>
                                      <Col md="4">
                                         Lab Test Results
                                      </Col>
                                      <Col md="8">
                                        Verified
                                      </Col>
                                  </Row>

                              </CardBody>
                            </Card>
                        </Col>
                        <Col xs="1" sm="1" md="2" style={{marginTop: "15%"}}>
                            <i
                              className="fa fa-check-circle fa-3x"
                              style={{ marginTop: 0, color: 'green', marginLeft: '20%' }}
                            />
                        </Col>

                    </Row>
                </Col>

                <Col md="12" style={{textAlign: 'center'}}>
                    <i
                      className="fa fa-arrow-down fa-3x"
                      style={{ marginTop: 0, marginRight: '5%'}}
                    />

                </Col>

                <Col xs="12" sm="12" md="12" style={{marginTop: '3%'}}>
                    <Row>
                        <Col xs="1" sm="1" md="1">
                        </Col>
                        <Col xs="10" sm="10" md="9">
                            <Card className="text-white bg-info" style={{minHeight: 250}}>
                              <CardHeader>
                                Logistics
                              </CardHeader>
                              <CardBody style={{backgroundColor: 'gray'}}>

                              <Row>
                                  <Col md="4">
                                     Product Id
                                  </Col>
                                  <Col md="8">
                                    P1234
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Destination Name
                                  </Col>
                                  <Col md="8">
                                     Small Retailer
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Destination Address
                                  </Col>
                                  <Col md="8">
                                    A334, San Francisco
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Shipment Number
                                  </Col>
                                  <Col md="8">
                                    Ad3547
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Quantity
                                  </Col>
                                  <Col md="8">
                                     13
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Departure Time
                                  </Col>
                                  <Col md="8">
                                    5:20 PM
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Estimated Arrival Time
                                  </Col>
                                  <Col md="8">
                                     12:30 PM
                                  </Col>
                              </Row>

                              </CardBody>
                            </Card>
                        </Col>
                        <Col xs="1" sm="1" md="2" style={{marginTop: "15%"}}>
                            <i
                              className="fa fa-check-circle fa-3x"
                              style={{ marginTop: 0, color: 'green', marginLeft: '20%' }}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col md="12" style={{textAlign: 'center'}}>
                    <i
                      className="fa fa-arrow-down fa-3x"
                      style={{ marginTop: 0, marginRight: '5%'}}
                    />

                </Col>

                <Col xs="12" sm="12" md="12" style={{marginTop: '3%'}}>
                    <Row>
                        <Col xs="1" sm="1" md="1">
                        </Col>
                        <Col xs="10" sm="10" md="9">
                            <Card className="text-white bg-info" style={{minHeight: 250}}>
                              <CardHeader>
                                Retailer
                              </CardHeader>
                              <CardBody style={{backgroundColor: 'gray'}}>

                              <Row>
                                  <Col md="4">
                                     Product Id
                                  </Col>
                                  <Col md="8">
                                    P1234
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Arrival Time
                                  </Col>
                                  <Col md="8">
                                     1:00 PM
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Quantity
                                  </Col>
                                  <Col md="8">
                                    13
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Shipment Number
                                  </Col>
                                  <Col md="8">
                                    Ad3547
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Warehouse Name
                                  </Col>
                                  <Col md="8">
                                     13
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Damaged Items
                                  </Col>
                                  <Col md="8">
                                    No
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Damaged Items Qty.
                                  </Col>
                                  <Col md="8">
                                     0
                                  </Col>
                              </Row>

                              </CardBody>
                            </Card>
                        </Col>
                        <Col xs="1" sm="1" md="2" style={{marginTop: "15%"}}>
                            <i
                              className="fa fa-check-circle fa-3x"
                              style={{ marginTop: 0, color: 'green', marginLeft: '20%' }}
                            />
                        </Col>

                    </Row>
                </Col>

                <Col md="12" style={{textAlign: 'center'}}>
                    <i
                      className="fa fa-arrow-down fa-3x"
                      style={{ marginTop: 0, marginRight: '5%'}}
                    />

                </Col>

                <Col xs="12" sm="12" md="12" style={{marginTop: '3%'}}>
                    <Row>
                        <Col xs="1" sm="1" md="1">
                        </Col>
                        <Col xs="10" sm="10" md="9">
                            <Card className="text-white bg-info" style={{minHeight: 250}}>
                              <CardHeader>
                                End User
                              </CardHeader>
                              <CardBody style={{backgroundColor: 'gray'}}>
                              <Row>
                                  <Col md="4">
                                     Product Id
                                  </Col>
                                  <Col md="8">
                                    P1234
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Drug Name
                                  </Col>
                                  <Col md="8">
                                     1:00 PM
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Quantity
                                  </Col>
                                  <Col md="8">
                                    13
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Arrival Time
                                  </Col>
                                  <Col md="8">
                                    12: 50
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Product Rating
                                  </Col>
                                  <Col md="8">
                                     4.7
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Delivery Rating
                                  </Col>
                                  <Col md="8">
                                    4.5
                                  </Col>
                              </Row>

                              <Row>
                                  <Col md="4">
                                     Feedback Comments
                                  </Col>
                                  <Col md="8">
                                     Good Service.
                                  </Col>
                              </Row>
                              </CardBody>
                            </Card>
                        </Col>
                        <Col xs="1" sm="1" md="2" style={{marginTop: "15%"}}>
                            <i
                              className="fa fa-check-circle fa-3x"
                              style={{ marginTop: 0, color: 'green', marginLeft: '20%' }}
                            />
                        </Col>

                    </Row>
                </Col>

            </Row>
      </div>
    );
  }
}

export default VerifyBatchUser;