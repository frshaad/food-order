import UserProfileIcon from "./UserProfileIcon";
import CartButton from "./CartButton";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
      <div className="hidden justify-between md:flex">
        <Logo />
        <div className="flex items-center gap-8">
          <NavLinks />
          <CartButton />
          <UserProfileIcon />
        </div>
      </div>

      {/* //TODO: Mobile */}
      <div className="flex items-center justify-between md:hidden">
        <Logo />
        <UserProfileIcon />
      </div>
    </header>
  );
};

export default Header;
