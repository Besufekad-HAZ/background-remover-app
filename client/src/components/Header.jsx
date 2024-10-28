import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mt-10 flex items-center justify-between gap-y-10 px-4 max-sm:flex-col-reverse sm:mt-20 lg:px-44">
      {/* Left side  */}
      <div>
        <h1 className="text-4xl font-bold leading-tight text-neutral-700 xl:text-5xl 2xl:text-6xl">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-orange-700 to-orange-400 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" />
          your images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Upload your image and get a clean, <br className="max-sm:hidden" />{" "}
          transparent background in seconds.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            className="m-auto inline-flex cursor-pointer gap-3 rounded-full bg-gradient-to-r from-orange-700 to-orange-400 px-8 py-3.5 transition-all duration-700 hover:scale-105"
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-sm text-white">Upload your image</p>
          </label>
        </div>
      </div>
      {/* Right side  */}
      <div>
        <h2>Holaaaaaa</h2>
      </div>
    </div>
  );
};

export default Header;
