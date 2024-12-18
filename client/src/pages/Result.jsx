import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
const Result = () => {
  const { resultImage, image, removeBg } = useContext(AppContext);
  const fileInputRef = useRef(null);

  const handleTryAnotherImage = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="mx-4 my-3 mt-14 min-h-[75vh] lg:mx-44">
      <div className="rounded-lg bg-white px-8 py-6 drop-shadow-sm">
        {/* Image Container */}
        <div className="flex grid-cols-2 flex-col gap-8 sm:grid">
          {/* Left Side (Original Image) */}
          <div>
            {/* Title */}
            <p className="mb-2 font-semibold text-gray-600">Original Image</p>
            <img
              className="rounded-md border"
              width={500}
              src={image ? URL.createObjectURL(image) : assets.image_w_bg}
              alt="Original Image"
            />
          </div>

          {/* Right Side (Result Image) */}
          <div className="flex flex-col">
            <p className="mb-2 font-semibold text-gray-600">
              Background Removed
            </p>
            <div className="bg-layer relative h-full overflow-hidden rounded-md border-gray-300">
              <img
                width={500}
                src={resultImage ? resultImage : ""}
                alt="Background Removed Image"
              />
              {!resultImage && image && (
                <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-600 border-t-transparent"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Buttons */}
        {resultImage && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  removeBg(e.target.files[0]);
                }
              }}
              hidden
            />
            {/* Try Another Image Button */}
            <button
              className="rounded-full border border-violet-600 px-8 py-2.5 text-sm text-violet-600 transition-all duration-700 hover:scale-105"
              onClick={handleTryAnotherImage}
            >
              Try another image
            </button>
            {/* Download Button */}
            <a
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-2.5 text-sm text-white transition-all duration-700 hover:scale-105"
              href={resultImage}
              download
            >
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
