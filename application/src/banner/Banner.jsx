import React, { Component } from "react";
import { Container } from "reactstrap";

import logo from "../static/images/iroha.png";
import "../static/styles/header.css";

const IROHA_URL = "https://www.hyperledger.org/use/iroha";

export default class Banner extends Component {
    render() {
        return (
            <div className="full-width banner">
                <div className="vertical-center">
                    <Container>
                        <div className="vertical-center">
                            <a href={IROHA_URL} target="_blank">
                                <img className="logo" src={logo} alt="Iroha logo" />
                            </a>
                            <a onClick={this.props.toggleAbout}>
                                <h1 className="title">ISI SMART CONTRACT BUILDER</h1>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}