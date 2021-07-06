import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class RegisterAsset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            assetName: "",
            assetValue: 0
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.processName = this.processName.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">REGISTER</p>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">ASSET</p>
                    </Col>
                    <Col className="block-component">
                        <Input placeholder="name" onChange={this.processName} />
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">TO</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                DOMAIN
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>DOMAIN</DropdownItem>
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

    setDropdownName(name) {
        this.setState({ dropdownName: name });
    }

    processName(onChangeEvent) {
        const input = onChangeEvent.target.value;
        let name = input;
        this.setState({ assetName: name });
        console.log(this.state.assetName);
    }
}