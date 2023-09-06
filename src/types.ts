import { User } from "firebase/auth";

export type AppState = {
  user: User | null;
  foods: Food[] | null;
};

export enum ActionType {
  SET_USER = "SET_USER",
  SET_FOODS = "SET_FOODS",
}

export type ActionProps = {
  type: ActionType;
  user?: User | null;
  foodItems?: Food[] | null;
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
