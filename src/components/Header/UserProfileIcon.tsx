import { useState } from "react";
import { motion } from "framer-motion";

import DropDownMenu from "./DropDownMenu";
import { useStateValue } from "../../context/initialState";
import { loginWithGoogle } from "../../utils/authenticationFn";
import unknownUserAvatar from "../../assets/img/avatar.png";

const UserProfileIcon = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [state, dispatch] = useStateValue();
  const { user: currentUser } = state;

  const handleUserProfileClick = () => {
    if (!currentUser) {
      loginWithGoogle(dispatch);
    } else {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  return (
    <div className="relative">
      <button onClick={handleUserProfileClick}>
        <motion.img
          whileTap={{ scale: 0.8 }}
          src={
            currentUser?.providerData[0].photoURL
              ? currentUser.providerData[0].photoURL
              : unknownUserAvatar
          }
          alt="user profile picture"
          className="w-10 cursor-pointer rounded-full drop-shadow-xl"
        />
      </button>

      {isDropDownOpen ? <DropDownMenu user={currentUser} /> : null}
    </div>
  );
};

export default UserProfileIcon;
