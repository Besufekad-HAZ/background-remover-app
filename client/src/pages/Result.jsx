import { assets } from "../assets/assets";

assets
const Result = () => {
  return (
    <div className="mx-4 my-3 mt-14 min-h-[75vh] lg:mx-44">
      <div>
        {/* Image Container */}
        <div>
          {/* Left Side (Original Image)*/}
          <div>
            <h2 className="mb-4 mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text pb-2 text-center text-2xl font-semibold text-transparent sm:mb-20 md:text-3xl lg:text-4xl">
              Original Image
            </h2>
            <img width={500} src={assets.image_w_bg} alt="Original Image" />
          </div>

          {/* Right Side (Result Image)*/}
          <div>
            <h2 className="mb-4 mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text pb-2 text-center text-2xl font-semibold text-transparent sm:mb-20 md:text-3xl lg:text-4xl">
              Result Image
            </h2>
            <img width={500} src={assets.image_wo_bg} alt="Result Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
