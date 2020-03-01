import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        totalCount: 0,
        imageUrl: "https://picsum.photos/200",
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleDelete = counterId => {
        //instead of updating the array ourself we create new array and give it to react
        // it does the updating
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters/* key */: counters /*value*/ })
    };

    handleReset = () => {
        const counters = this.state.counters.map(
             c=>{
                 c.value=0;
                 return c;
             }
         );
         this.setState({counters}) ;
         // no single source of truth right now
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        /*
        const c1 = this.state.counters.filter(c => c.id == counter.id);
        console.log(counters);
        c1.value ++;
        */
       const index = counters.indexOf(counter);
       counters[index] = {...counter};
       counters[index].value++;
       this.setState({counters});
    };

    render() {
        return (
            <div>
                 <button
          onClick={this.handleReset}
          className="btn btn-primary btn-bg"
        >
          Reset
        </button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        // key attrib internally by react
                        onDelete={this.handleDelete}
                        onIncrement = {this.handleIncrement}
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
