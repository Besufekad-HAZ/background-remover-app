import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const value = {
    // Add your context values here
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppContextProvider };
