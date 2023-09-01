import { motion } from "framer-motion";

import { useStateValue } from "../../context/initialState";
import avatar from "../../assets/img/avatar.png";
import logIn from "../../utils/loginWittGoogle";

const UserProfileIcon = () => {
  const [state, dispatch] = useStateValue();
  const { user: currentUser } = state;

  const openMenu = () => {
    console.log("menu opened!");
  };

  const handleUserProfileClick = () => {
    if (!currentUser) {
      logIn(dispatch);
    } else {
      openMenu();
    }
  };

  return (
    <div className="relative">
      <button onClick={handleUserProfileClick}>
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
