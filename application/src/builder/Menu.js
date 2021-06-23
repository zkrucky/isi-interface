import React, {Component} from 'react';

import {Card, Accordion} from 'react-bootstrap';

import Register from "../blocks/domain/RegisterAccount";
import Unregister from "../blocks/domain/Unregister";
import Mint from "../blocks/domain/Mint";

export default class Menu extends Component{

    constructor(props){
        super(props);

        this.state={
            variables: []
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
                            <Register/>
                            <Unregister/>
                            <Mint/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        DOMAIN
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        ACCOUNT
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        ASSET
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        QUERIES
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

