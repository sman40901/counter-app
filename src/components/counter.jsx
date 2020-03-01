import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  handleIncrement = () => {
    //this.state.count ++;
    this.setState({
      value: this.state.value + 1
    }); // re state the virtual dom
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={ () => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
