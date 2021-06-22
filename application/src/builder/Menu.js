import React, {Component} from 'react';

import {Card, Accordion} from 'react-bootstrap';

import Register from "../blocks/domain/Register";
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
                        DOMAIN
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Register/>
                            <Mint/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        TRIGGERS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        COMPUTATIONS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        COMPOSITIONS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        VECTORS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        VARIABLES
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
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
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="7">
                        MISC
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                        <Card.Body>test</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

