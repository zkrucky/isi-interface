import React, { Component } from "react";
import { Container } from "reactstrap";

import logo from "../static/images/iroha.png";
import "../static/styles/style.css";

const IROHA_URL = "https://www.hyperledger.org/use/iroha";

export default class Banner extends Component {
    render() {
        return (
            <div className="full-width banner">
                <div className="vertical-center">
                    <div className="vertical-center">
                        <a href={IROHA_URL} target="_blank">
                            <img className="logo" src={logo} alt="Iroha logo" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}