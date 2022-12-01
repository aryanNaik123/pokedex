import React from "react";

// Create the Pokedex component
class Pokedex extends React.Component {
  render() {
    // Get the pokemon from the props
    const { pokemon } = this.props;

    return (
      <ul className="pokedex-list">
        {/* Map through the pokemon and display each one */}
        {pokemon.map((pokemon) => (
          <li key={pokemon.id} className="pokedex-list-item">
            {/* Add the pokemon's name and image */}
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Pokedex;
