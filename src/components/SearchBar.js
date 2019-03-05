import React from "react";

class SearchBar extends React.Component {
  state = { zip: "" };

  onInputChange = event => {
    this.setState({ zip: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.zip);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label>Enter zip/Zip:</label>
          <input
            type="text"
            value={this.state.zip}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
