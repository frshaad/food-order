import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.webp";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={logo} alt="logo" className="w-10 object-cover" />
      <p className="text-xl font-bold text-headingColor">City</p>
    </Link>
  );
};

export default Logo;
