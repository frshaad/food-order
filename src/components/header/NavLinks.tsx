import { Link } from "react-router-dom";

import { NAV_LINKS } from "../../constants";

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

export default NavLinks;
