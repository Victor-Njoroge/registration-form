import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <React.Fragment>
      <div className="auth-header">

        <h1 className="auth-header-title">Create Account</h1>
        <p className="auth-header-subtitle">
          Create your account and be part of us
        </p>
      </div>
      <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              First Name
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="Joe"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Last Name
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="Felix"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Password"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
            Confirm Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Password"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/auth/signin"} className="link-text-center">
            Signin instead
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signup;