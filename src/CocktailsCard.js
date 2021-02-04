import React from "react";
import CocktailsSelected from "./CocktailsSelected.js";

export default class CocktailsCard extends React.Component {
  handleClick = (e) => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  state = {
    selected: false,
  };
  render() {
    console.log(this.state.selected);
    return (
      <li onClick={this.handleClick}>
        {this.props.cocktail.name}
        {this.state.selected === false ? null : (
          <CocktailsSelected cocktail={this.props.cocktail} />
        )}
      </li>
    );
  }
}
