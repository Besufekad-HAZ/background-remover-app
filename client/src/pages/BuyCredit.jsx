import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="mb-10 min-h-[80vh] pt-14 text-center">
      <button className="rounded-full border border-gray-400 px-10 py-2">
        Our Plans
      </button>
      <h2 className="mt-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text py-5 pb-2 text-center text-2xl font-semibold text-transparent sm:mb-20 md:text-3xl lg:text-4xl">
        Choose the plan that&apos;s right for you
      </h2>
      <div>
        {/* Plans */}
        {plans.map((item, index) => (
          <div key={index}>
            <img width={40} src={assets.logo_icon} alt="Logo icon" />
            <p>{item.id}</p>
            <p>{item.desc}</p>
            <p>
              <span>${item.price}</span>/ {item.credits} credits
            </p>
            <button>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
