type SignupProps = {
  onLoginClick: () => void;
};

export default function Signup({ onLoginClick }: SignupProps) {
  return (
    <div className="wrapper active-popup active">
      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"></span>
            <input id="signup-fullname" type="text" required />
            <label htmlFor="signup-fullname">Full name</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input id="signup-email" type="email" required />
            <label htmlFor="signup-email">Email</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input id="signup-phone" type="text" required />
            <label htmlFor="signup-phone">Phone number</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input id="signup-password" type="password" required />
            <label htmlFor="signup-password">Password</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input id="signup-confirm-password" type="password" required />
            <label htmlFor="signup-confirm-password">Confirm Password</label>
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
              <a
                href="#"
                className="login-link"
                onClick={(event) => {
                  event.preventDefault();
                  onLoginClick();
                }}
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
