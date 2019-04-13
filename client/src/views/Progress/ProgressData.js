import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class ProgressData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-primary text-center">
                <CardBody>
                  <blockquote className="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-success text-center">
                <CardBody>
                  <blockquote className="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-info text-center">
                <CardBody>
                  <blockquote className="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6" md="3">
              <Card className="text-white bg-warning text-center">
                <CardBody>
                  <blockquote className="card-bodyquote">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                  </blockquote>
                </CardBody>
              </Card>
            </Col>
        </Row>
      </div>
    );
  }
}

export default ProgressData;
