import React, {Component} from 'react';

import {ListGroup} from 'react-bootstrap';

import RegisterDomain from "../blocks/world/RegisterDomain";
import RegisterAccount from "../blocks/domain/RegisterAccount";
import RegisterAsset from "../blocks/domain/RegisterAsset";

export default class Workbench extends Component{
    render(){
        return(
            <ListGroup>
                <ListGroup.Item>
                    <RegisterDomain/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <RegisterAccount/>
                </ListGroup.Item>
                <ListGroup.Item>
                    <RegisterAsset/>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}