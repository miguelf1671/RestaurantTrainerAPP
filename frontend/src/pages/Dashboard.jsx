import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <h1>Welcome, {userInfo.first_name}</h1>
    </>
  );
}
export default Dashboard;
