import { createContext, useReducer } from "react";

import { ActionProps, AppState } from "../types";

type Props = {
  reducer: (state: AppState, action: ActionProps) => AppState;
  initialState: AppState;
  children: React.ReactNode;
};

type StateContextType = [AppState, React.Dispatch<ActionProps>];

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
