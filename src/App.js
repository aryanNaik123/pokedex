import React from "react";

// Import the necessary components for the pokedex app
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  // Initialize the state with an empty array of pokemon
  state = { pokemon: [] };

  // Use the componentDidMount lifecycle method to fetch the pokedex data
  componentDidMount() {
    // Replace this URL with the URL of the API that contains the pokedex data
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

    // Fetch the pokedex data from the API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Extract the pokemon data from the response
        const pokemon = data.results.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          // You will need to add additional properties for the pokemon's type, abilities, and image
        }));

        // Update the state with the pokemon data
        this.setState({ pokemon });
      });
  }

  handleSearchSubmit = (searchTerm) => {
    // Filter the pokemon data to get only the pokemon that match the search term
    const pokemon = this.state.pokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the state with the filtered pokemon
    this.setState({ pokemon });
  };

  render() {
    // Get the pokemon from the state
    const { pokemon } = this.state;

    return (
      <div className="pokedex-app">
        {/* Add the search bar to the app */}
        <SearchBar onSubmit={this.handleSearchSubmit} />

        {/* Add the pokedex to the app */}
        <Pokedex pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
