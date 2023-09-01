import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { ActionProps, ActionType } from "../types";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (
  dispatch: React.Dispatch<ActionProps>,
) => {
  const { user } = await signInWithPopup(auth, googleProvider);
  dispatch({
    type: ActionType.SET_USER,
    user,
  });
  localStorage.setItem("user", JSON.stringify(user));
};

export const logOut = async () => {
  const response = await signOut(auth);
  console.log("response", response);
};
