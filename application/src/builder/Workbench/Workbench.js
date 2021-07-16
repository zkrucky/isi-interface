import React, { Component } from 'react';

import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

import WorkingBlocks from "./WorkingBlocks";
import SaveModal from "./SaveModal";
import TrashIcon from "../../static/images/trash.svg";
import SaveIcon from "../../static/images/save.svg";
import LoadIcon from "../../static/images/load.svg";


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
                <WorkingBlocks className="working-blocks" workingBlocks={this.props.workingBlocks} removeWorkingBlock={this.props.removeWorkingBlock} updateName={this.props.updateName}/>
                <div className="trash-button">
                    <SaveModal workingBlocks={this.props.workingBlocks}/>
                    <Button color=""><img src={LoadIcon}/></Button>
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
            </>
        );
    }

    toggleModal() {
        this.setState({ modalToggle: !this.state.modalToggle });
    }
}