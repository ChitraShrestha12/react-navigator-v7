import viteLogo from "../assets/vite.svg";
import { Link, NavLink } from "react-router";;
//box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
      <div className="logo">
        <img src={viteLogo} alt="vite logo" />
      </div>

      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about-us">About</Link>
        <Link to="/contact-us">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;