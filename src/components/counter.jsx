import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value
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
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm">
                    Increment
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
