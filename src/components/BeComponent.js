import React, { Component, Fragment } from "react";
import "../css/BeComponent.css";
import { fetchColors } from "../utils/api";

export default class BeComponent extends Component {
  state = {
    loading: true,
    error: null,
    colors: []
  };

  getColors = async () => {
    this.setState({ loading: true });
    try {
      const color1 = await fetchColors();
      const color2 = await fetchColors();

      this.setState({
        colors: [color1.new_color, color2.new_color],
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: "There was a problem with your request. Please, try again."
      });
    }
  };

  componentDidMount() {
    this.getColors();
  }

  render() {
    const { loading, error, colors } = this.state;
    console.log(this.state);
    return (
      <Fragment>
        {error !== null ? (
          <h1>{error}</h1>
        ) : loading === false ? (
          <div className="be-component">{this.props.text}</div>
        ) : (
          <h1>LOADING</h1>
        )}
      </Fragment>
    );
  }
}
