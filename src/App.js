import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import React from "react";
import CocktailsContainer from "./CocktailsContainer.js";

export default class App extends React.Component {
  state = {
    cocktails: ["hello"],
  };
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then((resp) => resp.json())
      .then((json) =>
        this.setState({
          cocktails: json,
        })
      );
  }
  render() {
    return (
      <div className="App">
        <CocktailsContainer cocktails={this.state.cocktails} />
      </div>
    );
  }
}
