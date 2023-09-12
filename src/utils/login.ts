import { AnyAction } from "@reduxjs/toolkit";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Dispatch } from "react";

import { setUser } from "../features/user/userSlice";
import { auth } from "../firebase";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (dispatch: Dispatch<AnyAction>) => {
  const { user } = await signInWithPopup(auth, googleProvider);
  dispatch(setUser(user));
};
