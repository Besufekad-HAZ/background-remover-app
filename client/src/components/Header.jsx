import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mt-10 flex items-center justify-between gap-y-10 px-4 max-sm:flex-col-reverse sm:mt-20 lg:px-44">
      {/* Left side  */}
      <div>
        <h1 className="text-4xl font-bold leading-tight text-neutral-700 xl:text-5xl 2xl:text-6xl">
          Remove the <br />
          <span className="bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br />
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
      <div>
        <h1>Holaaaaaa</h1>
      </div>
    </div>
  );
};

export default Header;
