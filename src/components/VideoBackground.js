import useMovieTrailor from "../hooks/useMovieTrailor";
import { useSelector } from "react-redux";
const VideoBackground = ({ id }) => {
  const trailor = useSelector((store) => store.movies?.trailor);
  useMovieTrailor(id);
  return (
    <div className="absolute  ">
      <iframe
        className="w-screen aspect-video h-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailor?.key +
          "?&autoplay=1&mute=1&showinfo=0&controls=0&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        controls="0"
      />
    </div>
  );
};

export default VideoBackground;
