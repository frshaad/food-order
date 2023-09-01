import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../firebase";
import { useStateValue } from "../../context/initialState";
import { ActionType } from "../../types";
import avatar from "../../assets/img/avatar.png";

const UserProfileIcon = () => {
  const [state, dispatch] = useStateValue();
  const { user: currentUser } = state;

  const login = async () => {
    const { user } = await signInWithPopup(auth, googleProvider);
    dispatch({
      type: ActionType.SET_USER,
      user,
    });
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="relative">
      <button onClick={login}>
        <motion.img
          whileTap={{ scale: 0.7 }}
          src={
            currentUser?.providerData[0].photoURL
              ? currentUser.providerData[0].photoURL
              : avatar
          }
          alt="user profile picture"
          className="w-10 cursor-pointer rounded-full drop-shadow-xl"
        />
      </button>
    </div>
  );
};

export default UserProfileIcon;
