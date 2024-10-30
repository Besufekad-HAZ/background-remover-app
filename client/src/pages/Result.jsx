import { assets } from "../assets/assets";

const Result = () => {
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
              src={assets.image_w_bg}
              alt="Original Image"
            />
          </div>

          {/* Right Side (Result Image) */}
          <div className="flex flex-col">
            <p className="mb-2 font-semibold text-gray-600">
              Background Removed
            </p>
            <div className="bg-layer relative h-full overflow-hidden rounded-md border-gray-300">
              {/* <img
                width={500}
                src={assets.image_wo_bg}
                alt="Background Removed Image"
              /> */}
              <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 transform">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
