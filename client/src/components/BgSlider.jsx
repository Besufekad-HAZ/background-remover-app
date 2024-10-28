import { useState } from "react";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(250);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div>
      {/* Title*/}
      <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text pb-2 text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Remove Background With High <br /> Quality and Accuracy
      </h2>
    </div>
  );
};

export default BgSlider;
