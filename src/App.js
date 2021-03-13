import React, { Component } from "react";
import "./App.css";
import { Cardlist } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      poodles: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ poodles: users }));
  }

  render() {
    const { poodles, searchField } = this.state;
    const filteredPoodles = poodles.filter((poodle) =>
      poodle.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Poodles Rolodex</h1>
        <SearchBox
          placeholder="search poodles"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Cardlist poodles={filteredPoodles} />
      </div>
    );
  }
}

export default App;
