import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black">
      {/**
       * MovieList - Popular
       * MovieList - Now Playing
       * Movielist - Trending
       * MovieList - Horror
       */}
      <MovieList title={"Now Playing"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
