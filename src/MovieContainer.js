import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieContainer = () => {
  const [movieData, setMovieData] = useState([]);
  const [filteredMovieData, setfilteredMovieData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=05005e7be5dd9895bcf90a528d1f791b"
    );
    const json = await data.json();
    setMovieData(json.results);
    console.log(json);
  };

  useEffect(() => {
    searchMovie();
  }, [searchText]);

  const searchMovie = () => {
    const filteredData = movieData.filter((res) => {
      return res?.title.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredMovieData(filteredData);
  };

  if (filteredMovieData.length > 0) {
  }

  return (
    <>
      <input
        placeholder="Search Movie"
        className="p-2 w-64 mt-2 border border-b-gray-100"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="row mt-4">
        {filteredMovieData.length > 0
          ? filteredMovieData.map((singleMovie) => (
              <MovieCard key={singleMovie.id} singleMovie={singleMovie} />
            ))
          : movieData.map((singleMovie) => (
              <MovieCard key={singleMovie.id} singleMovie={singleMovie} />
            ))}
      </div>
    </>
  );
};

export default MovieContainer;
