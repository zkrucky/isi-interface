import React, { Component } from 'react';

import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class MintAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            dropdown3: false,
            mintOrBurn: "MINT",
            toOrFrom: "TO",
            dropdownName: "PUBLICKEY"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
        this.toggleThirdDropdown = this.toggleThirdDropdown.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.mintOrBurn}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setMintOrBurn("MINT"); this.setToOrFrom("TO") }}>MINT</DropdownItem>
                                <DropdownItem onClick={() => { this.setMintOrBurn("BURN"); this.setToOrFrom("FROM") }}>BURN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                            <DropdownToggle caret>
                                {this.state.dropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setDropdownName("PUBLICKEY") }}>PUBLICKEY</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("SIGNATURECHECKCONDITION") }}>SIGNATURECHECKCONDITION</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">{this.state.toOrFrom}</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown3} toggle={this.toggleThirdDropdown}>
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

    toggleThirdDropdown() {
        this.setState({ dropdown3: !this.state.dropdown3 });
    }

    setMintOrBurn(mintOrBurn) {
        this.setState({ mintOrBurn: mintOrBurn });
    }

    setToOrFrom(toOrFrom) {
        this.setState({ toOrFrom: toOrFrom });
    }

    setDropdownName(name) {
        this.setState({ dropdownName: name });
    }
}