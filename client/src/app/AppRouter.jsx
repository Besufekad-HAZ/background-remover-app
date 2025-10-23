import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { HomePage, ResultPage, BuyCreditPage } from "@/pages";
import { PaymentFailed, PaymentSuccess } from "@/features/payments";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/buy" element={<BuyCreditPage />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failed" element={<PaymentFailed />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
