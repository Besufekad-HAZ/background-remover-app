import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Navbar Logo" />
      <button>
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
