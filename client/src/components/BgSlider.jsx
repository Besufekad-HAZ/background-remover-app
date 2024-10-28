import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div>
      {/* Title*/}
      <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text pb-2 text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Remove Background With High <br /> Quality and Accuracy
      </h2>

      <div className="relative m-auto w-full max-w-3xl overflow-hidden rounded-xl">
        {/* Background Image */}
        <img
          src={assets.image_w_bg}
          alt="image with background for slider"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
        {/* Foreground Image */}
        <img
          className="absolute left-0 top-0 h-full w-full"
          src={assets.image_wo_bg}
          alt="image without background for slider"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />
        {/* Slider */}
        <input
          className="aboslute slider left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform"
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default BgSlider;
