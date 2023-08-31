import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.png";
import { NAV_LINKS } from "../constants";

const NavLinks = () => (
  <ul className="flex items-center gap-8 capitalize">
    {NAV_LINKS.map((link) => (
      <li
        key={link.id}
        className="text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor"
      >
        <Link to={link.path}>{link.title}</Link>
      </li>
    ))}
  </ul>
);

const CartButton = () => (
  <button className="relative rounded-full p-2 text-2xl text-textColor">
    <MdShoppingBasket />
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cartNumBg p-2 text-sm font-semibold text-white">
      3
    </span>
  </button>
);

const UserProfileIcon = () => (
  <img
    src={avatar}
    alt="user profile picture"
    className="w-10 drop-shadow-xl"
  />
);

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* //TODO: Desktop and Tablet */}
      <div className="hidden justify-between md:flex">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 object-cover" />
          <p className="text-xl font-bold text-headingColor">City</p>
        </Link>
        <div className="flex items-center gap-8">
          <NavLinks />
          <CartButton />
          <UserProfileIcon />
        </div>
      </div>

      {/* //TODO: Mobile */}
      <div className="flex md:hidden"></div>
    </header>
  );
};

export default Header;
