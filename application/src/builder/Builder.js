import React, {Component} from 'react';

import {Container, Row, Col} from "reactstrap";

import{DragDropContext} from "react-beautiful-dnd";

import Menu from "./Menu";
import Workbench from "./Workbench";

export default class Builder extends Component{
    onDragEnd = result => {
        //TODO
    };

    render() {
        return(
            <div className="base">
                <Container className="builder" fluid={true}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Row>
                            <Col className="instructions">
                                <p className="section-title">INSTRUCTIONS</p>
                                <Menu/>
                            </Col>
                            <Col className="workbench">
                                <p className="section-title">WORKBENCH</p>
                                <Workbench/>
                            </Col>
                        </Row>
                    </DragDropContext>
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