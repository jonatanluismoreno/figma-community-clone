import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PluginsPage from "./pages/Plugins";
import ExplorePage from "./pages/Explore";
import WidgetsPage from "./pages/Widgets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
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
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
