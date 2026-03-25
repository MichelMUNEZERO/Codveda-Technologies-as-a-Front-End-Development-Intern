import { useState } from "react";
import { IoMail } from "react-icons/io5";
import pexelsBg from "../assets/pexels.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export default function Forgot({
  onSwitchToLogin,
}: {
  onSwitchToLogin: () => void;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/forgot-password/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMessage(data.error || "Request failed");
        return;
      }

      setIsError(false);
      setMessage(data.message || "Reset link sent");
      setEmail("");
    } catch {
      setIsError(true);
      setMessage(
        navigator.onLine
          ? "Could not connect to backend server"
          : "No internet/network connection detected. Please reconnect and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-fixed px-5 py-8"
      style={{ backgroundImage: `url(${pexelsBg})` }}
    >
      <div className="absolute inset-0 bg-[rgba(94,92,92,0.5)]" />

      <div className="relative z-10 w-full max-w-[420px] rounded-[20px] border-2 border-white/50 bg-transparent p-6 shadow-[0_0_10px_rgba(29,28,28,0.5)] backdrop-blur-[10px]">
        <div>
          <h1 className="text-center text-4xl font-semibold text-white">
            Forgot Password?
          </h1>
          <p className="mt-3 text-center text-base text-white/90">
            No worries, we will send you reset instructions.
          </p>
        </div>

        <form className="mt-7" onSubmit={handleSubmit}>
          <div className="relative h-[50px] w-full border-b-2 border-[#162938]">
            <input
              type="email"
              required
              placeholder="Enter your email or username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-full w-full border-none bg-transparent px-[5px] pr-[35px] text-lg font-semibold text-white placeholder:text-base placeholder:text-white/70 outline-none"
            />
            <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-xl text-white">
              <IoMail />
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-white/85">
            Enter the email you used to register. We will send a password reset
            link if the account exists.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 h-[48px] w-full cursor-pointer rounded-md border-none bg-[#1b1b1b] text-lg font-semibold text-white outline-none"
          >
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>

          {message && (
            <p
              className={`mt-3 text-center text-sm ${
                isError ? "text-red-300" : "text-green-300"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        <div className="mt-4 text-center text-base text-white">
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="bg-none border-none cursor-pointer font-semibold text-white hover:underline"
          >
            Back to sign in
          </button>
        </div>
      </div>
    </div>
  );
}
