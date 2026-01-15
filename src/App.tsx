import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import "./App.scss";

function App() {
  return (
    <>
      <Background />
      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/experience" element={<Experience />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
