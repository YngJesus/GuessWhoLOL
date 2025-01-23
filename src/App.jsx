import React from "react";
import { Routes, Route } from "react-router-dom";
import ChampionGrid from "./pages/ChampionGrid";
import HomePage from "./pages/HomePage";
import ComingSoon from "./components/commun/ComingSoon";
import NavBar from "./components/commun/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nb" element={<NavBar />} />
      <Route path="/Game" element={<ChampionGrid />} />
      <Route path="/ComingSoon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
