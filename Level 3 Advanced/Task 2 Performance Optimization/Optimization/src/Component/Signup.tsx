import React from "react";

export default function Signup() {
  return (
    <div className="form-box register">
      <h2>Registration</h2>
      <form action="#">
        <div className="input-box">
          <span className="icon"></span>
          <input type="text" required />
          <label>Full name</label>
        </div>
        <div className="input-box">
          <span className="icon"></span>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon"></span>
          <input type="text" required />
          <label>phone number</label>
        </div>
        <div className="input-box">
          <span className="icon"></span>
          <input type="password" required />
          <label>Confirm Password</label>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Agree to terms & conditions
          </label>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="login-register">
          <p>
            Already have an account?
            <a href="#" className="login-link">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
