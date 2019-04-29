import React, { Component } from 'react';
import '../stylesheets/about-us.css';

import { Card, Col, Row, CardBody } from "reactstrap";

class AboutUs extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: 300, backgroundColor: '#fbf1fb'}}>
            <div>
                    <Row style={{height: 300, width: '98%', paddingLeft: '3%'}}>
                        <Col md="9">
                            <Card className="text-white bg-info" style={{height: 250}}>
                                <CardBody>
                                    <h2 style={{textAlign: 'left'}}>
                                        About Us
                                    </h2>
                                    <p style={{textAlign: 'left'}}>
                                        This is an application which aims at solving the problems of counterfeiting that happens in a Drug supply chain. We have four different types of users who can register to the application namely Manufacturer, Logistics, Retailer and End User.
                                        We have an admin module by which we can create batch containing the details of the drug and the four parties involved.
                                        As the batch progresses and the users involved verifies or declines the batch, the details will be visible to the users.
                                    </p>
                                    <p>
                                        The project is developed on Blockchain and we have used Ethereum and Solidity as the tech stack. The fron-end of the application is developed on React and Bootstrap.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="3">

                            <div className="image-box">
                            </div>


                        </Col>
                    </Row>

            </div>
      </div>
    );
  }
}

export default AboutUs;
