import React,  {Component} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter, Row, Col} from 'reactstrap';
import {downloadFile} from '../../utils/fileIO';
import SaveIcon from "../../static/images/save.svg";

export default class SaveModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalToggle: false,
            fileName: ''
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.processFileName = this.processFileName.bind(this);
    }

    render(){
        return(
            <>
                <Button color="" onClick={() => {this.toggleModal()}}><img src={SaveIcon}/></Button>
                <Modal isOpen={this.state.modalToggle} toggle={this.toggleModal}>
                    <ModalBody>
                        <Input placeholder="File name" onChange={this.processFileName}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="" onClick = {() => {this.downloadFileHelper()}}>Save</Button>
                        <Button color="" onClick = {() => {this.toggleModal()}}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }

    toggleModal(){
        this.setState({modalToggle: !this.state.modalToggle});
    }

    processFileName(onChangeEvent){
        this.setState({fileName: onChangeEvent.target.value});
    }

    downloadFileHelper(){
        let fileText = this.buildJSON();
        downloadFile(fileText, this.state.fileName, "application/json");
    }

    buildJSON(){
        const blocks = this.props.workingBlocks;
        let fileText = `{\n "blocks": ${JSON.stringify(blocks)}\n}`;
        return fileText;
    }
}