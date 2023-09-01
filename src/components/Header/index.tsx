import UserProfileIcon from "./UserProfileIcon";
import CartButton from "./CartButton";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      <div className="hidden justify-between md:flex">
        <Logo />
        <div className="flex items-center gap-8">
          <NavLinks />
          <CartButton />
          <UserProfileIcon />
        </div>
      </div>

      {/* //TODO: Mobile */}
      <div className="flex md:hidden">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
