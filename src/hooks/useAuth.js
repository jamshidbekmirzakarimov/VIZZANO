import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../api/api";
function useAuth() {
  const navigate = useNavigate();

  const login = async (values) => {
    const data = {
      fullName: values.text,
      password: values.password,
    };
    try {
      const response = await axios.post("/user/login", data);
      console.log(response);
      if (response.status === 200) {
        toast.success("Success");
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user.fullName));
        navigate("/main");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred during login.");
      }
    }
  };

  return { login };
}

export default useAuth;
