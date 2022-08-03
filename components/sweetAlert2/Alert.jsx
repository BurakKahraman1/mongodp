import React, { Component } from "react";
import Swal from "sweetalert2";

export default class Alert extends Component {

    constructor() {
        super();
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick() {
        Swal.fire({
            title: this.props.title,
            footer: this.props.footer,
            type: this.props.type,
            text: this.props.text,
        });
    }

    render() {
        Swal.fire({
            title: this.props.title,
            footer: this.props.footer,
            type: this.props.type,
            text: this.props.text,
        });
        return (<Alert title="Success" text="Your registration has been received" type="success" />);
    }
}
