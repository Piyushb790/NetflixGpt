import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const NowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const moviesJSON = await data.json();

    dispatch(addMovies(moviesJSON.results));
  };
  useEffect(() => {
    NowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
