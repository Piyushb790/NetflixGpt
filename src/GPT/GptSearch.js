import React from "react";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptMovieFinder from "./GptMovieFinder";
import { bgtrailor } from "../utils/constants";
const GptSearch = () => {
  return (
    <div className="">
      <div className="trailor absolute -z-10">
        <img src={bgtrailor} alt="bg-img" />
      </div>
      <GptMovieFinder />
      <GptMoviesSuggestion />
    </div>
  );
};

export default GptSearch;
