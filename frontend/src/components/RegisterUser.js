import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function RegisterUser(props) {
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerUser.password === registerUser.cpassword) {
      await axios
        .post("/register", registerUser)
        .then((res) => console.log(res.data));
      const newRecord = {
        ...registerUser,
        id: new Date().getTime().toString(),
      };
      console.log(records);
      setRecords([...records, newRecord]);
      console.log(records);

      setRegisterUser({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
      });
      alert("User created Successfully");
      navigate("/login");
    } else {
      alert("Invalid input: ");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div
        id="form"
        className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
        <form action="" onSubmit={handleSubmit}>
          <h2 className="text-blue-700 text-3xl font-semibold my-4">
            Register User
          </h2>
          {/* <!-- full name --> */}
          <div id="fullName" className="flex flex-row ">
            {/* <!-- first name --> */}
            <div id="firstName" className="w-1/2 mr-1">
              <label htmlFor="fname" className="text-sm">
                First Name
              </label>
              <br />
              <input
                type="text"
                autoComplete="off"
                value={registerUser.fname}
                onChange={handleInput}
                name="fname"
                id="fname"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm"
                required
              />
            </div>
            {/* <!-- last name --> */}
            <div id="lastName" className="w-1/2 mr-1 ">
              <label htmlFor="lname" className="text-sm">
                Last Name
              </label>
              <br />
              <input
                type="text"
                autoComplete="off"
                value={registerUser.lname}
                onChange={handleInput}
                name="lname"
                id="lname"
                className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                required
              />
            </div>
          </div>

          {/* <!-- email --> */}
          <label htmlFor="email" className="text-sm ">
            Email
          </label>
          <br />
          <input
            type="email"
            autoComplete="off"
            value={registerUser.email}
            onChange={handleInput}
            name="email"
            id="email"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
            required
          />
          {/* <!-- password --> */}
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <br />
          <input
            type="password"
            autoComplete="off"
            value={registerUser.password}
            onChange={handleInput}
            name="password"
            id="password"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
            required
          />
          {/* <!-- confirm password --> */}
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            autoComplete="off"
            value={registerUser.cpassword}
            onChange={handleInput}
            name="cpassword"
            id="confirmPassword"
            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
            required
          />
          {/* <!-- radio buttons for gender --> */}
          <div id="gender" className="text-sm mb-4 mt-4">
            <p className="mt-2">Mode of service</p>
            <input
              type="radio"
              name="service"
              value={registerUser.value}
              id="online"
              className="text-sm mx-1"
              checked
            />
            <label htmlFor="online">Online</label>
            <input
              type="radio"
              name="service"
              value={registerUser.value}
              id="offline"
              className="text-sm mx-1"
            />
            <label htmlFor="offline">Offline</label>
            <input
              type="radio"
              name="service"
              value={registerUser.value}
              id="both"
              className="text-sm mx-1"
            />
            <label htmlFor="both">Both</label>
          </div>
          {/* <!-- Sign up / submit button --> */}
          <button
            type="submit"
            id="signUp"
            className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm">
            Submit
          </button>
          <br />
          <p className="text-xs my-2">
            Already have a account?{" "}
            <a href="/login" className="text-blue-600">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
