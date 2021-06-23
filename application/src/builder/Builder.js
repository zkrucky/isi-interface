import React, {Component} from 'react';

import {Container, Row, Col} from "reactstrap";

import Menu from "./Menu";

export default class Builder extends Component{
    render() {
        return(
            <div className="base">
                <Container className="builder" fluid={true}>
                    <Row>
                        <Col className="instructions">
                            <p className="section-title">INSTRUCTIONS</p>
                            <Menu/>
                        </Col>
                        <Col className="workbench">
                            <p className="section-title">WORKBENCH</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col className="code">
                            <p className="section-title">CODE</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}