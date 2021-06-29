import React, {Component} from 'react';

import WorkingBlocks from "./WorkingBlocks";

export default class Workbench extends Component{
    render(){
        return(
            <WorkingBlocks workingBlocks={this.props.workingBlocks} setIsWorkingBlock={this.props.setIsWorkingBlock} isWorkingBlock={this.props.isWorkingBlock}/>
        );
    }
}