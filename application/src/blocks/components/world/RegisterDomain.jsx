import React, { Component } from 'react';

import { Input, Container, Row, Col } from "reactstrap";

export default class RegisterDomain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            domainName: "name"
        }

        this.processName = this.processName.bind(this);
    }

    render() {
        return (
            <Container className="block">
                <Row>
                    <Col className="block-component">
                        <p className="vertical-center">REGISTER</p>
                    </Col>
                    <Col className="block-component">
                        <p className="vertical-center">DOMAIN</p>
                    </Col>
                    <Col className="block-component">
                        <Input placeholder={this.state.domainName} onChange={this.processName} />
                    </Col>
                </Row>
            </Container>
        );
    }

    processName(onChangeEvent) {
        if (this.props.isWorkingBlock) {
            const input = onChangeEvent.target.value;
            let name = input;
            this.props.workingBlocks[this.props.index].name = name;
            this.setState({ domainName: name });
        }
    }
}