import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";
import { showPanel } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Remove the user from the Redux store on sign-out
      // Sign-out successful. 
    }).catch((error) => {
      navigate('/error');
      console.error("Sign out error:", error);
    });
  }
  const auth = getAuth();
  const userloggedin = auth.currentUser;
  if (userloggedin !== null) {
    // The user object has basic properties such as display name, email, etc.
    // const displayName1 = userloggedin.displayName;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }
  const handleGPTSearch = () => {
    // Toggle GPT Search Button
    dispatch(toggleGPTSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    // console.log(e.target.value);
  }
  const toshowLanguage = useSelector((store) => store.GPT.showGPTSearch);
  // const gpt = useSelector((store) => store.GPT.toggleGPTSearchView);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // this  will unsubscribe when component unmounts .
    return () => {
      unsubscribe();
    }
  }, [])
  const openpanel = () => {
    dispatch(showPanel());
  }
  const user = useSelector((store) => store.user);
  const toshowPanel = useSelector((store) => store.config.Panel);
  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center'>
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className='p-4 flex items-center'>
          {toshowLanguage && (
            <select className="w-24 mr-4 bg-white rounded-lg p-2" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <div className="flex items-center">
            <button onClick={handleGPTSearch} className="bg-red-700 rounded-lg p-2 mr-4">
              {toshowLanguage ? "Home Page" : "GPT Search"}
            </button>
            <div className="flex items-center">
              <button onClick={handleSignOut}
                className='bg-red-700 rounded-lg p-2 mr-2'>Sign out</button>
              <img alt='usericon' src={user.photoURL}
                className='w-10 ml-2 rounded-full cursor-pointer' />
              <div onClick={openpanel} className="text-red-700 font-bold ml-2 text-lg cursor-pointer">{user.displayName}</div>
            </div>
            {toshowPanel &&
              <div className="bg-red-600">
                {/* <showUse/> */}
              </div>
            }
          </div>

        </div>
      )}
    </div>
  );
};
export default Header;
