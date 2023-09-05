import { useContext } from "react";

import { UserState } from "../types";
import { fetchUser } from "../utils/fetchLocalStorageData";
import { StateContext } from "./UserContext";

const userInfo = fetchUser();

export const initialState: UserState = {
  user: userInfo,
};

export const useStateValue = () => useContext(StateContext);
