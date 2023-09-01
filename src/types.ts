import { User } from "firebase/auth";

export type UserState = {
  user: User | null;
};

export enum ActionType {
  SET_USER = "SET_USER",
}

export type ActionProps = {
  type: ActionType;
  user: User;
};
