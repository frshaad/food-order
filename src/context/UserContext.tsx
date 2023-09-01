import { useContext, createContext, useReducer } from "react";
import { UserState } from "../types";
import { ActionProps } from "./reducer";

type Props = {
  reducer: (state: UserState, action: ActionProps) => UserState;
  initialState: UserState;
  children: React.ReactNode;
};

// Todo: change context type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StateContext = createContext<any>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useStateValue = () => useContext(StateContext);

export const StateProvider = ({ reducer, initialState, children }: Props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
