import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from "reactstrap";

class CreateUserModal extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Modal
          isOpen={this.props.isCreateUserOpen}
          className={this.props.className}
          // size="lg"
        >
          <ModalHeader>
            <h1>Create a User</h1>
          </ModalHeader>
          <ModalBody>{this.props.createUserModalBody}</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.closeCreateUserModal}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateUserModal;
