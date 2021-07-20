import React,  {Component} from 'react';
import {Button, Input, Modal, ModalBody, ModalFooter} from 'reactstrap';
import LoadIcon from "../../static/images/load.svg";

export default class LoadModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalToggle: false,
            fileText: "",
            fileType: ""
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.processFileImport = this.processFileImport.bind(this);
        this.createBlocksFromImport = this.createBlocksFromImport.bind(this);
    }

    render(){
        return(
            <>
                <Button color="" onClick={() => {this.toggleModal()}}><img src={LoadIcon}/></Button>
                <Modal isOpen={this.state.modalToggle} toggle={this.toggleModal}>
                    <ModalBody>
                        <Input type="file" accept="application/json" onChange={(event) => this.processFileImport(event.target.files[0])}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="" disabled={!this.state.fileText} onClick={this.createBlocksFromImport}>Load</Button>
                        <Button color="" onClick={() => {this.toggleModal()}}>Close</Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }

    toggleModal(){
        this.setState({modalToggle: !this.state.modalToggle});
    }

    processFileImport(file){
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({fileType: file.type, fileText: reader.result});
        }
        reader.readAsText(file);
    }
}