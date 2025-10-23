import axios from "axios";

export const initializePayment = async ({ backendUrl, token, payload }) => {
  const { data } = await axios.post(
    `${backendUrl}/api/payment/initialize`,
    payload,
    {
      headers: { token },
    },
  );

  return data;
};
