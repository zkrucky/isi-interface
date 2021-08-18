import React, { Component } from 'react';

import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class Grant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            dropdownName: "ROLEID"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">GRANT</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.dropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setDropdownName("ROLEID") }}>ROLEID</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("PERMISSIONTOKEN") }}>PERMISSIONTOKEN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">TO</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                            <DropdownToggle caret>
                                ACCOUNT
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>ACCOUNT</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        );
    }

    toggleDropdown() {
        this.setState({ dropdown: !this.state.dropdown });
    }

    toggleSecondDropdown() {
        this.setState({ dropdown2: !this.state.dropdown2 });
    }

    setDropdownName(name) {
        this.setState({ dropdownName: name });
    }
}