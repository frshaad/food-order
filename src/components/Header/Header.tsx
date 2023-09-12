import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";

import CartButton from "./CartButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserProfileIcon from "./UserProfileIcon";

type Props = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setIsCartOpen }: Props) => {
  const matchesMobile = useMediaQuery("(max-width: 760px)");

  return (
    <header className="fixed top-0 z-50 w-full bg-primary py-4">
      <div
        className={clsx("mx-auto w-11/12 justify-between", {
          "flex items-center md:hidden": matchesMobile,
          "hidden md:flex": !matchesMobile,
        })}
      >
        {matchesMobile ? <CartButton setIsCartOpen={setIsCartOpen} /> : null}
        <Logo />
        <div className="flex items-center gap-8">
          {matchesMobile ? null : <NavLinks />}
          {matchesMobile ? null : <CartButton setIsCartOpen={setIsCartOpen} />}
          <UserProfileIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
