import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo icon for the footer" />
      <p className="text-neutral-500">
        © 2024 Remove Background. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
