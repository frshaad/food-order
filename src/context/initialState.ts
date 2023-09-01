import { useContext } from "react";
import { UserState } from "../types";
import { StateContext } from "./UserContext";
import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialState: UserState = {
  user: userInfo,
};

export const useStateValue = () => useContext(StateContext);
