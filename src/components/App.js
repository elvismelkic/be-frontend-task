import React, { Component } from "react";
import logo from "../logo.svg";
import BeComponent from "./BeComponent";
import "../css/App.css";
import { fetchColors } from "../utils/api";

class App extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange = event => {
    let value = event.target.value;

    this.setState({ inputValue: value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BeComponent text={inputValue} />
          <input type="text" onChange={this.handleInputChange} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
