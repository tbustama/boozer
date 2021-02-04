import React from "react";
import CocktailsCard from "./CocktailsCard.js";
export default class CocktailsContainer extends React.Component {
  render() {
    return (
      <ul className="cocktail-div">
        {this.props.cocktails.map((cocktail) => {
          return <CocktailsCard cocktail={cocktail} />;
        })}
      </ul>
    );
  }
}
