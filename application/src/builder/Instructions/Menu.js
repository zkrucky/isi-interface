import React, { Component } from 'react';

import { Button, Card, Accordion, Container, Row, Col } from 'react-bootstrap';

import RegisterAccount from "../../blocks/components/domain/RegisterAccount";
import RegisterAsset from "../../blocks/components/domain/RegisterAsset";
import Unregister from "../../blocks/components/world/Unregister";
import MintAsset from "../../blocks/components/asset/MintAsset";
import Transfer from "../../blocks/components/asset/Transfer";
import RegisterDomain from "../../blocks/components/world/RegisterDomain";
import FindAll from "../../blocks/components/queries/FindAll";
import FindBy from "../../blocks/components/queries/FindBy";
import { RegDomainObj, RegAccountObj, RegAssetObj, UnregObj, MintAssetObj, TransferObj, FindAllObj, FindByObj } from '../../blocks/objects/Blocks';
import AddIcon from "../../static/images/add.svg";
import CaretIcon from "../../static/images/caret.svg";

export default class Menu extends Component {

    render() {
        return (
            <>
                <p className="section-title">Instructions</p>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                            world
                            <img src={CaretIcon} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Container>
                                    <div className="block">
                                        <Row>
                                            <Col className="block-button vertical-center" xs="1">
                                                <Button variant="light" onClick={() => { this.props.addWorkingBlock(new UnregObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                            </Col>
                                            <Col>
                                                <Unregister workingBlocks={[]} isWorkingBlock={false} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            domain
                            <img src={CaretIcon} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Container>
                                    <div className="block">
                                        <Row>
                                            <Col className="block-button vertical-center" xs="1">
                                                <Button variant="light" onClick={() => { this.props.addWorkingBlock(new RegDomainObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                            </Col>
                                            <Col>
                                                <RegisterDomain workingBlocks={[]} isWorkingBlock={false} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            account
                            <img src={CaretIcon} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Container>
                                    <div className="block">
                                        <Row>
                                            <Col className="block-button vertical-center" xs="1">
                                                <Button variant="light" onClick={() => { this.props.addWorkingBlock(new RegAccountObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                            </Col>
                                            <Col>
                                                <RegisterAccount workingBlocks={[]} isWorkingBlock={false} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                                <Container>
                                    <div className="block">
                                        <Row>
                                            <Col className="block-button vertical-center" xs="1">
                                                <Button variant="light" onClick={() => { this.props.addWorkingBlock(new TransferObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                            </Col>
                                            <Col>
                                                <Transfer workingBlocks={[]} isWorkingBlock={false} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            asset
                            <img src={CaretIcon} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                <Container>
                                    <div className="block">
                                        <Row>
                                            <Col className="block-button vertical-center" xs="1">
                                                <Button variant="light" onClick={() => { this.props.addWorkingBlock(new RegAssetObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                            </Col>
                                            <Col>
                                                <RegisterAsset workingBlocks={[]} isWorkingBlock={false} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                                <Container>
                                    <div className="block">
                                        <Row>
                                            <Col className="block-button vertical-center" xs="1">
                                                <Button variant="light" onClick={() => { this.props.addWorkingBlock(new MintAssetObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                            </Col>
                                            <Col>
                                                <MintAsset workingBlocks={[]} isWorkingBlock={false} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            queries
                            <img src={CaretIcon} />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <Row>
                                    <Container>
                                        <div className="block">
                                            <Row>
                                                <Col className="block-button vertical-center" xs="1">
                                                    <Button variant="light" onClick={() => { this.props.addWorkingBlock(new FindByObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                                </Col>
                                                <Col>
                                                    <FindBy workingBlocks={[]} isWorkingBlock={false} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </Row>
                                <Row>
                                    <Container>
                                        <div className="block">
                                            <Row>
                                                <Col className="block-button vertical-center" xs="1">
                                                    <Button variant="light" onClick={() => { this.props.addWorkingBlock(new FindAllObj(this.props.getKey(5))) }}><img src={AddIcon} /></Button>
                                                </Col>
                                                <Col>
                                                    <FindAll workingBlocks={[]} isWorkingBlock={false} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Container>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        );
    }
}

