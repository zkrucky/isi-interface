import React, { Component } from 'react';

import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class Unregister extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdownName: "ACCOUNT"
        }

        this.dropdownArray = [];

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.generateDropdownArray = this.generateDropdownArray.bind(this);
        this.generateDropdownItems = this.generateDropdownItems.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">UNREGISTER</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.dropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                {this.props.workingBlocks.map(block => this.generateDropdownArray(block))}
                                {this.dropdownArray.map(name => this.generateDropdownItems(name))}
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

    generateDropdownArray(block) {
        if (this.props.isWorkingBlock) {
            if (block.component.includes("register") && block.name !== "" && !this.dropdownArray.includes(block.name)) {
                this.dropdownArray.push(block.name);
            }
        }
    }

    generateDropdownItems(name) {
        return <DropdownItem onClick={() => { this.setDropdownName(name) }}>{name}</DropdownItem>
    }
}