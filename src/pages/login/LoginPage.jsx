import React from "react";

const LoginPage = () => {
  const state = [
    { id: 1, type: "text", label: "UserName" },
    { id: 2, type: "password", label: "Password" },
    { id: 3, type: "text", label: "Password" },
    { id: 4, type: "text", label: "Password" },
    { id: 5, type: "text", label: "Password" },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        LoginPage
      </h1>
      <form>
        <h2>New Account</h2>
        <div></div>
      </form>
    </div>
  );
};

export default LoginPage;
