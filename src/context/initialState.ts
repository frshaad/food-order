import { useContext } from "react";

import { AppState } from "../types";
import { fetchUser } from "../utils/fetchLocalStorageData";
import { StateContext } from "./UserContext";

const userInfo = fetchUser();

export const initialState: AppState = {
  user: userInfo,
  foods: null,
};

export const useAppState = () => useContext(StateContext);
