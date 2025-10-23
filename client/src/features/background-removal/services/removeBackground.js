import axios from "axios";

export const removeBackground = async ({ backendUrl, token, image }) => {
  const formData = new FormData();
  if (image) {
    formData.append("image", image);
  }

  const { data } = await axios.post(
    `${backendUrl}/api/image/remove-bg`,
    formData,
    {
      headers: { token },
    },
  );

  return data;
};
