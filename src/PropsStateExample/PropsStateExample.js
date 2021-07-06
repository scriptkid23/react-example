import React, { Component } from "react";
import "./style.css";
const ColorPattern = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: "300px",
        height: "300px",
        margin: "30px",
        borderRadius: "10px",
      }}
    />
  );
};
export default class PropsStateExample extends Component {
  constructor() {
    super();
    this.state = {
      color: "#5D8233",
    };
  }
  randomColor = () => {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      color: color,
    });
  };
  render() {
    return (
      <div className="props-state-example">
        <ColorPattern color={this.state.color} />
        <button className="btn btn-primary" onClick={this.randomColor}>
          Random
        </button>
      </div>
    );
  }
}
