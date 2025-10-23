import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { fetchCredits } from "@/features/payments";
import { removeBackground as removeBackgroundRequest } from "@/features/background-removal";
import { env } from "@/lib/config/env";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const { backendUrl } = env;

  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const loadCreditsData = async () => {
    try {
      if (!backendUrl) {
        console.warn("Missing backend URL; cannot load credits.");
        return;
      }
      const token = await getToken();
      const data = await fetchCredits({ backendUrl, token });

      if (data.success) {
        setCredit(data.credits);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (imageFile) => {
    try {
      if (!isSignedIn) {
        toast.error("Please sign in to use this feature");
        return openSignIn();
      }
      if (!backendUrl) {
        toast.error("Missing backend configuration");
        return;
      }
      setImage(imageFile);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      const data = await removeBackgroundRequest({
        backendUrl,
        token,
        image: imageFile,
      });

      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppContextProvider };
