import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <img src={assets.logo} alt="Navbar Logo" />
      <button className="flex justify-between">
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
