import { User } from "firebase/auth";

export type UserState = {
  user: User | null;
};

export enum ActionType {
  SET_USER = "SET_USER",
}

export type ActionProps = {
  type: ActionType;
  user: User | null;
};

export type FoodCategory =
  | "Chicken"
  | "Curry"
  | "Rice"
  | "Fish"
  | "Fruits"
  | "Icecreams"
  | "Drinks"
  | "empty";

export type Food = {
  id: string;
  title: string;
  category: FoodCategory;
  imageUrl: string;
  price: number;
  calories: number;
  qty: number;
};
