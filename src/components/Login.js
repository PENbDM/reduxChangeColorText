import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
function Login() {
  const dispatch = useDispatch();
  return (
    <div className="headerLogin">
      <button
        onClick={() => {
          dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </div>
  );
}

export default Login;
