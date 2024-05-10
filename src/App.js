import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { AuthProvider } from "./contexts/authContext/AuthContext";
import Dashboard from "./components/home/Dashboard";
import Services from "./components/services/Services";
import Notebooks from "./components/notebooks/Notebooks";
import Market from "./components/market/Market";
import Chickens from "./components/notebooks/Chickens";
import Cows from "./components/notebooks/Cows";

const Notebook = ({ title }) => (
  <div className="dashboard">
    <Navbar />
    <div className="content-card">
      <h1>{title}</h1>
    </div>
  </div>
);

// Initial list of notebooks with general Notebook component
const initialNotebooks = [
  {
    title: "Chickens",
    path: "/chickens",
    component: <Notebook title="Chickens" />,
  },
  {
    title: "Cows",
    path: "/cows",
    component: <Notebook title="Cows" />,
  },
];

function App() {
  const [notebooks, setNotebooks] = useState(initialNotebooks);

  // Function to add a new notebook
  const addNotebook = (title) => {
    const newPath = /${title.toLowerCase()};
    const newNotebook = {
      title,
      path: newPath,
      component: <Notebook title={title} />,
    };
    setNotebooks([...notebooks, newNotebook]);
  };

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
          <Route path="/notebooks" element={<Notebooks addNotebook={addNotebook} />} />
          <Route path="/market" element={<Market />} />

          {/* Add routes for existing notebooks */}
          {notebooks.map((notebook, index) => (
            <Route key={index} path={notebook.path} element={notebook.component} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;