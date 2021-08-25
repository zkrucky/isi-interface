import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class Transfer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            fromDropdownName: "account",
            toDropdownName: "account"
        }

        this.dropdownArray = [];

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
        this.processValue = this.processValue.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">transfer</p>
                    </Col>
                    <Col className="block-component">
                        <Input placeholder="0" onChange={this.processValue} />
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">from</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.fromDropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                {this.props.workingBlocks.map(block => this.generateDropdownArray(block))}
                                {this.dropdownArray.map(name => this.generateFromDropdownItems(name))}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">to</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                            <DropdownToggle caret>
                                {this.state.toDropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                {this.props.workingBlocks.map(block => this.generateDropdownArray(block))}
                                {this.dropdownArray.map(name => this.generateToDropdownItems(name))}
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

    setToDropdownName(name) {
        this.setState({ toDropdownName: name });
    }

    setFromDropdownName(name) {
        this.setState({ fromDropdownName: name });
    }

    processValue(onChangeEvent) {
        if (this.props.isWorkingBlock) {
            let value = onChangeEvent.target.value;
            this.props.workingBlocks[this.props.index].quantity = value;
            console.log(this.props.workingBlocks);
        }
    }

    generateDropdownArray(block) {
        if (this.props.isWorkingBlock) {
            if (block.component === "registeraccount" && block.name !== "" && !this.dropdownArray.includes(block.name + '@' + block.domainName)) {
                this.dropdownArray.push(block.name + '@' + block.domainName);
            }
        }
    }

    generateToDropdownItems(name) {
        return <DropdownItem onClick={() => { this.setToDropdownName(name); this.setToAccount(name) }}>{name}</DropdownItem>
    }

    generateFromDropdownItems(name) {
        return <DropdownItem onClick={() => { this.setFromDropdownName(name); this.setFromAccount(name) }}>{name}</DropdownItem>
    }

    setToAccount(name) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].asset_id_2 = name;
        }
    }

    setFromAccount(name) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].asset_id_1 = name;
        }
    }
}