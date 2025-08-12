import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Levels from "./Levels.jsx";
import Level1 from "./Level1.jsx";
import Level2 from "./Level2.jsx"; // ✅ Import Level2
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Demo_P_Project"> {/* ✅ For GitHub Pages */}
      <Routes>
        <Route path="/" element={<Levels />} />
        <Route path="/level1" element={<Level1 />} /> {/* ✅ Fixed syntax */}
        <Route path="/level2" element={<Level2 />} /> {/* ✅ New route */}
        {/* Add Level3 here when ready */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
