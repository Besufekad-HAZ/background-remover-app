import axios from "axios";

export const fetchCredits = async ({ backendUrl, token }) => {
  const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
    headers: { token },
  });

  return data;
};
