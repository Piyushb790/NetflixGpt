import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { logo } from "../utils/constants";
import { toggleGptSearchView } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //if user is sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe called when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className=" min-w-full absolute bg-gradient-to-b from-black flex  flex-col md:flex-row items-center justify-between   z-40  ">
      <ul className="mx-auto md:mx-0">
        <li>
          <img className="h-20 " src={logo} alt="logo" />
        </li>
      </ul>
      {user && (
        <ul className="flex items-center gap-x-4 mr-4">
          <li>
            <img
              src={user.photoURL}
              className="h-10 w-10 rounded-xl hidden md:block"
            />
          </li>
          <li>
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
          </li>
          <li>
            <button
              onClick={handleSignOut}
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
