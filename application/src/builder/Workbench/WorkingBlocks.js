import React, {Component} from 'react';

import {Container, Button, Row, Col} from 'reactstrap';

import {Draggable} from 'react-beautiful-dnd';

export default class WorkingBlocks extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeDomains: [],
            activeAccounts: [],
            activeAssets: []
        }

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.blockElement = React.createRef();   
    }

    render(){
        return(
            this.props.workingBlocks.map((Block, index) => {
                return(
                    <Draggable key={this.getKey} draggableId={this.geKey} index={index}>
                        {(provided) => (
                            <Container key={this.getKey} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                <Row>
                                    <Col className="vertical-center" xs="1">
                                        <Button color="danger" onClick={() => {this.props.removeWorkingBlock(index)}}>X</Button>
                                    </Col>
                                    <Col>
                                        <Block activeDomains={this.state.activeDomains} index={index} isWorkingBlock={true}/>
                                    </Col>
                                </Row>
                            </Container>
                        )}
                    </Draggable>
                );
            })
        );
    }

    getKey(){
        return this.keyCount++;
    }
}