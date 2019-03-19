import React from "react";

class SearchBar extends React.Component {
  state = { location: "" };

  onInputChange = event => {
    this.setState({ location: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.location);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label>Enter Zip:</label>
          <input
            type="text"
            value={this.state.location}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
