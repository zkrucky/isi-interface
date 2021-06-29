import React, {Component} from 'react';

import {Container, Button, Row, Col} from 'reactstrap';

export default class WorkingBlocks extends Component{
    constructor(props){
        super(props);
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
        this.blockElement = React.createRef();   
    }

    render(){
        return this.props.workingBlocks.map((Block, index) =>
            <Container key={this.getKey}>
                <Row>
                    <Col className="vertical-center" xs="1">
                        <Button color="danger" onClick={() => {this.props.removeWorkingBlock(index)}}>X</Button>
                    </Col>
                    <Col>
                        <Block/>
                    </Col>
                </Row>
            </Container>
        );
    }

    getKey(){
        return this.keyCount++;
    }
}