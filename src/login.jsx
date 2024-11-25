import React, { useState } from "react";
import "./css files/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  let [name, setname] = useState();
  let [pwd, setpwd] = useState();
  const navigate = useNavigate();

  const handleformSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        name,
        pwd,
      })
      .then((result) => {
        console.log(result === "Sucess");
        if (result === "Sucess") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="lgbox">
      <h1>Login page</h1>
      <form onSubmit={handleformSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setpwd(e.target.value)}
        />
        <br />
        <button on>submit</button>
      </form>
      <p>
        new User? register now <Link to={"/signup"}>Sign up</Link>
      </p>
    </div>
  );
}
