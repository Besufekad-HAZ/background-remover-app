import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-44">
      <img width={150} src={assets.logo} alt="Logo icon for the footer" />
      <p className="text-neutral-500">
        © 2024 Remove Background. All rights reserved.
      </p>
      <div>
        <img width={40} src={assets.facebook_icon} alt="facebook icon" />
        <img width={40} src={assets.twitter_icon} alt="twitter icon" />
        <img width={40} src={assets.google_plus_icon} alt="googl plus icon" />
      </div>
    </div>
  );
};

export default Footer;
