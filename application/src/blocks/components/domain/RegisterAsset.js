import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class RegisterAsset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdownName: "domain"
        }

        this.dropdownArray = [];

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.processName = this.processName.bind(this);
        this.generateDropdownArray = this.generateDropdownArray.bind(this);
        this.generateDropdownItems = this.generateDropdownItems.bind(this);
        this.setDomainName = this.setDomainName.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">register</p>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">asset</p>
                    </Col>
                    <Col className="block-component">
                        <Input placeholder="name" onChange={this.processName} />
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">to</p>
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

    processName(onChangeEvent) {
        if (this.props.isWorkingBlock) {
            const input = onChangeEvent.target.value;
            let name = input;
            this.props.workingBlocks[this.props.index].name = name;
            console.log(this.props.workingBlocks[this.props.index]);
        }
    }

    generateDropdownArray(block) {
        if (block.component.includes("domain") && block.name !== "" && !this.dropdownArray.includes(block.name)) {
            this.dropdownArray.push(block.name);
        }
    }

    generateDropdownItems(name) {
        return <DropdownItem onClick={() => { this.setDropdownName(name); this.setDomainName(name) }}>{name}</DropdownItem>
    }

    setDomainName(name) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].domainName = name;
            console.log(this.props.workingBlocks);
        }
    }
}