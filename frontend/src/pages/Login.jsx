import React, { useState, useContext } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { loginUser } = useContext(AuthContext);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", form);
      loginUser(res.data.token, res.data.user);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
