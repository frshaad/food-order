import { IconType } from "react-icons";
import {
  MdGroups,
  MdHomeFilled,
  MdMenuBook,
  MdOutlineRoomService,
} from "react-icons/md";

export const NAV_LINKS: {
  id: number;
  path: string;
  title: string;
  icon: IconType;
}[] = [
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
