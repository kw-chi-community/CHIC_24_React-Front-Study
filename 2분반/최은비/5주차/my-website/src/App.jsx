import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorite1 from "./components/Favorite1";
import Favorite2 from "./components/Favorite2";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite1" element={<Favorite1 />} />
          <Route path="/favorite2" element={<Favorite2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
