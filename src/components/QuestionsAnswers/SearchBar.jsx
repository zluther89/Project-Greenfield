import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Questions & Answers</label>
          <input className="form-control"></input>
        </div>
      </form>
    );
  }
}

export default SearchBar;
