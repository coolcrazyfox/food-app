import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../routes/RouterRoot";

const LoginPage = () => {
  const state = [
    { id: 1, type: "text", label: "UserName" },
    { id: 2, type: "text", label: "Email" },
    { id: 3, type: "password", label: "Create Password" },
    { id: 4, type: "password", label: "Confirm Password" },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <h1 className="text-orange-600 font-bold text-4xl text-center my-9">
        Login
      </h1>
      <div className="flex justify-center items-center min-h-full bg-gray-300">
        <form className="flex flex-col text-center bg-slate-500 py-[60px] px-[80px] border rounded-[10px]">
          <h2 className="text-white tracking-widest font-bold uppercase mb-[50px]">
            New Account
          </h2>
          {state.map((l) => (
            <div className="relative w-[300px] mb-[40px]">
              <input
                className="relative w-full py-[10px] border-none border-b-gray-700 bg-gray-300 bg-gradient-to-t from-slate-400 outline-none text-white"
                type={l.type}
                required
                value={l.value}
              />
              <label className="absolute left-0  py-[10px] pointer-events-none text-white uppercase">
                {l.label}
              </label>
            </div>
          ))}
          <div>
            <button>Create</button>
          </div>
          <p className="text-white uppercase">
            Already have an account?
            <Link
              className="font-bold cursor-pointer text-orange-400 mx-1"
              to={PATH.HERO}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
