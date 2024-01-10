import axios from "../api/api";
import { toast } from "react-hot-toast";
function useCreateUser() {
  const create = async (values) => {
    const data = {
      fullName: values.text,
    };
    try {
        const response = await axios.post("user/create", data);
        console.log(response);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred during login.");
        }
      }
  };
  return {create}
}

export default useCreateUser;
