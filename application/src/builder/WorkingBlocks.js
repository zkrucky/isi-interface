import React, {Component} from 'react';

export default class Workbench extends Component{
    render(){
        return this.props.workingBlocks.map((Block) =>
            <>
                <div className="working-block">
                    <Block/>
                </div>
            </>
        );
    }
}