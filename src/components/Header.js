import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" min-w-full absolute bg-gradient-to-b from-black flex items-center justify-between  ">
      <ul>
        <li>
          <img
            className="h-20"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </li>
      </ul>
      {user && (
        <ul className="flex items-center gap-x-4 mr-4">
          <li>
            <img src={user.photoURL} className="h-10 w-10 rounded-xl" />
          </li>
          <li>
            <button
              onClick={handleSignout}
              className="bg-red-600 p-1 rounded-md text-white"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
