import React, { useEffect, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signup, setSignup] = useState(false);

  const toggleSignUpForm = () => {
    setSignup(!signup);
  };

  return (
    <div>
      <Header />
      <div className="trailor">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>
      <div className="bg-black absolute top-48 left-[580px] w-3/12 bg-opacity-80 p-8 rounded-lg text-white ">
        <h1 className="text-2xl font-bold my-5">
          {!signup ? "Sign In" : "Sign Up"}
        </h1>
        {signup && (
          <input
            placeholder="Full Name"
            className="p-2  rounded w-full bg-gray-800 my-2"
          />
        )}

        <input
          placeholder="email"
          className="p-2  rounded w-full bg-gray-800 my-2"
        />
        <input
          placeholder="password"
          className="p-2   rounded w-full bg-gray-800 my-2"
        />
        <button className="  w-full px-3 py-2  bg-[#e50914] rounded my-5">
          {signup ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-gray-400 mt-5">
          {signup ? "already registered? " : "New to Netflix? "}
          <button onClick={() => toggleSignUpForm()}>
            {signup ? "Sign in now" : "Sign up now"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
