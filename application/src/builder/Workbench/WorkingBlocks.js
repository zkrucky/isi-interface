import React, {Component} from 'react';

import {Container, Button} from 'reactstrap';

export default class WorkingBlocks extends Component{
    constructor(props){
        super(props);

        this.blockElement = React.createRef();   
    }
    render(){
        return this.props.workingBlocks.map((Block) =>
            <>
                <div className="working-block">
                    <Block key={index}/>
                </div>
            </>
        );
    }
}