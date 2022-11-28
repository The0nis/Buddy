import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Emailverified from "./pages/emailverified";
import Signedup from "./pages/signedup";
import Otp from "./pages/otp";
import Registeration from "./pages/register";
import Signupscreen from "./pages/signupscreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="register" element={<Registeration />} />
        <Route path="otp" element={<Otp />} />
        <Route path="emailverified" element={<Emailverified />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signedup" element={<Signedup />} />
        <Route path="signupscreen" element={<Signupscreen />} />
      </Routes>
    </div>
  );
}

export default App;
