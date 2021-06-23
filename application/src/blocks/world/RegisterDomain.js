import React, {Component} from 'react';

import {Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

export default class RegisterAsset extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdown: false,
            dropdownName: "DOMAIN"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    render() {
        return(
        <Container className="block">
            <Row>
                <Col>
                    <p className="vertical-center">REGISTER</p>
                </Col>
                <Col>
                    <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                        <DropdownToggle caret>
                            {this.state.dropdownName}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => {this.setDropdownName("DOMAIN")}}>DOMAIN</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("PEER")}}>PEER</DropdownItem>
                            <DropdownItem onClick={() => {this.setDropdownName("ROLE")}}>ROLE</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col>
                    <p className="vertical-center">NAMED</p>
                </Col>
                <Col>
                    <Input placeholder="variable1"/>
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
}