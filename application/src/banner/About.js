import React, {Component} from 'react';
import { Container, Button, Col, Row } from 'reactstrap';

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <Container>
                    <Row>
                        <Col>
                            <h2>HYPERLEDGER IROHA V2 SMART CONTRACTS WITH ISI</h2>
                            <p>Insert about text here</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}