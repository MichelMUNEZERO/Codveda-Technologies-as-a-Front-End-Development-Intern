import { useState } from "react";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {isLogin ? (
        <LogIn onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <SignUp onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
