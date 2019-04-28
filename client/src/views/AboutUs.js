import React, { Component } from 'react';
import '../stylesheets/about-us.css';

import { Card, Col, Row, CardBody } from "reactstrap";

class AboutUs extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: 300, backgroundColor: '#fbf1fb'}}>
            <div>
                    <Row style={{height: 300}}>
                        <Col md="9">
                            <Card className="text-white bg-info" style={{height: 250}}>
                                <CardBody style={{backgroundColor: 'gray'}}>
                                    <h2 style={{textAlign: 'left'}}>
                                        About Us
                                    </h2>
                                    <p style={{textAlign: 'left'}}>
                                        This is an application which is developed with blockchain.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="3">
                            <Card className="text-white bg-info" style={{height: 300}}>
                                <CardBody>
                                    <div className="image-box">
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

            </div>
      </div>
    );
  }
}

export default AboutUs;
