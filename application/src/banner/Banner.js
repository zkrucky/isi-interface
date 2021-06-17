import React, {Component} from "react";
import logo from "../static/images/iroha.png";
import "../static/styles/header.css";

export default class Banner extends Component {
    render() {
        return(
            <img className="logo" src={logo} alt="Iroha logo" />
        );
    }
}