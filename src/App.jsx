import { Routes, Route } from "react-router-dom";
import Levels from "./Levels";
import Level1 from "./Level1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Levels />} />
      <Route path="/level1" element={<Level1 />} />
    </Routes>
  );
}

export default App;
