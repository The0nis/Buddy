import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Emailverified from "./pages/emailverified";
import Signedup from "./pages/signedup";
import Otp from "./pages/otp";
import Registeration from "./pages/register";
import Signupscreen from "./pages/signupscreen";
import Mygroup from "./pages/mygroup";
import Analytics from "./pages/analytics";
import Pack from "./pages/pack";
import Settings from "./pages/settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signupscreen />} />
        <Route path="signup" element={<Signup />} />
        <Route path="register" element={<Registeration />} />
        <Route path="otp" element={<Otp />} />
        <Route path="emailverified" element={<Emailverified />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="mygroup" element={<Mygroup />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="pack" element={<Pack />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="signedup" element={<Signedup />} />
      </Routes>
    </div>
  );
}

export default App;
