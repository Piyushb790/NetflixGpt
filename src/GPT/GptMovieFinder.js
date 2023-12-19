import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptMovieFinder = () => {
  const language = useSelector((store) => store.langOpt.lang);
  return (
    <div className="flex justify-center  ">
      <div className="mt-40 bg-black p-4 rounded-sm">
        <input
          type="text"
          placeholder={lang[language].searchPlaceHolder}
          className=" rounded-lg px-4 py-3 w-[40rem]  font-semibold text-lg outline-none "
        />
        <button className="bg-[#19c37d] px-4 py-3 rounded-md text-white ml-3 hover:bg-green-500">
          {lang[language].searchBtn}
        </button>
      </div>
    </div>
  );
};

export default GptMovieFinder;
