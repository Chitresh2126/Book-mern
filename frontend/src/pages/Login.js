import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../axios";

export default function Login(props) {
  const navigate = useNavigate();

  const [clientLogin, setClientLogin] = useState({
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setClientLogin({ ...clientLogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/login", clientLogin).then((res) => {
      localStorage.setItem("tokens", res.data.data);
    });

    const newRecord = { ...clientLogin, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setClientLogin({ email: "", password: "" });
    alert("User login Successfully");
    Cookies.set("data", "response.tokens");
    navigate("/login/home");
  };

  return (
    <div className="h-screen w-screen">
      <div className="bg-gray-800 flex flex-col justify-center h-screen w-screen">
        <form
          className="max-w-[400px]    w-9/12   mx-auto bg-gray-900 p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}>
          <h2 className="text-4xl text-white font-bold text-center">Sign in</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email Address</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="text"
              autoComplete="off"
              value={clientLogin.email}
              onChange={handleInput}
              name="email"
              required
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
              autoComplete="off"
              value={clientLogin.password}
              onChange={handleInput}
              name="password"
              required
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
          </div>
          <button
            type="submit"
            className="w-full my-3 py-2 bg-blue-500 hover:bg-blue-900  text-white font-semibold rounded-lg">
            Sign In
          </button>
          <div className="flex items-center justify-center text-white ">Or</div>
          <button
            type="submit"
            onClick={() => navigate("/signup/person")}
            className="w-full my-3 py-2 bg-blue-500 hover:bg-blue-900  text-white font-semibold rounded-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
