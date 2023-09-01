import { User } from "firebase/auth";
import { motion } from "framer-motion";
import { MdOutlineAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  user: User | null;
};

const DropDownMenu = ({ user }: Props) => {
  return (
    <motion.ul
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className="absolute right-0 top-12 flex w-40 flex-col rounded-lg bg-gray-50 text-textColor shadow-xl"
    >
      {user && user.email === "farshad.hatami95@gmail.com" ? (
        <li className="cursor-pointer rounded-t-lg px-4 py-3 transition hover:bg-slate-200">
          <Link to="/create-item" className="flex items-center gap-4">
            <MdOutlineAdd />
            New Item
          </Link>
        </li>
      ) : null}
      <li className="cursor-pointer rounded-b-lg px-4 py-3 transition hover:bg-slate-200">
        <button className="flex items-center gap-4">
          <MdLogout />
          Sign Out
        </button>
      </li>
    </motion.ul>
  );
};

export default DropDownMenu;
