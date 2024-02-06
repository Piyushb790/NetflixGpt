import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../redux/gptSlice";

const GptMovieFinder = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.langOpt.lang);
  const searchText = useRef(null);

  // movie search inside tmdb
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=true&page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    return json?.results;
  };

  // search each movie for tmdb api

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: gadar, omg2, don, raone,golmaal";

    const gptResults = await openai?.chat?.completions?.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const recommendedMovies =
      gptResults?.choices[0]?.message?.content?.split(",");
    console.log(recommendedMovies);
    const promiseArray = recommendedMovies.map((movieName) =>
      searchMovieTMDB(movieName)
    );
    //array of promises for each movie we will get one promises

    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);
    console.log(recommendedMovies);
    dispatch(
      addGptMoviesResult({
        movieNames: recommendedMovies,
        movieResults: tmdbResult,
      })
    );
  };

  return (
    <div className="flex justify-center  ">
      <form
        className="mt-40 bg-black p-2 md:p-4 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].searchPlaceHolder}
          className=" rounded-lg px-4 py-3 w-[15rem] md:w-[40rem]  font-semibold text-xs md:text-lg outline-none "
        />
        <button
          className="bg-[#19c37d] px-4 py-3 rounded-md text-white ml-3 text-xs hover:bg-green-500 md:text-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].searchBtn}
        </button>
      </form>
    </div>
  );
};

export default GptMovieFinder;
