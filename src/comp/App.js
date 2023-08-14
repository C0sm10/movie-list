import React from "react";
import List from "./List";
import Search from "./Search";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = { movies: [], query: "" };
  // Update State method

  /* ---fetch Method in two steps 
  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ movies: data });
  } */

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );
    this.setState({ movies: response.data.results });
  }

  /* first method 
   deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState(() => ({
      movies: newMovieList,
    }));
  }; */

  /* Delete with Fetch method
  deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3002/movies/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE",
    });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState(() => ({
      movies: newMovieList,
    }));
  }; */
  // Delete with Axios method

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState(() => ({
      movies: newMovieList,
    }));
  };

  seaMovie = (event) => {
    this.setState({ query: event.target.value });
  };

  render() {
    let filteredMov = this.state.movies.filter((movie) => {
      return (
        movie.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
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
