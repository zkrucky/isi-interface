import React, { Component } from 'react';

import { Button, Card, Accordion, Container, Row, Col } from 'react-bootstrap';

import RegisterAccount from "../../blocks/components/domain/RegisterAccount";
import RegisterAsset from "../../blocks/components/domain/RegisterAsset";
import Unregister from "../../blocks/components/domain/Unregister";
import MintAsset from "../../blocks/components/asset/MintAsset";
import MintAccount from "../../blocks/components/account/MintAccount";
import Grant from "../../blocks/components/account/Grant";
import Transfer from "../../blocks/components/asset/Transfer";
import RegisterDomain from "../../blocks/components/world/RegisterDomain";
import FindAll from "../../blocks/components/queries/FindAll";
import FindBy from "../../blocks/components/queries/FindBy";

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            variables: [],
            isWorkingBlock: false
        }

        this.registerdomain = {
            id: "",
            component: "registerdomain",
            name: ""
        }

        this.registeraccount = {
            id: "",
            component: "registeraccount",
            name: "",
            key: "",
            domainName: ""
        }

        this.registerasset = {
            id: "",
            component: "registerasset",
            name: "",
            domainName: ""
        }

        this.unregister = {
            id: "",
            component: "unregister",
            name: ""
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
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(this.registerdomain) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterDomain isWorkingBlock={false} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(this.unregister) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <Unregister isWorkingBlock={false} />
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
                                        <Button color="primary" onClick={() => { this.props.addWorkingBlock(this.registeraccount) }}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterAccount isWorkingBlock={false} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterAsset isWorkingBlock={false} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <Unregister isWorkingBlock={false} />
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
                                        <MintAccount isWorkingBlock={false} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <Grant isWorkingBlock={false} />
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
                                        <MintAsset isWorkingBlock={false} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <Transfer isWorkingBlock={false} />
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
                                        <FindBy isWorkingBlock={false} />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary">+</Button>
                                    </Col>
                                    <Col>
                                        <FindAll isWorkingBlock={false} />
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

