import { useState } from "react";
import { motion } from "framer-motion";

import DropDownMenu from "./DropDownMenu";
import { useStateValue } from "../../context/initialState";
import { loginWithGoogle } from "../../utils/authenticationFn";
import unknownUserAvatar from "../../assets/img/avatar.png";
import { ActionType } from "../../types";

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

  const handleLogOut = () => {
    setIsDropDownOpen(false);
    localStorage.clear();
    dispatch({
      type: ActionType.SET_USER,
      user: null,
    });
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
          alt="user pic"
          className="w-10 cursor-pointer rounded-full drop-shadow-xl"
        />
      </button>

      {isDropDownOpen ? (
        <DropDownMenu
          handleLogOut={handleLogOut}
          setIsDropDownOpen={setIsDropDownOpen}
          user={currentUser}
        />
      ) : null}
    </div>
  );
};

export default UserProfileIcon;
