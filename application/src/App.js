import React, {Component} from 'react';
import {Collapse} from "reactstrap";

import Banner from "./banner/Banner";
import About from "./banner/About";

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      showAbout: false
    }

    this.toggleAbout = this.toggleAbout.bind(this);
  }

  render(){
    return (
      <>
        <Banner toggleAbout={this.toggleAbout}/>
        {this.renderAbout()}
      </>
    );
  }

  renderAbout() {
    return(
      <Collapse isOpen={this.state.showAbout}>
        <About closePage={this.toggleAbout}/>
      </Collapse>
    );
  }

  toggleAbout(){
    this.setState({showAbout: !this.state.showAbout});
  }
}
