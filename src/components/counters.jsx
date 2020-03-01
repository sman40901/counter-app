import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
   

    render() {
        console.log('counters - rendered');
        return (
            <div>
                 <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-bg"
        >
          Reset
        </button>
                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        // key attrib internally by react
                        onDelete={this.props.onDelete}
                        onIncrement = {this.props.onIncrement}
                        /*
                        value={counter.value}
                        id={counter.id}
                        */
                       counter = {counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
