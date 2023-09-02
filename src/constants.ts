import {
  MdGroups,
  MdHomeFilled,
  MdMenuBook,
  MdOutlineRoomService,
} from "react-icons/md";

import I1 from "./assets/img/i1.png";
import F1 from "./assets/img/f1.png";
import C3 from "./assets/img/c3.png";
import Fi1 from "./assets/img/fi1.png";

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

export const showcaseData = [
  {
    id: 1,
    name: "Icecream",
    description: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    description: "Fresh Strawberries",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    description: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    description: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: Fi1,
  },
];
