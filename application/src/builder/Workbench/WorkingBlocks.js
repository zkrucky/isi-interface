import React, {Component} from 'react';

import {Container, Button, Row, Col} from 'reactstrap';

import {Draggable} from 'react-beautiful-dnd';

export default class WorkingBlocks extends Component{
    constructor(props){
        super(props);

        this.state = {
            activeDomains: [],
            activeAccounts: [],
            activeAssets: [],
            currentKey: ''
        }

        this.getKey = this.getKey.bind(this);
        this.blockElement = React.createRef();   
    }

    render(){
        return(
            this.props.workingBlocks.map((Block, index) => {
                return(
                    <Draggable key={this.getKey(5)} draggableId={this.state.currentKey} index={index}>
                        {(provided) => (
                            <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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

    getKey(length){
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for(var i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({currentKey: result});
        return result;
    }
}