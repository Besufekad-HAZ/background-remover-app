import { assets } from "../assets/assets";

assets;
const Result = () => {
  return (
    <div className="mx-4 my-3 mt-14 min-h-[75vh] lg:mx-44">
      <div className="rounded-lg bg-white px-8 py-6 drop-shadow-sm">
        {/* Image Container */}
        <div className="flex grid-cols-2 flex-col gap-8 sm:grid">
          {/* Left Side (Original Image)*/}
          <div>
            {/* Title */}
            <p className="">Original Image</p>
            <img width={500} src={assets.image_w_bg} alt="Original Image" />
          </div>

          {/* Right Side (Result Image)*/}
          <div>
            <p className="">Background Removed</p>
            <img
              width={500}
              src={assets.image_wo_bg}
              alt="Background Removed Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
