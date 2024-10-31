import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Upload = () => {
  const { removeBg } = useContext(AppContext);

  return (
    <div className="pb-16">
      {/* Title */}
      <h2 className="mb-12 mt-8 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text py-6 pb-2 text-center text-2xl font-semibold text-transparent sm:mb-20 md:py-16 md:text-3xl lg:text-4xl">
        See the magic. Try now
      </h2>

      <div className="mb-24 text-center">
        <input
          onChange={(e) => removeBg(e.target.files[0])}
          type="file"
          accept="image/*"
          id="upload2"
          hidden
        />
        <label
          className="m-auto inline-flex cursor-pointer gap-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-500 px-8 py-3.5 transition-all duration-700 hover:scale-105"
          htmlFor="upload2"
        >
          <img width={20} src={assets.upload_btn_icon} alt="" />
          <p className="text-sm text-white">Upload your image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
