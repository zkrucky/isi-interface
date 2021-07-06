import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class FindBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            dropdownName: "DOMAIN",
            dropdownName2: "ID"
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
    }

    render() {
        let byBlock;
        switch (this.state.dropdownName) {
            case "DOMAIN":
                byBlock = <p className="vertical-center">NAME:</p>;
                break;
            case "ROLES":
                byBlock = <p className="vertical-center">ACCOUNTID:</p>;
                break;
            case "PERMISSIONTOKENS":
                byBlock = <p className="vertical-center">ACCOUNTID:</p>
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
                                <DropdownItem onClick={() => { this.setDropdownName("DOMAIN") }}>DOMAIN</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ACCOUNTS") }}>ACCOUNTS</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ROLES") }}>ROLES</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("PERMISSIONTOKENS") }}>PERMISSIONTOKENS</DropdownItem>
                                <DropdownItem onClick={() => { this.setDropdownName("ASSETS") }}>ASSETS</DropdownItem>
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
                        <Input />
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
                        <DropdownItem onClick={() => { this.setSecondDropdownName("ID") }}>ID</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("NAME") }}>NAME</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("DOMAINNAME") }}>DOMAINNAME</DropdownItem>
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
                        <DropdownItem onClick={() => { this.setSecondDropdownName("ID") }}>ID</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("NAME") }}>NAME</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("ACCOUNTID") }}>ACCOUNTID</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("ASSETDEFINITIONID") }}>ASSETDEFINITIONID</DropdownItem>
                        <DropdownItem onClick={() => { this.setSecondDropdownName("DOMAINNAME") }}>DOMAINNAME</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </>
        );
    }
}