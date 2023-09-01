import { ActionProps, ActionType, UserState } from "../types";

const reducer = (state: UserState, action: ActionProps) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
