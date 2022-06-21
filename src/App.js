import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home form="true" />} />
        <Route path="/inscripciones" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
