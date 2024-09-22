import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-up.css";
import { registerUser } from "../../redux/action";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userLoading, setUserLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserLoading(true);
    const body = { firstName, lastName, userName, email, password };
    const goToSignIn = () => navigate("/sign-in");
    const clearLoading = () => setUserLoading(false);
    registerUser(body, goToSignIn, clearLoading);
  };

  return (
    <div className="sign-up-container bg-dark">
      <section className="sign-up-content">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={
              userLoading ? "sign-up-button-disabled" : "sign-up-button"
            }
            type="submit"
            disabled={userLoading}
          >
            Sign Up
          </button>
        </form>
        <div className="sign-up-link">
          <p>
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
