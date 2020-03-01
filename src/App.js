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

  // we always need to pass props to constructor if we need to manipulate it
  constructor (props) {
    super(props);
    console.log('app-constructor');
    //this.state = this.props.
  }

  componentDidMount(){
    // perfect calls to make ajax calls to get data from server
    //this.setState();
    console.log('app-did mount');
  }

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
    // all the children is also rendered recursively
    console.log('app = render')
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
