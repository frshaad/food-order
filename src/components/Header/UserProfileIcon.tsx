import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../../firebase";
import avatar from "../../assets/img/avatar.png";

const UserProfileIcon = () => {
  const login = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    const { user } = response;
    const { displayName } = user;
    console.log(displayName);
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
