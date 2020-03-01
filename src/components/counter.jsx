import React, { Component } from "react";

class Counter extends Component {
  /* we need to remove this value from local state and only rely on the props 
  this is a controlled component */
 

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };


  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    // don't use this.props.counter.value
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
