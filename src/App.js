import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, PairingDetail, PairingList } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pairing" element={<PairingList />} />
        <Route path="/pairing/:id" element={<PairingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
