import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class FindBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            dropdownName: "DOMAIN",
            dropdownName2: "NAME"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
        this.processSearchString = this.processSearchString.bind(this);
    }

    render() {
        let byBlock;
        switch (this.state.dropdownName) {
            case "DOMAIN":
                byBlock = <p className="vertical-center">NAME:</p>;
                break;
            case "ACCOUNTS":
                byBlock = this.renderAccount();
                break;
            case "ASSETS":
                byBlock = this.renderAsset();
                break;
        }
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">FIND</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.dropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setDropdownName("DOMAIN"); this.setVariable("domain") }}>DOMAIN</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ACCOUNTS"); this.setVariable("account") }}>ACCOUNTS</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ASSETS"); this.setVariable("asset") }}>ASSETS</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">BY</p>
                    </Col>
                    <Col className="block-component">
                        {byBlock}
                    </Col>
                    <Col className="block-component">
                        <Input onChange={this.processSearchString} />
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

    setSecondDropdownName(name) {
        this.setState({ dropdownName2: name });
    }

    renderAccount() {
        return (
            <>
                <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                    <DropdownToggle caret>
                        {this.state.dropdownName2}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("NAME"); this.setSearchCondition("name") }}>NAME</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("DOMAIN"); this.setSearchCondition("domain") }}>DOMAIN</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }

    renderAsset() {
        return (
            <>
                <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                    <DropdownToggle caret>
                        {this.state.dropdownName2}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("NAME"); this.setSearchCondition("name") }}>NAME</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("ACCOUNT"); this.setSearchCondition("account") }}>ACCOUNT</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("DOMAIN"); this.setSearchCondition("domain") }}>DOMAIN</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }

    processSearchString(onChangeEvent) {
        if (this.props.isWorkingBlock) {
            const input = onChangeEvent.target.value;
            let name = input;
            this.props.workingBlocks[this.props.index].searchString = name;
            console.log(this.props.workingBlocks);
        }
    }

    setSearchCondition(condition) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].searchCondition = condition;
        }
    }

    setVariable(variable) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].variable = variable;
        }
    }
}