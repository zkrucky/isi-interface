import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Button } from 'react-bootstrap';

import RegisterAccount from "../../blocks/components/domain/RegisterAccount";
import RegisterAsset from "../../blocks/components/domain/RegisterAsset";
import Unregister from "../../blocks/components/world/Unregister";
import MintAsset from "../../blocks/components/asset/MintAsset";
import Transfer from "../../blocks/components/asset/Transfer";
import RegisterDomain from "../../blocks/components/world/RegisterDomain";
import FindAll from "../../blocks/components/queries/FindAll";
import FindBy from "../../blocks/components/queries/FindBy";

import XIcon from "../../static/images/x.svg";

export default class WorkingBlocks extends Component {
    constructor(props) {
        super(props);

        this.currentKey = "";

        this.getKey = this.getKey.bind(this);
        this.getBlockComponent = this.getBlockComponent.bind(this);
    }

    render() {
        return this.props.workingBlocks.map((block, index) =>
            <Row>
                <Container key={block.id}>
                    <div className="block">
                        <Row>
                            <Col className="block-button vertical-center" xs="1">
                                <Button variant="light" onClick={() => { this.props.removeWorkingBlock(index) }}><img src={XIcon}/></Button>
                            </Col>
                            <Col>
                                {this.getBlockComponent(block, index)}
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Row>
        );
    }

    getKey(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.currentKey = result;
        return result;
    }

    getBlockComponent(block, index) {
        switch (block.component) {
            case 'registeraccount':
                return <RegisterAccount index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'registerdomain':
                return <RegisterDomain index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'registerasset':
                return <RegisterAsset index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'unregister':
                return <Unregister index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'mintasset':
                return <MintAsset index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'transfer':
                return <Transfer index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'findall':
                return <FindAll index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            case 'findby':
                return <FindBy index={index} workingBlocks={this.props.workingBlocks} isWorkingBlock={true} />
            default:
                break;
        }
    }

}