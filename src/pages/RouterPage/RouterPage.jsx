import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const RouterPage = () => {
  const token = localStorage.getItem("token");
  const check = () => {
    if (token) return "/main";
    return "/login";
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={check()} />} />
        {token && <Route path="/main" element={<Home />} />}
        {!token && <Route path="/login" element={<Login />} />}
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
};

export default RouterPage;
