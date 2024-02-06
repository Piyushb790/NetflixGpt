import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [expanded, setExpanded] = useState(false);

  //Toggle expanded state

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="absolute w-6/12 md:w-4/12 m-10 bottom-48 z-20 text-white">
      <h1 className="text-md md:text-5xl font-bold">{title}</h1>
      <p
        className={`overflow-hidden text-xs md:text-[14px] opacity-70  hover:opacity-100 ${
          expanded ? "overflow-visible my-2" : "line-clamp-3 my-2 "
        }`}
      >
        {overview}
      </p>
      {!expanded && (
        <button
          className="text-red-500 hover:underline focus:outline-none"
          onClick={toggleExpanded}
        >
          Read More
        </button>
      )}
      {expanded && (
        <button
          className="text-red-500 hover:underline focus:outline-none"
          onClick={toggleExpanded}
        >
          Show Less
        </button>
      )}
      <div>
        <button className="bg-red-600 p-1 rounded-md text-white mx-2  my-2">
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
