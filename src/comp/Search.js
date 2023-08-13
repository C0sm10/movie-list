import React from "react";

class Search extends React.Component {
  state = {};
  handForm = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handForm}>
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              type="text"
              onChange={this.props.seaMov}
              className="form-control"
              placeholder="Search a movie"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
