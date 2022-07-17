import React, { Component } from "react";

class Search extends Component<
  {
    search: (v: string) => void;
  },
  any
> {
  constructor(props) {
    super(props);
    this.handleSearchVal = this.handleSearchVal.bind(this);
  }

  handleSearchVal(e) {
    const searchV = e.target.value;
    this.props.search(searchV);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearchVal} />
      </div>
    );
  }
}

export default Search;
