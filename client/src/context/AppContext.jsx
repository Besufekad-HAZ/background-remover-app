import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [creditor, setCreditor] = useState(false);

  const loadCreditsData = async () => {
    try {
        
    }
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

export default AppContextProvider;
