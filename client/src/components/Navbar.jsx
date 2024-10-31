import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const { openSignIn } = useClerk();
  // eslint-disable-next-line no-unused-vars
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);
  return (
    <div className="mx-4 flex items-center justify-between py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="Navbar Logo" />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 sm:px-7 sm:py-2.5">
            <img width={30} src={assets.credit_icon} alt="Credit Icon" />
            <p>Credits: {credit}</p>
          </button>
          <UserButton />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
