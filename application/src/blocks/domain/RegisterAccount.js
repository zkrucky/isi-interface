import React, {Component} from 'react';

import {Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

export default class RegisterAccount extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdown: false,
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
                    <p className="vertical-center">ACCOUNT</p>
                </Col>
                <Col>
                    <p className="vertical-center">NAMED</p>
                </Col>
                <Col>
                    <Input placeholder="account1"/>
                </Col>
                <Col>
                    <p className="vertical-center">AND</p>
                </Col>
                <Col>
                    <p className="vertical-center">KEY</p>
                </Col>
                <Col>
                    <Input placeholder="key"/>
                </Col>
                <Col>
                    <p className="vertical-center">TO</p>
                </Col>
                <Col>
                    <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                        <DropdownToggle caret>
                            DOMAIN
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>DOMAIN</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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