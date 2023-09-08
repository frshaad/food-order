import { User } from "firebase/auth";

export type AppState = {
  user: User | null;
  foods: Food[] | null;
  cartItems: Food[] | null;
};

export enum ActionType {
  SET_USER = "SET_USER",
  SET_FOODS = "SET_FOODS",
  SET_CARTITEM = "SET_CARTITEM",
}

export type ActionProps = {
  type: ActionType;
  user?: User | null;
  foodItems?: Food[] | null;
  cartItems?: Food[];
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

export type ShowcaseFood = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
};
