import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App;
