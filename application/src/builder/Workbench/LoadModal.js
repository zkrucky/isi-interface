import React,  {Component} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';
import LoadIcon from "../../static/images/load.svg";

export default class LoadModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalToggle: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    render(){
        return(
            <>
                <Button color="" onClick={() => {this.toggleModal()}}><img src={LoadIcon}/></Button>
                <Modal isOpen={this.state.modalToggle} toggle={this.toggleModal}>
                    <ModalBody>
                        <Button>Upload file</Button>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="">Load</Button>
                        <Button color="" onClick={() => {this.toggleModal()}}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }

    toggleModal(){
        this.setState({modalToggle: !this.state.modalToggle});
    }
}