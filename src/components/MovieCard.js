import { IMG_CDN } from "../utils/constants";
const MovieCard = ({ movies, title }) => {
  return (
    movies && (
      <div className="px-20">
        <div>
          <h1 className=" text-3xl my-5 text-white">{title}</h1>
        </div>
        <div className="flex gap-x-5 overflow-x-scroll  ">
          {movies.map((movie) => (
            <div key={movie.id}>
              <div className="w-32">
                <img src={IMG_CDN + movie?.poster_path} className=" w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default MovieCard;
