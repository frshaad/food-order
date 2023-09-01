import { useContext } from "react";
import { UserState } from "../types";
import { StateContext } from "./UserContext";

export const initialState: UserState = {
  user: null,
};

export const useStateValue = () => useContext(StateContext);
