import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Forgot from "./Component/Forgot";
import "./index.css";
export default function App() {
  return (
    <div>
      <Signin />
      <Signup />
      <Forgot />
    </div>
  );
}
