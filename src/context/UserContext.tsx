import { createContext, useReducer } from "react";
import { ActionProps, UserState } from "../types";

type Props = {
  reducer: (state: UserState, action: ActionProps) => UserState;
  initialState: UserState;
  children: React.ReactNode;
};

type StateContextType = [UserState, React.Dispatch<ActionProps>];

export const StateContext = createContext<StateContextType>(
  null as unknown as StateContextType,
);

export const StateProvider = ({ reducer, initialState, children }: Props) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
