import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";

class CreateBatchModal extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Modal
          isOpen={this.props.isBatchModalOpen}
          className={this.props.className}
        >
          <ModalHeader>Create Batch</ModalHeader>
          <ModalBody>{this.props.batchModalBody}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.closeBatchModal}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateBatchModal;
