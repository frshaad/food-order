import {
  MdGroups,
  MdHomeFilled,
  MdMenuBook,
  MdOutlineRoomService,
} from "react-icons/md";

import C3 from "./assets/img/c3.webp";
import F1 from "./assets/img/f1.webp";
import Fi1 from "./assets/img/fi1.webp";
import I1 from "./assets/img/i1.webp";
import type { FoodCategory, ShowcaseFood } from "./types";

export const NAV_LINKS = [
  {
    id: 1,
    path: "/",
    title: "home",
    icon: MdHomeFilled,
  },
  {
    id: 2,
    path: "/menu",
    title: "menu",
    icon: MdMenuBook,
  },
  {
    id: 3,
    path: "/about-us",
    title: "about us",
    icon: MdGroups,
  },
  {
    id: 4,
    path: "/services",
    title: "services",
    icon: MdOutlineRoomService,
  },
];

export const showcaseData: ShowcaseFood[] = [
  {
    id: "1",
    title: "Icecream",
    description: "Chocolate & vanilla",
    price: 5.25,
    imageUrl: I1,
  },
  {
    id: "2",
    title: "Strawberries",
    description: "Fresh Strawberries",
    price: 10.25,
    imageUrl: F1,
  },
  {
    id: "3",
    title: "Chicken Kebab",
    description: "Mixed Kebab Plate",
    price: 8.25,
    imageUrl: C3,
  },
  {
    id: "4",
    title: "Fish Kebab",
    description: "Mixed Fish Kebab",
    price: 5.25,
    imageUrl: Fi1,
  },
];

export const categories: {
  id: number;
  name: FoodCategory;
}[] = [
  {
    id: 1,
    name: "Chicken",
  },
  {
    id: 2,
    name: "Curry",
  },
  {
    id: 3,
    name: "Rice",
  },
  {
    id: 4,
    name: "Fish",
  },
  {
    id: 5,
    name: "Fruits",
  },
  {
    id: 6,
    name: "Icecreams",
  },

  {
    id: 7,
    name: "Drinks",
  },
];
