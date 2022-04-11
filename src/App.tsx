import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { AuthProvider } from "./context/authContext";
import PluginsPage from "./pages/Plugins";
import ExplorePage from "./pages/Explore";
import WidgetsPage from "./pages/Widgets";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/plugins" element={<PluginsPage />} />
        <Route path="/widgets" element={<WidgetsPage />} />
        <Route path="/figjam" element={<ExplorePage />} />
        <Route path="/designsystems" element={<ExplorePage />} />
        <Route path="/wireframe" element={<ExplorePage />} />
        <Route path="/illustrations" element={<ExplorePage />} />
        <Route path="/icons" element={<ExplorePage />} />
        <Route path="/typography" element={<ExplorePage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
