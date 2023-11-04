import React from "react";

import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="-mt-48 relative   z-20">
        <MovieCard movies={movies?.nowPlayingMovies} title={title} />
        <MovieCard movies={movies?.topRatedMovies} title={"Top Rated Movies"} />
        <MovieCard movies={movies?.popularMovies} title={"Popular Movies"} />
        <MovieCard movies={movies?.upcomingMovies} title={"Upcoming Movies"} />
      </div>
    )
  );
};

export default MovieList;
