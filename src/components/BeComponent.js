import React, { Component, Fragment } from "react";
import "../css/BeComponent.css";

export default class BeComponent extends Component {
  render() {
    return (
      <Fragment>
        <div>{this.props.text}</div>
      </Fragment>
    );
  }
}
