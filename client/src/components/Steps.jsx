import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 py-20 lg:mx-44 xl:py-40">
      <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Steps to remove background <br /> image in seconds
      </h2>
      <div className="flex">
        <div>
          <img src={assets.upload_icon} alt="" />
          <div>
            <p>Upload image</p>
            <p>Select an image file to upload.</p>
          </div>
        </div>
        <div>
          <img src={assets.remove_bg_icon} alt="" />
          <div>
            <p>Remove Background</p>
            <p>Automatically remove the background from the image.</p>
          </div>
        </div>
        <div>
          <img src={assets.download_icon} alt="" />
          <div>
            <p>Download image</p>
            <p>Save the edited image to your device.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
