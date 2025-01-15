import React from "react";
import { Routes, Route } from "react-router-dom";
import ChampionGrid from "./pages/ChampionGrid";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChampionGrid />} />
    </Routes>
  );
}

export default App;
