import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="mb-10 min-h-[80vh] pt-14 text-center">
      <button className="mb-6 rounded-full border border-gray-400 px-10 py-2">
        Our Plans
      </button>
      <h2 className="mt-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text py-5 pb-2 text-center text-2xl font-semibold text-transparent sm:mb-20 md:text-3xl lg:text-4xl">
        Choose the plan that&apos;s right for you
      </h2>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {/* Plans */}
        {plans.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white px-8 py-12 text-gray-700 drop-shadow-sm transition-all duration-500 hover:scale-105"
          >
            <img width={40} src={assets.logo_icon} alt="Logo icon" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/{" "}
              {item.credits} credits
            </p>
            <button className="mt-8 w-full min-w-52 rounded-md bg-gray-800 py-2.5 text-sm text-white">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
