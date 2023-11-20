/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //! Creating a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! Logging in a user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! Checking the auth state of the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //! Logging out the user
  const logoutUser = () => {
    return signOut(auth);
  };

  //! Google Provider Sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, logoutUser, user, googleSignIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
