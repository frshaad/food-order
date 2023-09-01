import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../firebase";
import avatar from "../../assets/img/avatar.png";
import { useStateValue } from "../../context/UserContext";
import { actionType } from "../../context/reducer";

const UserProfileIcon = () => {
  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    const { user } = await signInWithPopup(auth, googleProvider);
    dispatch({
      type: actionType.SET_USER,
      user,
    });
  };

  return (
    <div className="relative">
      <button onClick={login}>
        <motion.img
          whileTap={{ scale: 0.7 }}
          src={user ? user.photoURL : avatar}
          alt="user profile picture"
          className="w-10 cursor-pointer rounded-full drop-shadow-xl"
        />
      </button>
    </div>
  );
};

export default UserProfileIcon;
