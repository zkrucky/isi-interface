import React, { Component } from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import ShareIcon from "../../static/images/share.svg";

export default class Serialize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalToggle: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return(
            <>
                <Button color="" onClick={() => {this.toggleModal()}}><img src={ShareIcon}/></Button>
                <Modal isOpen={this.state.modalToggle} toggle={this.toggleModal}>
                    <ModalBody>
                        Would you like to submit your ISI to the ledger?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="">Submit</Button>
                        <Button color="" onClick = {() => {this.toggleModal()}}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }

    toggleModal(){
        this.setState({modalToggle: !this.state.modalToggle});
    }
}