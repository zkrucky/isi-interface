import React, {Component} from 'react';

import {Input, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

export default class Mint extends Component{
    constructor(props){
        super(props);

        this.state = {
            dropdown: false,
            dropdown2: false,
            mintOrBurn: "MINT",
            toOrFrom: "to",
            amount: 0
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleSecondDropdown = this.toggleSecondDropdown.bind(this);
    }

    render() {
        return(
        <Container className="block">
            <Row>
                <Col>
                    <Dropdown isOpen={this.state.dropdown} toggle={this.toggleDropdown}>
                        <DropdownToggle caret>
                            {this.state.mintOrBurn}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => {this.setMintOrBurn("MINT"); this.setToOrFrom("TO")}}>MINT</DropdownItem>
                            <DropdownItem onClick={() => {this.setMintOrBurn("BURN"); this.setToOrFrom("FROM")}}>BURN</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col>
                    <Input placeholder="0" onChange={this.processAmountInput} value={this.state.amount}/>
                </Col>
                <Col>
                    <p className="vertical-center">{this.state.toOrFrom}</p>
                </Col>
                <Col>
                    <Dropdown isOpen={this.state.dropdown2} toggle={this.toggleSecondDropdown}>
                        <DropdownToggle caret>
                            ACCOUNT
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>ACCOUNT</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col>
                    <p className="vertical-center">X</p>
                </Col>
            </Row>
        </Container>
        );
    }

    toggleDropdown(){
        this.setState({dropdown: !this.state.dropdown});
    }

    toggleSecondDropdown(){
        this.setState({dropdown2: !this.state.dropdown2});
    }

    setMintOrBurn(mintOrBurn){
        this.setState({mintOrBurn: mintOrBurn});
    }

    setToOrFrom(toOrFrom){
        this.setState({toOrFrom: toOrFrom});
    }

    processAmountInput(onChangeEvent){
        const tempAmount = onChangeEvent.target.value;
        let amount = tempAmount;
        this.setState({amount: amount});
    }
}