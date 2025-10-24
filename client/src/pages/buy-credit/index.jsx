import { useContext, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { assets, plans } from "@/assets";
import { AppContext } from "@/providers/AppContext";
import { initializePayment } from "@/features/payments";

const BuyCreditPage = () => {
  const { backendUrl } = useContext(AppContext);
  const { user, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [loadingPlan, setLoadingPlan] = useState(null);

  const handlePurchase = async (plan) => {
    try {
      if (!isSignedIn) {
        return toast.error("Please sign in to purchase credits");
      }
      if (!backendUrl) {
        return toast.error("Missing backend configuration");
      }

      setLoadingPlan(plan.id);

      const token = await getToken();
      const data = await initializePayment({
        backendUrl,
        token,
        payload: {
          amount: plan.price,
          email: user.primaryEmailAddress.emailAddress,
          first_name: user.firstName || "User",
          last_name: user.lastName || "",
          clerkId: user.id,
          credits: plan.credits,
        },
      });

      if (data.success) {
        window.location.href = data.checkout_url;
      } else {
        toast.error("Payment initialization failed");
      }
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error("Payment initialization error");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="mb-10 min-h-[80vh] pt-14 text-center">
      <button className="mb-6 rounded-full border border-gray-400 px-10 py-2">
        Our Plans
      </button>
      <h2 className="mt-2 bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text py-5 pb-2 text-center text-2xl font-semibold text-transparent sm:mb-20 md:text-3xl lg:text-4xl">
        Choose the plan that&apos;s right for you
      </h2>
      <div className="flex flex-wrap justify-center gap-6 text-left">
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
            <button
              className="mt-8 w-full min-w-52 rounded-md bg-gray-800 py-2.5 text-sm text-white disabled:opacity-50"
              onClick={() => handlePurchase(item)}
              disabled={loadingPlan === item.id}
            >
              {loadingPlan === item.id ? "Processing..." : "Purchase"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCreditPage;
