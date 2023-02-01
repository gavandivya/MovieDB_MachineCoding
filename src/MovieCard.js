import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ singleMovie }) => {
  const { title, vote_count, overview, backdrop_path, id } = singleMovie;
  //   console.log(singleMovie);
  return (
    <div className="col-md-4 col-sm-12 col-lg-3">
      <div className="card p-4">
        <Link to={`/movieDesc/${id}`}>
          <img
            alt="movieimg"
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            className="img-fluid"
          />
          <p className="font-bold">Title - {title}</p>
          <p className="font-bold">Vote - {vote_count}</p>
          <p>Overview - {overview ? overview.slice(0, 200) : "NA"}...</p>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
