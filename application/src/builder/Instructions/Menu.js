import React, {Component} from 'react';

import {Button, Card, Accordion, Container, Row, Col} from 'react-bootstrap';

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
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(RegisterDomain)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterDomain isWorkingBlock={false}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(Unregister)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <Unregister isWorkingBlock={false}/>
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
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(RegisterAccount)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterAccount isWorkingBlock={false}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(RegisterAsset)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <RegisterAsset isWorkingBlock={false}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(Unregister)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <Unregister isWorkingBlock={false}/>
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
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(MintAccount)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <MintAccount isWorkingBlock={false}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(Grant)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <Grant isWorkingBlock={false}/>
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
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(MintAsset)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <MintAsset isWorkingBlock={false}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(Transfer)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <Transfer isWorkingBlock={false}/>
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
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(FindBy)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <FindBy isWorkingBlock={false}/>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="primary" onClick={() => {this.props.addWorkingBlock(FindAll)}}>+</Button>
                                    </Col>
                                    <Col>
                                        <FindAll isWorkingBlock={false}/>
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

