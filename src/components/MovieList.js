import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="md:text-3xl text-md py-5 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll ">
        <div className="flex gap-x-5">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
