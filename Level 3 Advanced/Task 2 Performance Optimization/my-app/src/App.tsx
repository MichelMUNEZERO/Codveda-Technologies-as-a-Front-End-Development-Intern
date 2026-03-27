import { useState } from "react";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Forgot from "./Component/Forgot";
import "./index.css";

export default function App() {
  const [screen, setScreen] = useState<"signin" | "signup" | "forgot">(
    "signin",
  );

  return (
    <div>
      {screen === "signin" && (
        <Signin
          onRegisterClick={() => setScreen("signup")}
          onForgotClick={() => setScreen("forgot")}
        />
      )}
      {screen === "signup" && (
        <Signup onLoginClick={() => setScreen("signin")} />
      )}
      {screen === "forgot" && (
        <Forgot onBackToSignin={() => setScreen("signin")} />
      )}
    </div>
  );
}
