import React from "react";

export default class CocktailsSelected extends React.Component {
  render() {
    return (
      <div id="column">
        <h5>{this.props.cocktail.description}</h5>
        <h5>{this.props.cocktail.instructions}</h5>
        {this.props.cocktail.proportions.map((proportion) => {
          return (
            <h5>
              {proportion.ingredient.name}: {proportion.amount}
            </h5>
          );
        })}
      </div>
    );
  }
}
