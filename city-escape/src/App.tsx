import "leaflet/dist/leaflet.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./components/Map/Map.tsx";
import RiddlePage from "./components/RiddlePage/RiddlePage.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/riddle" element={<RiddlePage />} />
      </Routes>
    </Router>
  );
}
