import { Link } from "react-router-dom";

import { NAV_LINKS } from "../../constants";

const NavLinks = () => (
  <ul className="flex items-center gap-8 capitalize">
    {NAV_LINKS.map((link) => (
      <li
        key={link.id}
        className="rounded-sm px-4 py-1 text-base text-textColor transition-all duration-100 ease-in-out hover:bg-cartBg hover:text-primary"
      >
        <Link to={link.path}>{link.title}</Link>
      </li>
    ))}
  </ul>
);

export default NavLinks;
