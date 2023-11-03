import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { logo } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
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
    <div className=" min-w-full absolute bg-gradient-to-b from-black flex items-center justify-between z-40  ">
      <ul>
        <li>
          <img className="h-20" src={logo} alt="logo" />
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
