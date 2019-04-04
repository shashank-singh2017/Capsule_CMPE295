import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row, Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap';

class ModalComponent extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <Modal isOpen={this.props.isOpen} className={this.props.className}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                  {this.props.modalBody}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.props.closeModal}>Ok</Button>
              </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
