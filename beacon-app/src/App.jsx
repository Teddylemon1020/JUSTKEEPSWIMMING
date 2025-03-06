import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import VisionMission from "./VisionMission/VisionMission";
import Hotline from "./Hotline/Hotline";

export const API_URL = "http://localhost:5000";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/hotline" element={<Hotline />} />
      </Routes>
    </Router>
  );
}

export default App;
