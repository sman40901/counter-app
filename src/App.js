import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { render } from "@testing-library/react";

class App extends Component {
  // passing counters to the app which is the root

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
    this.setState({ counters /* key */: counters /*value*/ });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    // no single source of truth right now
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    /*
    const c1 = this.state.counters.filter(c => c.id == counter.id);
    console.log(counters);
    c1.value ++;
    */
    /*
   we are creating a clone of a counter because in react, 
   manipulating object states is a big no no re
   */
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
