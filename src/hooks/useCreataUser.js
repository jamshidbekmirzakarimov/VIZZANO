import axios from "../api/api";
import { toast } from "react-hot-toast";

function useCreateUser(onCancel) {
  const create = async (values) => {
    const data = {
      fullName: values.text,
      flowType: values.flowType,
    };
    try {
      const response = await axios.post("/user/create", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response,"response");
      if(response.status === 200){
        onCancel()
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during user creation.");
      }
    }
  };

  return { create };
}

export default useCreateUser;
