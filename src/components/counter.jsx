import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class Counter extends Component {
  getBadgeClasses() {
    let classes = "bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  render() {
    return (
      <div>
        <h2>Counter #{this.props.counter.id}</h2>
        <Badge style={{ fontSize: 20 }} className={this.getBadgeClasses()}>
          {this.formatCounter()}
        </Badge>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
