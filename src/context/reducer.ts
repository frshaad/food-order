import { ActionProps, ActionType, AppState } from "../types";

const reducer = (state: AppState, action: ActionProps) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ActionType.SET_FOODS:
      return {
        ...state,
        foods: action.foodItems,
      };

    default:
      return state;
  }
};

export default reducer;
