import React, { Component } from 'react';

import { Button, Card, Accordion, Container, Row, Col } from 'react-bootstrap';

import RegisterAccount from "../../blocks/components/domain/RegisterAccount";
import RegisterAsset from "../../blocks/components/domain/RegisterAsset";
import Unregister from "../../blocks/components/world/Unregister";
import MintAsset from "../../blocks/components/asset/MintAsset";
import MintAccount from "../../blocks/components/account/MintAccount";
import Grant from "../../blocks/components/account/Grant";
import Transfer from "../../blocks/components/asset/Transfer";
import RegisterDomain from "../../blocks/components/world/RegisterDomain";
import FindAll from "../../blocks/components/queries/FindAll";
import FindBy from "../../blocks/components/queries/FindBy";
import { RegDomain, RegAccount, RegAsset, Unreg } from '../../blocks/objects/Blocks';

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            variables: [],
            isWorkingBlock: false
        }
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        WORLD
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(new RegDomain(this.props.getKey(5))) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterDomain workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(new Unreg(this.props.getKey(5))) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <Unregister workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        DOMAIN
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(new RegAccount(this.props.getKey(5))) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterAccount workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(new RegAsset(this.props.getKey(5))) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterAsset workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        ACCOUNT
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <MintAccount workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <Grant workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        ASSET
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <MintAsset workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <Transfer workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        QUERIES
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <FindBy workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <FindAll workingBlocks={[]} />
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

