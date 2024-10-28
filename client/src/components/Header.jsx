import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      {/* Left side  */}
      <div>
        <h1>
          Remove the <br /> <span>background</span> from <br />
          your images for free.
        </h1>
        <p>
          Upload your image and get a clean, <br /> transparent background in
          seconds.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1">
            <img src={assets.upload_btn_icon} alt="" />
            <p>Upload your image</p>
          </label>
        </div>
      </div>
      {/* Right side  */}
      <div></div>
    </div>
  );
};

export default Header;
