import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { avatar, BG_URL } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.js";
import { BG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [logErr, setLogErr] = useState("");

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = () => {
    const message = validate(email.current.value, password.current.value);
    setLogErr(message);

    if (message) return;

    if (signup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setLogErr(error.message);
            });

          // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLogErr(errorCode + " " + errorMessage);

          // ..
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLogErr(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setSignup(!signup);
  };

  return (
    <div>
      <Header />
      <div className="trailor">
        <img src={BG_URL} alt="bg-img" />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="bg-black absolute top-48 left-[580px] w-3/12 bg-opacity-80 p-8 rounded-lg text-white ">
          <h1 className="text-2xl font-bold my-5">
            {!signup ? "Sign In" : "Sign Up"}
          </h1>
          {signup && (
            <input
              ref={name}
              placeholder="Full Name"
              className="p-2  rounded w-full bg-gray-800 my-2"
            />
          )}

          <input
            ref={email}
            placeholder="email"
            className="p-2  rounded w-full bg-gray-800 my-2"
          />
          <input
            type="password"
            ref={password}
            placeholder="password"
            className="p-2   rounded w-full bg-gray-800 my-2"
          />
          <button
            className="  w-full px-3 py-2  bg-[#e50914] rounded my-5"
            onClick={() => handleBtnClick()}
          >
            {signup ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-red-600">{logErr}</p>
          <p className="text-gray-400 mt-5">
            {signup ? "already registered? " : "New to Netflix? "}
            <button onClick={() => toggleSignUpForm()}>
              {signup ? "Sign in now" : "Sign up now"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
