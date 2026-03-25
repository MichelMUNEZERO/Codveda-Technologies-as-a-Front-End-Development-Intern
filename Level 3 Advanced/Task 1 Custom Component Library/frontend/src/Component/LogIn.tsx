import pexelsBg from "../assets/pexels.jpg";
import { useState } from "react";
import { IoEye, IoEyeOff, IoMail } from "react-icons/io5";

export default function LogIn({
  onSwitchToRegister,
  onSwitchToForgot,
}: {
  onSwitchToRegister: () => void;
  onSwitchToForgot: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-fixed px-5 py-8"
      style={{ backgroundImage: `url(${pexelsBg})` }}
    >
      <div className="absolute inset-0 bg-[rgba(94,92,92,0.5)]" />

      <div className="relative z-10 w-full max-w-[400px] rounded-[20px] border-2 border-white/50 bg-transparent p-5 shadow-[0_0_10px_rgba(29,28,28,0.5)] backdrop-blur-[10px]">
        <h2 className="text-center text-3xl font-semibold text-white">Login</h2>

        <form action="#" className="mt-4">
          <div className="relative my-[30px] h-[50px] w-full border-b-2 border-[#162938]">
            <input
              type="email"
              required
              placeholder=" "
              className="peer h-full w-full border-none bg-transparent px-[5px] pr-[35px] text-base font-semibold text-white outline-none"
            />
            <label className="pointer-events-none absolute left-[5px] top-1/2 -translate-y-1/2 text-base font-medium text-white transition-all duration-500 peer-valid:-top-[5px] peer-focus:-top-[5px]">
              Email
            </label>
            <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-xl leading-[57px] text-white">
              <IoMail />
            </span>
          </div>

          <div className="relative my-[30px] h-[50px] w-full border-b-2 border-[#162938]">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder=" "
              className="peer h-full w-full border-none bg-transparent px-[5px] pr-[35px] text-base font-semibold text-white outline-none"
            />
            <label className="pointer-events-none absolute left-[5px] top-1/2 -translate-y-1/2 text-base font-medium text-white transition-all duration-500 peer-valid:-top-[5px] peer-focus:-top-[5px]">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-[10px] top-1/2 -translate-y-1/2 text-xl leading-[57px] text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>

          <div className="my-[15px] mt-[-15px] flex items-center justify-between text-[0.9em] font-medium text-white">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-[#1d1d1d]" />
              Remember me
            </label>
            <button
              type="button"
              onClick={onSwitchToForgot}
              className="bg-none border-none cursor-pointer text-white no-underline hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="h-[45px] w-full cursor-pointer rounded-md border-none bg-[#1b1b1b] text-base font-semibold text-white outline-none"
          >
            Login
          </button>

          <div className="mt-4 text-center text-sm text-white">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="font-semibold hover:underline bg-none border-none cursor-pointer text-white"
              >
                Register
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
