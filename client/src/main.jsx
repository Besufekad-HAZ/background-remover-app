import { createRoot } from "react-dom/client";
import "@/styles/globals.css";
import AppProviders from "@/app/AppProviders";
import AppRouter from "@/app/AppRouter";

createRoot(document.getElementById("root")).render(
  <AppProviders>
    <AppRouter />
  </AppProviders>,
);
