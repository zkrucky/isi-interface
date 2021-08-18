import React, { Component } from 'react';

import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class FindAll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdownName: "DOMAINS"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">FIND</p>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">ALL</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.dropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setDropdownName("DOMAINS") }}>DOMAINS</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ACCOUNTS") }}>ACCOUNTS</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ASSETS") }}>ASSETS</DropdownItem>
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
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].variable = name.toLowerCase();
            this.setState({ dropdownName: name });
            console.log(this.props.workingBlocks);
        }
    }
}