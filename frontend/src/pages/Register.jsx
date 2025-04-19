// frontend/src/pages/Register.jsx
import React, { useState } from "react";
import API from "../services/api";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", form);
      alert("Registration successful");
    } catch (err) {
      alert("Error: " + err.response.data.error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border p-2" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full border p-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
