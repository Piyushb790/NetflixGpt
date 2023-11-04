import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailor } from "../redux/moviesSlice";
import { useEffect } from "react";
const useMovieTrailor = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrailor();
  }, []);
  const getTrailor = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailor = filterData.length ? filterData[1] : json.results[0];
    dispatch(addTrailor(trailor));
  };
};
export default useMovieTrailor;
