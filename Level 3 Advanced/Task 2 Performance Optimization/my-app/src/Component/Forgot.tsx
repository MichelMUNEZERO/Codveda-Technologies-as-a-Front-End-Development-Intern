type ForgotProps = {
  onBackToSignin: () => void;
};

export default function Forgot({ onBackToSignin }: ForgotProps) {
  return (
    <div className="wrapper active-popup forgot-wrapper">
      <div className="forgot-header">
        <h1 className="forgot-title">Forgot Password?</h1>
        <p className="forgot-subtitle">
          No worries, we will send you reset instructions.
        </p>
      </div>

      <form className="forgot-form">
        <div className="forgot-input-box">
          <input
            type="email"
            required
            placeholder="Enter your email or username"
          />
          <span className="forgot-input-focus"></span>
        </div>

        <p className="forgot-help-text">
          Enter the email you used to register. We will send a password reset
          link if the account exists.
        </p>
        <button type="submit" className="btn forgot-btn">
          Send Reset Link
        </button>
      </form>

      <div className="forgot-footer">
        <button className="forgot-back-btn" onClick={onBackToSignin}>
          Back to sign in
        </button>
      </div>
    </div>
  );
}
