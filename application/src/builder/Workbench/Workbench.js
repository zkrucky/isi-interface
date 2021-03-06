import React, { Component } from 'react';

import { Button, Modal, ModalBody, ModalFooter, Row } from 'reactstrap';

import WorkingBlocks from "./WorkingBlocks";
import SaveModal from "./SaveModal";
import LoadModal from "./LoadModal";
import Execute from "./Execute";
import TrashIcon from "../../static/images/trash.svg";


export default class Workbench extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalToggle: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <>
            
                <p className="section-title">Workbench</p>
                <div className="button-row">
                    <SaveModal workingBlocks={this.props.workingBlocks} />
                    <LoadModal workingBlocks={this.props.workingBlocks} setBlocks={this.props.setBlocks} />
                    <Button color="" onClick={this.toggleModal}><img src={TrashIcon} /></Button>
                    <Modal isOpen={this.state.modalToggle} toggle={this.toggleModal}>
                        <ModalBody>
                            Are you sure you want to clear the workbench? All work will be erased.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="" onClick={() => { this.toggleModal(); this.props.clearBlocks() }}>Delete All</Button>
                            <Button color="" onClick={() => { this.toggleModal() }}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                <WorkingBlocks className="working-blocks" workingBlocks={this.props.workingBlocks} removeWorkingBlock={this.props.removeWorkingBlock} updateName={this.props.updateName} />
            </>
        );
    }

    toggleModal() {
        this.setState({ modalToggle: !this.state.modalToggle });
    }
}