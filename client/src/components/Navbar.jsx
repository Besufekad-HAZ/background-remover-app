import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="mx-4 flex items-center justify-between py-3 lg:mx-44">
      <img className="w-32 sm:w-44" src={assets.logo} alt="Navbar Logo" />
      <button className="flex justify-between bg-zinc-800 text-white">
        Get Started
        <img
          src={assets.arrow_icon}
          alt="Get started Arrow Icon"
          className="bg-yellow-400"
        />
      </button>
    </div>
  );
};

export default Navbar;
