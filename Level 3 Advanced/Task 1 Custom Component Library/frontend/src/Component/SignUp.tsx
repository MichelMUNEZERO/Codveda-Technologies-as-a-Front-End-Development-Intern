import { useState } from "react";
import { IoEye, IoEyeOff, IoMail, IoPerson, IoCall } from "react-icons/io5";
import pexelsBg from "../assets/pexels.jpg";

export default function SignUp({
  onSwitchToLogin,
}: {
  onSwitchToLogin: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-fixed px-5 py-8"
      style={{ backgroundImage: `url(${pexelsBg})` }}
    >
      <div className="absolute inset-0 bg-[rgba(94,92,92,0.5)]" />

      <div className="relative z-10 w-full max-w-[400px] rounded-[20px] border-2 border-white/50 bg-transparent p-5 shadow-[0_0_10px_rgba(29,28,28,0.5)] backdrop-blur-[10px]">
        <h2 className="text-center text-3xl font-semibold text-white">
          Registration
        </h2>

        <form action="#" className="mt-4">
          <div className="relative my-[30px] h-[50px] w-full border-b-2 border-[#162938]">
            <input
              type="text"
              required
              placeholder=" "
              className="peer h-full w-full border-none bg-transparent px-[5px] pr-[35px] text-base font-semibold text-white outline-none"
            />
            <label className="pointer-events-none absolute left-[5px] top-1/2 -translate-y-1/2 text-base font-medium text-white transition-all duration-500 peer-valid:-top-[5px] peer-focus:-top-[5px]">
              Full name
            </label>
            <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-xl leading-[57px] text-white">
              <IoPerson />
            </span>
          </div>

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
              type="text"
              required
              placeholder=" "
              className="peer h-full w-full border-none bg-transparent px-[5px] pr-[35px] text-base font-semibold text-white outline-none"
            />
            <label className="pointer-events-none absolute left-[5px] top-1/2 -translate-y-1/2 text-base font-medium text-white transition-all duration-500 peer-valid:-top-[5px] peer-focus:-top-[5px]">
              Phone number
            </label>
            <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-xl leading-[57px] text-white">
              <IoCall />
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

          <div className="relative my-[30px] h-[50px] w-full border-b-2 border-[#162938]">
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder=" "
              className="peer h-full w-full border-none bg-transparent px-[5px] pr-[35px] text-base font-semibold text-white outline-none"
            />
            <label className="pointer-events-none absolute left-[5px] top-1/2 -translate-y-1/2 text-base font-medium text-white transition-all duration-500 peer-valid:-top-[5px] peer-focus:-top-[5px]">
              Confirm Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-[10px] top-1/2 -translate-y-1/2 text-xl leading-[57px] text-white"
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>

          <div className="my-[15px] mt-[-15px] flex items-center text-[0.9em] font-medium text-white">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-[#1d1d1d]" />
              Agree to terms & conditions
            </label>
          </div>

          <button
            type="submit"
            className="h-[45px] w-full cursor-pointer rounded-md border-none bg-[#1b1b1b] text-base font-semibold text-white outline-none"
          >
            Register
          </button>

          <div className="mt-4 text-center text-sm text-white">
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="font-semibold hover:underline bg-none border-none cursor-pointer text-white"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
