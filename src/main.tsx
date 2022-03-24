import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PluginsPage from "./pages/Plugins";
import ExplorePage from "./pages/Explore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/plugins" element={<PluginsPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
