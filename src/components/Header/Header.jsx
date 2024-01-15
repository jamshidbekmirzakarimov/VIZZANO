import React, { useState } from "react";
import { Button } from "antd";
import CreateUser from "../CreateUser/CreateUser";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };



  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <header className="py-[20px] border-b-[1px] border-[black]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[15px]">
              <div className="flex items-center justify-center bg-slate-600 w-[50px] h-[50px] rounded-[50%]">
                <h2 className="text-[22px] text-white font-semibold">
                  {localStorage.getItem("user")?.slice(1, 2).toUpperCase()}
                </h2>
              </div>
              <button onClick={logout} className="bg-yellow-400 rounded-md py-[5px] px-[10px] text-white font-medium cursor-pointer">log out</button>
            </div>
            <button
              className="bg-cyan-700 py-[5px] px-[10px] rounded-md font-medium text-white flex gap-4 items-center"
              onClick={showModal}
            >
              Add User{" "}
              <div className="flex items-center justify-center w-[30px] h-[30px] bg-white p-[5px] rounded-md text-cyan-700 text-[20px]">
                +
              </div>
            </button>
            <CreateUser
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              modalText={modalText}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
