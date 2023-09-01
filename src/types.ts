import { User } from "firebase/auth";

export type UserState = {
  user: User | null;
};
