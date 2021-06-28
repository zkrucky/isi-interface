import React, {Component} from 'react';

import {ListGroup} from 'react-bootstrap';

import RegisterDomain from "../blocks/world/RegisterDomain";
import RegisterAccount from "../blocks/domain/RegisterAccount";
import RegisterAsset from "../blocks/domain/RegisterAsset";
import WorkingBlocks from "./WorkingBlocks";

export default class Workbench extends Component{
    render(){
        return(
            <WorkingBlocks workingBlocks={this.props.workingBlocks}/>
        );
    }
}