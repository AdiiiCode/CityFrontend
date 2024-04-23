import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post("https://city-server-sable.vercel.app:5000/login", {
        email: email,
        password: password,
      })

      .then((res) => {
        const { userid } = res.data;
        alert("Hello");
        navigate(`./Home/${userid}`);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 400) {
            alert("Invalid email or password");
          } else if (err.request) {
            alert("No response from server");
          }
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <img src="/forestveiw.jpg" className="fixed left-0 right-0" />

      <div className="bg-white p-8 rounded-lg shadow-md z-50">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="email"
          className="w-full p-2 mb-4 rounded border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full mb-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>

        <Link
          to="/signup"
          className="bg-green-200 text-black font-semibold py-2 px-4 rounded"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
