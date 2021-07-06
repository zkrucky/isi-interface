import React, { Component } from 'react';

import { Container, Button, Row, Col } from 'reactstrap';

import RegisterAccount from "../../blocks/components/domain/RegisterAccount";
import RegisterAsset from "../../blocks/components/domain/RegisterAsset";
import Unregister from "../../blocks/components/domain/Unregister";
import MintAsset from "../../blocks/components/asset/MintAsset";
import MintAccount from "../../blocks/components/account/MintAccount";
import Grant from "../../blocks/components/account/Grant";
import Transfer from "../../blocks/components/asset/Transfer";
import RegisterDomain from "../../blocks/components/world/RegisterDomain";
import FindAll from "../../blocks/components/queries/FindAll";
import FindBy from "../../blocks/components/queries/FindBy";

export default class WorkingBlocks extends Component {
    constructor(props) {
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

    render() {
        return this.props.workingBlocks.map((Block, index) => {
            <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Row>
                    <Col className="vertical-center" xs="1">
                        <Button color="danger" onClick={() => { this.props.removeWorkingBlock(index) }}>X</Button>
                    </Col>
                    <Col>
                        <Block activeDomains={this.state.activeDomains} index={index} isWorkingBlock={true} />
                    </Col>
                </Row>
            </Container>
        }

        );
    }

    getKey(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({ currentKey: result });
        return result;
    }
}