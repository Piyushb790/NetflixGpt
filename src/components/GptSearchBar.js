import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../redux/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    if (!movie) {
      console.error("Invalid movie name received:", movie);
      return [];
    }

    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          encodeURIComponent(movie) +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();

      return json.results || [];
    } catch (error) {
      console.error("Error fetching from TMDB:", error);
      return [];
    }
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results
    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await model.generateContent(gptQuery);
    console.log(typeof gptResults);

    if (!gptResults.choices) {
      console.error();
    }

    const responseContent =
      gptResults.response?.candidates[0]?.content?.parts[0];

    const gptMovies = responseContent.text.split(",");

    console.log("gptMovies", gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <h1 className="absolute bg-black p-2 rounded-2xl align-middle font-bold text-5xl text-red-700  ">
        AI Powered Search ✨
      </h1>
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 mt-[5%] rounded-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 text-white outline-none"
          placeholder={lang[langKey].searchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white  rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].searchBtn}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
