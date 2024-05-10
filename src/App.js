import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { AuthProvider } from "./contexts/authContext/AuthContext";
import Dashboard from "./components/home/Dashboard";
import Services from "./components/services/Services";
import Notebooks from "./components/notebooks/Notebooks";
import Market from "./components/market/Market";
import Chickens from "./components/notebooks/Chickens.js"
import Cows from "./components/notebooks/Cows"

function App() {
  return (

    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/chickens" element={<Chickens />} />
          <Route path="/cows" element={<Cows />} />
          <Route path="/market" element={<Market />} />

        </Routes>
      </Router>
    </AuthProvider>
  
  );
}

export default App;