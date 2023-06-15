import React from "react";

const LoginPage = () => {
  const state = [
    { id: 1, type: "text", label: "UserName" },
    { id: 2, type: "text", label: "Email" },
    { id: 3, type: "password", label: "Create Password" },
    { id: 4, type: "password", label: "Password" },
    { id: 5, type: "submit", label: "Password" },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        LoginPage
      </h1>
      <form>
        <h2>New Account</h2>
        {state.map((l) => (
          <div>
            <input type={l.type} />
            <label>{l.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default LoginPage;
