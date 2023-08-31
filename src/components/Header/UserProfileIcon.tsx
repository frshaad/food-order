import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../firebase";
import { useAppDispatch } from "../../app/hooks";
import { setUser } from "../../app/userSlice";
import avatar from "../../assets/img/avatar.png";

const UserProfileIcon = () => {
  const dispatch = useAppDispatch();

  const login = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const { user } = response;
    dispatch(setUser(user));
  };

  return (
    <div className="relative">
      <button onClick={login}>
        <motion.img
          whileTap={{ scale: 0.7 }}
          src={avatar}
          alt="user profile picture"
          className="w-10 cursor-pointer drop-shadow-xl"
        />
      </button>
    </div>
  );
};

export default UserProfileIcon;
