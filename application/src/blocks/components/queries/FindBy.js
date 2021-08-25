import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class FindBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            dropdownName: "domain",
            dropdownName2: "name"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
        this.processSearchString = this.processSearchString.bind(this);
    }

    render() {
        let byBlock;
        switch (this.state.dropdownName) {
            case "domain":
                byBlock = <p className="vertical-center">name:</p>;
                break;
            case "accounts":
                byBlock = this.renderAccount();
                break;
            case "assets":
                byBlock = this.renderAsset();
                break;
            default:
                break;
        }
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">find</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                            <DropdownToggle caret>
                                {this.state.dropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { this.setDropdownName("domain"); this.setVariable("domain") }}>domain</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("accounts"); this.setVariable("account") }}>accounts</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("assets"); this.setVariable("asset") }}>assets</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">by</p>
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
                        <DropdownItem onClick={() => { this.setSecondDropdownName("name"); this.setSearchCondition("name") }}>name</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("domain"); this.setSearchCondition("domain") }}>domain</DropdownItem>
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
                        <DropdownItem onClick={() => { this.setSecondDropdownName("name"); this.setSearchCondition("name") }}>NAME</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("account"); this.setSearchCondition("account") }}>ACCOUNT</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("domain"); this.setSearchCondition("domain") }}>DOMAIN</DropdownItem>
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