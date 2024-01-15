import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../hooks/useGetUser";
const GetUser = () => {
//   const [data, setData] = useState();
//   const { getAllUsers } = useUsersApi();
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <section className="mt-[50px]">
        <div className="container">
            <button className="btncha">Contact me</button>
        </div>
      </section>
    </>
  );
};

export default GetUser;
