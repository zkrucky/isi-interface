import React, { Component } from 'react';

import { Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export default class MintAsset extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            assetDropdownName: "ASSET",
            dropdown3: false,
            accountDropdownName: "ACCOUNT",
            mintOrBurn: "MINT",
            toOrFrom: "TO"
        }

        this.assetDropdownArray = [];
        this.accountDropdownArray = [];

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
        this.toggleThirdDropdown = this.toggleThirdDropdown.bind(this);
        this.setAccountDropdownName = this.setAccountDropdownName.bind(this);
        this.setAssetDropdownName = this.setAssetDropdownName.bind(this);
        this.processValue = this.processValue.bind(this);
        this.generateDropdownArray = this.generateDropdownArray.bind(this);
        this.generateAssetDropdownItems = this.generateAssetDropdownItems.bind(this);
        this.generateAccountDropdownItems = this.generateAccountDropdownItems.bind(this);
        this.setAssetID = this.setAssetID.bind(this);
        this.setAccountID = this.setAccountID.bind(this);
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
                                <DropdownItem onClick={() => { this.setMintOrBurn("MINT"); this.setToOrFrom("TO"); this.setMintOrBurnObj("mint") }}>MINT</DropdownItem>
                                <DropdownItem onClick={() => { this.setMintOrBurn("BURN"); this.setToOrFrom("FROM"); this.setMintOrBurnObj("burn") }}>BURN</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <Input placeholder="0" onChange={this.processValue} />
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">{this.state.toOrFrom}</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                            <DropdownToggle caret>
                                {this.state.assetDropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                {this.props.workingBlocks.map(block => this.generateDropdownArray(block))}
                                {this.assetDropdownArray.map(name => this.generateAssetDropdownItems(name))}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">IN</p>
                    </Col>
                    <Col className="block-component">
                        <Dropdown isOpen={this.state.dropdown3} toggle={this.toggleThirdDropdown}>
                            <DropdownToggle caret>
                                {this.state.accountDropdownName}
                            </DropdownToggle>
                            <DropdownMenu>
                                {this.props.workingBlocks.map(block => this.generateDropdownArray(block))}
                                {this.accountDropdownArray.map(name => this.generateAccountDropdownItems(name))}
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

    setAssetDropdownName(name) {
        this.setState({ assetDropdownName: name });
    }

    setAccountDropdownName(name) {
        this.setState({ accountDropdownName: name });
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
            if (block.component === "registerasset" && block.name !== "" && !this.assetDropdownArray.includes(block.name + '#' + block.domainName)) {
                this.assetDropdownArray.push(block.name + '#' + block.domainName);
            }
            if (block.component === "registeraccount" && block.name !== "" && !this.accountDropdownArray.includes(block.name + '@' + block.domainName)) {
                this.accountDropdownArray.push(block.name + '@' + block.domainName);
            }
        }
    }

    generateAssetDropdownItems(name) {
        return <DropdownItem onClick={() => { this.setAssetDropdownName(name); this.setAssetID(name) }}>{name}</DropdownItem>
    }

    generateAccountDropdownItems(name) {
        return <DropdownItem onClick={() => { this.setAccountDropdownName(name); this.setAccountID(name) }}>{name}</DropdownItem>
    }

    setAssetID(name) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].asset_id = name;
        }
    }

    setAccountID(name) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].account_id = name;
        }
    }

    setMintOrBurnObj(mintOrBurn) {
        if (this.props.isWorkingBlock) {
            this.props.workingBlocks[this.props.index].mintOrBurn = mintOrBurn;
        }
    }
}