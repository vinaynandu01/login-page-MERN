import React, { useState } from "react";
import "./css files/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [uname, setuname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleformSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPwd) {
      setError("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:5000/signup", { uname, password, email })
      .then((result) => {
        console.log(result);
        console.log(uname, password, email);
        navigate("/login");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <div className="lgbox">
        <h1>Sign up</h1>
        <form onSubmit={handleformSubmit}>
          <label for="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
          />
          <br />
          <label for="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <br />

          <label for="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="********"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />

          <label for="confirm_password">Confirm Password:</label>
          <br />
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="********"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            required
          />

          {error && <div style={{ color: "red" }}>{error}</div>}

          <button value="Sign up">Sign up</button>
        </form>
        <p>
          already have an account?
          <Link to={"/login"} className="link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
