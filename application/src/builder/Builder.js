import React, {Component} from 'react';

import {Container, Row, Col} from "reactstrap";

import Menu from "./Menu";

export default class Builder extends Component{
    render() {
        return(
            <div className="base">
                <Container className="builder">
                    <Row>
                        <Col className="instructions">
                            <p>INSTRUCTIONS</p>
                            <Menu/>
                        </Col>
                        <Col className="workbench">
                            <p>WORKBENCH</p>
                        </Col>
                        <Col className="code">
                            <p>CODE</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}