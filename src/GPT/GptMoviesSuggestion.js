import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
const GptMoviesSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="bg-black opacity-90 p-2 mt-20 mx-20">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMoviesSuggestion;
