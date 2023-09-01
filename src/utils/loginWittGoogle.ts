import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { ActionProps, ActionType } from "../types";

const logIn = async (dispatch: React.Dispatch<ActionProps>) => {
  const { user } = await signInWithPopup(auth, googleProvider);
  dispatch({
    type: ActionType.SET_USER,
    user,
  });
  localStorage.setItem("user", JSON.stringify(user));
};

export default logIn;
