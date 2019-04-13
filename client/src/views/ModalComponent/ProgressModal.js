import React, { Component } from 'react';
import { Modal, ModalHeader, ModalFooter, ModalBody, Button, Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade} from 'reactstrap';

class ProgressModal extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <Modal isOpen={this.props.isProgressModalOpen} className={this.props.className} size="lg">
              <ModalHeader>Batch Progress</ModalHeader>
              <ModalBody>
                  <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" sm="6" md="3">
                          <Card className="text-white bg-primary text-center">
                            <CardBody>
                              <blockquote className="card-bodyquote">
                                <p style={{fontWeight: 800, fontSize: 18}}>Manufacturer</p>
                                {this.props.progressModalBody[0]}
                                
                              </blockquote>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col xs="12" sm="6" md="3">
                          <Card className="text-white bg-success text-center">
                            <CardBody>
                              <blockquote className="card-bodyquote">
                                <p style={{fontWeight: 800, fontSize: 18}}>Logistics</p>
                                {this.props.progressModalBody[1]}
                                <footer></footer>
                              </blockquote>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col xs="12" sm="6" md="3">
                          <Card className="text-white bg-info text-center">
                            <CardBody>
                              <blockquote className="card-bodyquote">
                                <p style={{fontWeight: 800, fontSize: 18}}>Retailer</p>
                                {this.props.progressModalBody[2]}

                              </blockquote>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col xs="12" sm="6" md="3">
                          <Card className="text-white bg-warning text-center">
                            <CardBody>
                              <blockquote className="card-bodyquote">
                                <p style={{fontWeight: 800, fontSize: 18}}>End User</p>
                                {this.props.progressModalBody[3]}

                              </blockquote>
                            </CardBody>
                          </Card>
                        </Col>
                    </Row>
                  </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.props.closeProgressModal}>Close</Button>
              </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProgressModal;
