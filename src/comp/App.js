import React from "react";
import List from "./List";
import Search from "./Search";
import { movies } from "./db";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = { movies, query: "" };
  // Update State method

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };
  seaMovie = (event) => {
    // console.log(event.target.value);
    this.setState({ query: event.target.value });
  };
  /* this.setState({ // Change method Used if the array is empty.
    movies: newMovieList
  })*/

  render() {
    let filteredMov = this.state.movies.filter((movie) => {
      return (
        movie.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
      );
    });

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Search seaMov={this.seaMovie} />
            </div>
          </div>
          <List movies={filteredMov} delMov={this.deleteMovie} />
        </div>
      </>
    );
  }
}
export default App;
