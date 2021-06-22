import React, {Component} from 'react';

import {Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

export default class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdownName: "ACCOUNT",
            dropdown: false,
            tempVariable: {
                type: "",
                name: ""
            }
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    render() {
        return(
        <Container className="block">
            <Row>
                <Col>
                    <p className="vertical-center">CREATE</p>
                </Col>
                <Col>
                    <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                        <DropdownToggle caret>
                            {this.state.dropdownName}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => {this.setDropdownName("ACCOUNT"); this.setVariableType("account")}}>ACCOUNT</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("DOMAIN"); this.setVariableType("domain")}}>DOMAIN</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("PEER"); this.setVariableType("peer")}}>PEER</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("ASSET"); this.setVariableType("asset")}}>ASSET</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("SIGNATORY"); this.setVariableType("signatory")}}>SIGNATORY</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col>
                    <p className="vertical-center">NAMED</p>
                </Col>
                <Col>
                    <Input placeholder="variable1" onChange={this.processNameInput} value={this.state.tempVariable.name}/>
                </Col>
                <Col>
                    <p className="vertical-center">X</p>
                </Col>
            </Row>
        </Container>
        );
    }

    toggleDropdown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    setDropdownName(name){
        this.setState({dropdownName: name});
    }

    setVariableType(type){
        this.setState({tempVariable: {type: type}});
    }

    processNameInput(onChangeEvent){
        const input = onChangeEvent.target.value;
        let name = input;
        this.setState({tempVariable: {name: name}});
    }
}