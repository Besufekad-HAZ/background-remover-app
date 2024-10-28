import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 py-20 lg:mx-44 xl:py-40">
      <h2 className="mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Steps to remove background <br /> image in seconds
      </h2>
      <div className="mt-16 flex flex-wrap items-start justify-center gap-4 xl:mt-24">
        <div className="flex items-start gap-4 rounded border bg-white p-7 pb-10 drop-shadow-md transition-all duration-500 hover:scale-105">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="mt-1 text-sm text-neutral-500">
              Select an image file to upload.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded border bg-white p-7 pb-10 drop-shadow-md transition-all duration-500 hover:scale-105">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="mt-1 text-sm text-neutral-500">
              Automatically remove the background from the image.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded border bg-white p-7 pb-10 drop-shadow-md transition-all duration-500 hover:scale-105">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="mt-1 text-sm text-neutral-500">
              Save the edited image to your device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
