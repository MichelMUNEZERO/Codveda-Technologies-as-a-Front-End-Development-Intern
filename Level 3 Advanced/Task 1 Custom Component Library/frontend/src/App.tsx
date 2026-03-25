import { useState } from "react";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";
import Forgot from "./Component/Forgot";

type PageView = "login" | "signup" | "forgot";

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>("login");

  return (
    <div className="App">
      {currentPage === "login" && (
        <LogIn
          onSwitchToRegister={() => setCurrentPage("signup")}
          onSwitchToForgot={() => setCurrentPage("forgot")}
        />
      )}
      {currentPage === "signup" && (
        <SignUp onSwitchToLogin={() => setCurrentPage("login")} />
      )}
      {currentPage === "forgot" && (
        <Forgot onSwitchToLogin={() => setCurrentPage("login")} />
      )}
    </div>
  );
}

export default App;
