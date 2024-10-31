import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "@clerk/clerk-react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [creditor, setCreditor] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const {getToken} = useAuth();

  const loadCreditsData = async () => {
    try {
        const token = await getToken();
        const response = await fetch(`${backendUrl}/api/user/credits`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        setCreditor(data.creditor);
    } catch (error) {
        console.error(error);
    }
  };

  const value = {
    // Add your context values here
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppContextProvider };
