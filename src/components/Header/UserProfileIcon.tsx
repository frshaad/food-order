import { signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import unknownUserAvatar from "../../assets/img/avatar.webp";
import { selectCurrentUser, setUser } from "../../features/user/userSlice";
import { auth } from "../../firebase";
import { loginWithGoogle } from "../../utils/login";
import DropDownMenu from "./DropDownMenu";

const UserProfileIcon = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleUserProfileClick = async () => {
    if (!currentUser) {
      loginWithGoogle(dispatch);
    } else {
      setIsDropDownOpen(!isDropDownOpen);
    }
  };

  const handleLogOut = () => {
    setIsDropDownOpen(false);
    signOut(auth);
    dispatch(setUser(null));
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
