import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/RouterRoot";

const LoginPage = () => {
  const state = [
    { id: 1, type: "text", label: "UserName" },
    { id: 2, type: "text", label: "Email" },
    { id: 3, type: "password", label: "Create Password" },
    { id: 4, type: "password", label: "Confirm Password" },
    { id: 5, type: "submit", label: "Create" },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        LoginPage
      </h1>
      <form>
        <h2 className="text-orange-600 font-bold">New Account</h2>
        {state.map((l) => (
          <div>
            <input type={l.type} required />
            <label>{l.label}</label>
          </div>
        ))}
        <p className="text-orange-600">
          Already have an account?
          <Link
            className="font-bold cursor-pointer text-gray-700 mx-1"
            to={PATH.HERO}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
