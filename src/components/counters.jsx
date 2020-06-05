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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                    onClick={this.props.onAddCounter}
                    className="btn btn-primary btn-bg"
                >
                    Add Counter
                </button>
                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        // key attrib internally by react
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onCalculateTotalValue={this.props.onCalculateTotalValue}
                        /*
                        value={counter.value}
                        id={counter.id}
                        */
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
