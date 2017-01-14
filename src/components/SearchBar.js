import React from 'react';

class SearchBar extends React.Component {
  handleInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <input onChange={this.handleInputChange} />
    );
  }
}

export default SearchBar;
