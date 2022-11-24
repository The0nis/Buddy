import { Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/singup';
import Dashboard from './pages/dashboard';
import Emailverified from './pages/emailverified';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="emailverified" element={<Emailverified />} />        
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
