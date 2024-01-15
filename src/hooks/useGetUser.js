import axios from "../api/api";

export const getAllUsers = async () => {
  try {
    const response = await axios.post(
      "/merchants",
      {
        flowType: "1",
        createDate: Date.now(),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response, "qale");
  } catch (error) {
    console.error(error);
  }
};
