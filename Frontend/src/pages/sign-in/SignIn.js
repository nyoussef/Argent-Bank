import React, { useState } from 'react';
import "./sign-in.css";
import { loginUser } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const {userLoading} = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {email, password, rememberMe}
    loginUser(body, dispatch)
  };

  return (
    <div className="sign-in-container bg-dark">
      <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type='email' required id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type='password' required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
              <input type="checkbox" id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={userLoading? "sign-in-button-disabled" : "sign-in-button"} type="submit" disabled={userLoading}>Sign In</button>
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

export default SignIn;