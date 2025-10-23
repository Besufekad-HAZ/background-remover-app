import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-200">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
