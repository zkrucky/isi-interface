import React, { Component } from 'react';

import { Container, Row, Col } from "reactstrap";

import Menu from "./Instructions/Menu";
import Workbench from "./Workbench/Workbench";

interface IProps{
}

interface IState {
    workingBlocks: any;
}

export default class Builder extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            workingBlocks: []
        }

        this.addWorkingBlock = this.addWorkingBlock.bind(this);
        this.removeWorkingBlock = this.removeWorkingBlock.bind(this);
        this.clearBlocks = this.clearBlocks.bind(this);
        this.updateName = this.updateName.bind(this);
        this.getKey = this.getKey.bind(this);
        this.setBlocks = this.setBlocks.bind(this);
    }

    render() {
        return (
            <div className="base">
                <div className="builder">
                    <Row>
                        <Col className="instructions">
                            <p className="section-title">Instructions</p>
                            <Menu addWorkingBlock={this.addWorkingBlock} getKey={this.getKey} />
                        </Col>
                        <Col className="workbench">
                            <p className="section-title">Workbench</p>
                            <Workbench workingBlocks={this.state.workingBlocks} removeWorkingBlock={this.removeWorkingBlock} clearBlocks={this.clearBlocks} updateName={this.updateName} setBlocks={this.setBlocks}/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    addWorkingBlock(block: any) {
        let blocks = this.state.workingBlocks;
        blocks.push(block);
        this.setState({ workingBlocks: blocks });
        console.log(this.state.workingBlocks);
    }

    removeWorkingBlock(index: any) {
        let blocks = this.state.workingBlocks;
        blocks.splice(index, 1);
        this.setState({ workingBlocks: blocks });
    }

    clearBlocks() {
        this.setState({ workingBlocks: [] });
    }

    updateName(name: any, index: any) {
        let blocks = this.state.workingBlocks;
        blocks[index].name = name;
        this.setState({ workingBlocks: blocks });
    }

    getKey(length: any) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        //this.currentKey = result;
        return result;
    }

    setBlocks(blocks: any){
        console.log(blocks);
        console.log(Array.isArray(blocks));
        if(Array.isArray(blocks)){
            this.setState({workingBlocks: blocks});
        }
        console.log(this.state.workingBlocks);
    }
}