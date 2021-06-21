import React, {Component} from 'react';

import {Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

export default class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdownName: "ACCOUNT",
            dropdown: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    render() {
        return(
        <Container className="create">
            <Row>
                <Col>
                    <p>CREATE</p>
                </Col>
                <Col>
                    <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                        <DropdownToggle caret>
                            {this.state.dropdownName}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => {this.setDropdownName("ACCOUNT")}}>ACCOUNT</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("DOMAIN")}}>DOMAIN</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("PEER")}}>PEER</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("ASSET")}}>ASSET</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("SIGNATORY")}}>SIGNATORY</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col>
                    <p>NAMED</p>
                </Col>
                <Col>
                    <Input placeholder="variable1" />
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
}