import React, {Component} from 'react';

import {Container, Row, Col} from "reactstrap";

import{DragDropContext, Droppable} from "react-beautiful-dnd";

import Menu from "./Instructions/Menu";
import Workbench from "./Workbench/Workbench";

export default class Builder extends Component{
    constructor(props){
        super(props);

        this.state = {
            workingBlocks: []
        }

        this.addWorkingBlock = this.addWorkingBlock.bind(this);
        this.removeWorkingBlock = this.removeWorkingBlock.bind(this);
        this.clearBlocks = this.clearBlocks.bind(this);
    }

    render() {
        return(
            <div className="base">
                <Container className="builder" fluid={true}>
                        <Row>
                            <Col className="instructions">
                                <p className="section-title">INSTRUCTIONS</p>
                                <Menu addWorkingBlock={this.addWorkingBlock}/>
                            </Col>
                            <DragDropContext>
                                <Droppable droppableId="working-blocks">
                                    {(provided) => (
                                        <Col className="workbench working-blocks" {...provided.droppableProps} ref={provided.innerRef}>
                                            <p className="section-title">WORKBENCH</p>
                                            <Workbench workingBlocks={this.state.workingBlocks} removeWorkingBlock={this.removeWorkingBlock} clearBlocks={this.clearBlocks}/>
                                        </Col>
                                    )}
                                </Droppable>
                            </DragDropContext>
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

    clearBlocks(){
        this.setState({workingBlocks: []});
    }
}