import { useClerk } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { openSignIn } = useClerk();
  return (
    <div className="mx-4 flex items-center justify-between py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="Navbar Logo" />
      </Link>
      <button
        onClick={() => {
          openSignIn({});
        }}
        className="flex items-center gap-4 rounded-full bg-zinc-800 px-4 py-2 text-sm text-white sm:px-8 sm:py-3"
      >
        Get Started
        <img
          src={assets.arrow_icon}
          alt="Get started Arrow Icon"
          className="w-3 sm:w-4"
        />
      </button>
    </div>
  );
};

export default Navbar;
