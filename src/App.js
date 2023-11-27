import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, PairingDetail, PairingList } from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pairing" element={<PairingList />} />
        <Route path="/pairing/:id" element={<PairingDetail />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
