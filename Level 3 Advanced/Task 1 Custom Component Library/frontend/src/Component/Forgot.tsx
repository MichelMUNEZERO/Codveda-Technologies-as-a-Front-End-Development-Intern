import React from "react";

export default function Forgot() {
  return (
    <div className="">
      <div>
        <h1>Forgot Password?</h1>
        <p>No worries we'll send you reset instructions</p>
      </div>
      <div>
        <input type="email" placeholder="Enter your email or username" />
        <span>
          Enter the email you used to register. We’ll send a password reset link
          if the account exists.
        </span>
      </div>
      <button>Send Reset Link</button>
      <div>
        <a href="#">Back to sign in</a>
      </div>
    </div>
  );
}
