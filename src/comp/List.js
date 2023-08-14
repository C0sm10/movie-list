import React from "react";

const List = (props) => {
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={
                "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" +
                movie.imageURL +
                ".jpg"
              }
              className="card-img-top"
              alt={movie.name}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={() => props.delMov(movie)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <h2>
                  <span className="badge bg-secondary">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
