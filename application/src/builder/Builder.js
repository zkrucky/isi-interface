import React, {Component} from 'react';

import {Container, Row, Col} from "reactstrap";

import{DragDropContext} from "react-beautiful-dnd";

import Menu from "./Menu";
import Workbench from "./Workbench";

export default class Builder extends Component{
    constructor(props){
        super(props);

        this.state = {
            workingBlocks: []
        }

        this.addWorkingBlock = this.addWorkingBlock.bind(this);
        this.removeWorkingBlock = this.removeWorkingBlock.bind(this);
    }

    render() {
        return(
            <div className="base">
                <Container className="builder" fluid={true}>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Row>
                            <Col className="instructions">
                                <p className="section-title">INSTRUCTIONS</p>
                                <Menu addWorkingBlock={this.addWorkingBlock} removeWorkingBlock={this.removeWorkingBlock}/>
                            </Col>
                            <Col className="workbench">
                                <p className="section-title">WORKBENCH</p>
                                <Workbench workingBlocks={this.state.workingBlocks}/>
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

    addWorkingBlock(block){
        let blocks = this.state.workingBlocks;
        blocks.push(block);
        this.setState({workingBlocks: blocks});
        console.log(this.state.workingBlocks);
    }

    removeWorkingBlock(index){
        let blocks = this.state.workingBlocks;
        blocks.splice(index, 1);
        this.setState({workingBlocks: blocks});
    }
}