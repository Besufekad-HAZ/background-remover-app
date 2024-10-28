import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(80);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div>
      {/* Title*/}
      <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text pb-2 text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Remove Background With High <br /> Quality and Accuracy
      </h2>

      <div>
        {/* Background Image */}
        <img
          src={assets.image_w_bg}
          alt="image with background for slider"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
      </div>
    </div>
  );
};

export default BgSlider;
