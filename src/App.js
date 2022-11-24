import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/singup";
import Dashboard from "./pages/dashboard";
import Emailverified from "./pages/emailverified";
<<<<<<< HEAD
import Signedup from "./pages/signedup";
=======
import Otp from "./pages/otp";
>>>>>>> 5748cc316ecbb42c6d6e6138a6ee8f18e8c72d76

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
<<<<<<< HEAD
=======
        <Route path="otp" element={<Otp />} />
>>>>>>> 5748cc316ecbb42c6d6e6138a6ee8f18e8c72d76
        <Route path="emailverified" element={<Emailverified />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signedup" element={<Signedup />} />
      </Routes>
    </div>
  );
}

export default App;
