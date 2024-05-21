import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
