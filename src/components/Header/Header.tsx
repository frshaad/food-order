import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";

import CartButton from "./CartButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserProfileIcon from "./UserProfileIcon";

const Header = () => {
  const matchesMobile = useMediaQuery("(max-width: 760px)");

  return (
    <header className="fixed z-50 w-screen bg-primary p-1 px-4 shadow-md md:p-6 md:px-16">
      <div
        className={clsx("justify-between", {
          "flex items-center md:hidden": matchesMobile,
          "hidden md:flex": !matchesMobile,
        })}
      >
        {matchesMobile ? <CartButton /> : null}
        <Logo />
        <div className="flex items-center gap-8">
          {matchesMobile ? null : <NavLinks />}
          {matchesMobile ? null : <CartButton />}
          <UserProfileIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
