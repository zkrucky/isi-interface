import React, {Component} from 'react';

import {Button} from 'reactstrap';

import WorkingBlocks from "./WorkingBlocks";

export default class Workbench extends Component{
    render(){
        return(
            <>
                <Button onClick={() => {this.props.clearBlocks()}}>Remove All Blocks</Button>
                <WorkingBlocks workingBlocks={this.props.workingBlocks} removeWorkingBlock={this.props.removeWorkingBlock}/>
            </>
        );
    }
}