import React from "react";

// Create the SearchBar component
class SearchBar extends React.Component {
  // Initialize the state with an empty search term
  state = { searchTerm: "" };

  // This method is called when the input value is changed
  handleChange = (event) => {
    // Update the search term in the state with the value from the input
    this.setState({ searchTerm: event.target.value });
  };

  // This method is called when the form is submitted
  handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the search term from the state
    const { searchTerm } = this.state;

    // Call the onSubmit prop and pass the search term
    this.props.onSubmit(searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search-form">
        <label htmlFor="search-input" className="sr-only">
          Search:
        </label>
        <input
          type="text"
          id="search-input"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Enter a pokemon name"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
