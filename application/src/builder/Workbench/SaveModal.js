import React, { Component } from 'react';
import { Button, Input, Modal, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap';
import { downloadFile } from '../../utils/fileIO';
import SaveIcon from "../../static/images/save.svg";

export default class SaveModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalToggle: false,
            fileName: ''
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.processFileName = this.processFileName.bind(this);
    }

    render() {
        return (
            <>
                <Button color="" onClick={() => { this.toggleModal() }}><img src={SaveIcon} /></Button>
                <Modal isOpen={this.state.modalToggle} toggle={this.toggleModal}>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="fileName">File Name</Label>
                                <Input id="fileName" placeholder="File name" onChange={this.processFileName} />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="json"/>{' '}
                                        Save as JSON
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" id="bytes"/>{' '}
                                        Save as byte array
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="" onClick={() => { this.downloadFileHelper() }}>Save</Button>
                        <Button color="" onClick={() => { this.toggleModal() }}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }

    toggleModal() {
        this.setState({ modalToggle: !this.state.modalToggle });
    }

    processFileName(onChangeEvent) {
        this.setState({ fileName: onChangeEvent.target.value });
    }

    downloadFileHelper() {
        let format = this.getSelectedFormat();
        let fileText;
        switch(format) {
            case "json":
                fileText = this.buildJSON();
                downloadFile(fileText, this.state.fileName, "application/json");
                break;
            case "bytes":
                fileText = this.buildByteArray();
                downloadFile(fileText, this.state.fileName, "text/plain;charset=utf-8");
                break;
            default:
                break;
        }
    }

    getSelectedFormat(){
        const radios = document.getElementsByName("radio1");
        for (const rb of radios) {
            if(rb.checked) {
                return rb.id;
            }
        }
    }

    buildJSON() {
        const blocks = this.props.workingBlocks;
        let fileText = `{\n "blocks": ${JSON.stringify(blocks)}\n}`;
        return fileText;
    }

    buildByteArray() {
        const blocks = this.props.workingBlocks;
        let jsonstring = `{\n "blocks": ${JSON.stringify(blocks)}\n}`;
        let bytes = [];
        for (let i = 0; i < jsonstring.length; i++) {
            let code = jsonstring.charCodeAt(i);
            bytes = bytes.concat([code & 0xff, code / 256 >>> 0]);
        }
        return bytes;
    }
}