import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-44">
      <img width={150} src={assets.logo} alt="Logo icon for the footer" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        © 2024 Remove Background. All rights reserved.
      </p>
      <div className="flex gap-1">
        <a
          href="https://web.facebook.com/besufekad.alemu.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={48} src={assets.facebook_icon} alt="Facebook icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/besufekadalemu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={40} src={assets.linkedIn_icon} alt="LinkedIn icon" />
        </a>
        <a
          href="https://github.com/Besufekad-HAZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={40} src={assets.github_icon} alt="Github icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
