import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { BG_IMG_URL, USER_AVATAR } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm); 
  }
  useEffect(() => {
    // Clear input fields on component mount
    if (email.current) email.current.value = '';
    if (password.current) password.current.value = '';
  }, []);
  const handleButtonClick = () => {
    //validate the form data
    // checkValidData();
    // console.log(email);
    // console.log(password);

    const enteredName = name.current ? name.current.value : '';
    const enteredEmail = email.current ? email.current.value : '';
    const enteredPassword = password.current ? password.current.value : '';
    if (!isSignInForm && !nameRegex.test(enteredName)) {
      seterrorMessage('Invalid name format. Please enter a valid name.');
      return;
    }
    const message = checkValidData(enteredEmail, enteredPassword);
    seterrorMessage(message);
    // console.log(message)
    if (message) return; //jar valid ch nhi tar ka validation karycha..
    //Ata sign in /sign up cha logic lavuya..
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: enteredName, photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            // }).catch((error) => {
            //   seterrorMessage(error.errorMessage);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
    if (email.current) email.current.value = '';
    if (password.current) password.current.value = '';


  }
  return (
    <div className='relative'>
      <Header />
      <div className='absolute'>
        <img
          src={BG_IMG_URL}
          alt='Background'
          className='w-full h-full object-cover fixed'
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 absolute p-6 sm:p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg'
      >
        <h1 className='font-bold text-3xl py-4 m-2 '>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder='Name'
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
            autoComplete="off"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder='Email Address'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'
          autoComplete="off"
        />

        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'
          autoComplete="off"
        />

        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p
          className='p-4 cursor-pointer text-center'
          onClick={toggleSignIn}
        >
          {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In'}
        </p>
      </form>
    </div>


  )
}
export default Login;