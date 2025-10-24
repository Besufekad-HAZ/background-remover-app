import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/providers/AppContext";

const PaymentSuccess = () => {
  const { loadCreditsData, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Force refresh credits immediately
    const refreshCredits = async () => {
      try {
        await loadCreditsData();
        console.log("Credits refreshed after payment");
      } catch (error) {
        console.error("Failed to refresh credits:", error);
      }
    };

    refreshCredits();

    // Redirect to home or credits page after a short delay
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [loadCreditsData, navigate]);

  const handleManualRefresh = async () => {
    setRefreshing(true);
    try {
      await loadCreditsData();
    } catch (error) {
      console.error("Manual refresh failed:", error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful!
        </h1>
        <p className="mt-2">Your credits have been added to your account.</p>
        <p className="mt-1 text-sm text-gray-600">
          Current credits: {credit || "Loading..."}
        </p>
        <button
          onClick={handleManualRefresh}
          disabled={refreshing}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {refreshing ? "Refreshing..." : "Refresh Credits"}
        </button>
        <p className="mt-2 text-sm">Redirecting you back...</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
