import React, {Component} from 'react';

import {Button, Card, Accordion} from 'react-bootstrap';

import RegisterAccount from "../../blocks/domain/RegisterAccount";
import RegisterAsset from "../../blocks/domain/RegisterAsset";
import Unregister from "../../blocks/domain/Unregister";
import MintAsset from "../../blocks/asset/MintAsset";
import MintAccount from "../../blocks/account/MintAccount";
import Grant from "../../blocks/account/Grant";
import Transfer from "../../blocks/asset/Transfer";
import RegisterDomain from "../../blocks/world/RegisterDomain";
import FindAll from "../../blocks/queries/FindAll";
import FindBy from "../../blocks/queries/FindBy";

export default class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            variables: [],
            isWorkingBlock: false
        }
    }

    render(){
        return(
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        WORLD
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <RegisterDomain addWorkingBlock={this.props.addWorkingBlock} isWorkingBlock={this.state.isWorkingBlock} setIsWorkingBlock={this.props.setIsWorkingBlock}/>
                            <Unregister addWorkingBlock={this.props.addWorkingBlock}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        DOMAIN
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <RegisterAccount/>
                            <RegisterAsset/>
                            <Unregister/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        ACCOUNT
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <MintAccount/>
                            <Grant/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        ASSET
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <MintAsset/>
                            <Transfer/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        QUERIES
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <FindBy/>
                            <FindAll/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

