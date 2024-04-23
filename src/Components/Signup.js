import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async () => {
    await axios
      .post("https://city-server-sable.vercel.app:5000/signup", {
        username: Name,
        email: email,
        password: password,
        cpassword: confirmPassword,
      })
      .then((res) => {
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <img src="/forestveiw.jpg" className="fixed left-0 right-0" />
      <div className="bg-white p-8 rounded-lg shadow-md z-50">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 rounded border border-gray-300"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mt-4 rounded border border-gray-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mt-4 rounded border border-gray-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mt-4 rounded border border-gray-300"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 mt-4 rounded"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
