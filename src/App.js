import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/inscripciones" element={<Home form="true" />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
