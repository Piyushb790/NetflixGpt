import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-4/12 m-10 bottom-48 z-20 text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="my-8">{overview}</p>
      <div>
        <button className="bg-red-600 p-1 rounded-md text-white mx-2 ">
          <img
            className="h-5 inline"
            src="https://img.icons8.com/sf-regular-filled/48/FFFFFF/play.png"
            alt="play"
          />
          play
        </button>
        <button className="bg-red-600 p-1 rounded-md text-white">
          <img
            className="h-5 inline"
            src="https://img.icons8.com/ios/100/FFFFFF/info--v1.png"
            alt="info--v1"
          />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
