import { useState } from "react";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(250);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="500"
        value={sliderPosition}
        onChange={handleSliderChange}
      />
      <p>Slider Position: {sliderPosition}</p>
    </div>
  );
};

export default BgSlider;
