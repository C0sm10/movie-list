import React from "react";
import List from "./List";
import Search from "./Search";
import { movies } from "./db";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = { movies };
  render() {
    // console.log(movies);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Search />
            </div>
          </div>
          <List movies={this.state.movies} />
        </div>
      </>
    );
  }
}
export default App;
