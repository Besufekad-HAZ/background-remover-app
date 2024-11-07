// components/PaymentSuccess.jsx
import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { loadCreditsData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCreditsData();
    // Redirect to home or credits page after a short delay
    setTimeout(() => {
      navigate("/");
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Payment Successful!
        </h1>
        <p className="mt-2">Your credits have been added to your account.</p>
        <p className="mt-1">Redirecting you back...</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
