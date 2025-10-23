import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { AppContextProvider } from "@/providers/AppContext";
import { env } from "@/lib/config/env";

const { clerkPublishableKey } = env;

if (!clerkPublishableKey) {
  throw new Error("Missing Publishable Key");
}

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
        <AppContextProvider>{children}</AppContextProvider>
      </ClerkProvider>
    </BrowserRouter>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
