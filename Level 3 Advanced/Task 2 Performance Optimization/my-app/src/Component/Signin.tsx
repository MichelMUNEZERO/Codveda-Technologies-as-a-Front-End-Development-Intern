type SigninProps = {
  onRegisterClick: () => void;
};

export default function Signin({ onRegisterClick }: SigninProps) {
  return (
    <div className="wrapper active-popup">
      <div className="form-box login">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon"></span>
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a
                href="#"
                className="register-link"
                onClick={(event) => {
                  event.preventDefault();
                  onRegisterClick();
                }}
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
