import React from "react";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptMovieFinder from "./GptMovieFinder";
import { bgtrailor } from "../utils/constants";
const GptSearch = () => {
  return (
    <div className="relative">
      <div className="trailor fixed inset-0 z-[-10]">
        <img
          src={bgtrailor}
          className="w-full h-full object-cover"
          alt="bg-img"
        />
      </div>
      <GptMovieFinder />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptSearch;
