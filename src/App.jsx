import React from "react";
import { Routes, Route } from "react-router-dom";
import ChampionGrid from "./pages/ChampionGrid";
import HomePage from "./pages/HomePage";
import ComingSoon from "./components/commun/ComingSoon";
import HowToPlay from "./pages/HowToPlay";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Game" element={<ChampionGrid />} />
      <Route path="/ComingSoon" element={<ComingSoon />} />
      <Route path="/HowToPlay" element={<HowToPlay />} />
      <Route path="/AboutPage" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
