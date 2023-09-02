import { Link } from "react-router-dom";
import { User } from "firebase/auth";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";
import { MdOutlineAdd, MdLogout } from "react-icons/md";
import { NAV_LINKS } from "../../constants";

type DropDownProps = {
  user: User | null;
  handleLogOut: () => void;
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewItemLink = ({
  setIsDropDownOpen,
}: {
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <>
    <li className="cursor-pointer rounded-t-lg px-4 py-3 transition hover:bg-slate-200">
      <Link
        to="/create-item"
        className="flex items-center gap-4"
        onClick={() => setIsDropDownOpen(false)}
      >
        <MdOutlineAdd />
        New Item
      </Link>
    </li>
  </>
);

const MobileNavLinks = ({
  setIsDropDownOpen,
}: {
  setIsDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <>
    {NAV_LINKS.map((link) => (
      <li
        key={link.id}
        className="cursor-pointer px-4 py-3 capitalize transition hover:bg-slate-200"
      >
        <Link
          to={link.path}
          className="flex items-center gap-4"
          onClick={() => setIsDropDownOpen(false)}
        >
          <link.icon />
          {link.title}
        </Link>
      </li>
    ))}
  </>
);

const DropDownMenu = ({
  user,
  handleLogOut,
  setIsDropDownOpen,
}: DropDownProps) => {
  const matchesMobile = useMediaQuery("(max-width: 760px)");

  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className="absolute right-0 top-12 flex w-40 flex-col rounded-lg bg-gray-50 text-textColor shadow-xl"
    >
      {user && user.email === "farshad.hatami95@gmail.com" ? (
        <AddNewItemLink setIsDropDownOpen={setIsDropDownOpen} />
      ) : null}
      {matchesMobile ? (
        <MobileNavLinks setIsDropDownOpen={setIsDropDownOpen} />
      ) : null}
      <li className="cursor-pointer rounded-b-lg px-4 py-3 text-red-400 transition hover:bg-slate-200">
        <button className="flex items-center gap-4" onClick={handleLogOut}>
          <MdLogout />
          Sign Out
        </button>
      </li>
    </motion.ul>
  );
};

export default DropDownMenu;
