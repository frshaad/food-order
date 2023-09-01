import { User } from "firebase/auth";
import { UserState } from "../types";

export enum actionType {
  SET_USER = "SET_USER",
}

export type ActionProps = {
  type: actionType;
  user: User;
};

const reducer = (state: UserState, action: ActionProps) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
