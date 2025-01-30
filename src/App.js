import NavBar from "./Component/NavBar";
import HomeContent from "./Component/Home";
import Results from "./Component/Results";
import About from "./Component/About";
import Events from "./Component/Events";
import Contact from "./Component/Contact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
  <NavBar />
  <Routes>
    <Route path="/" element={<HomeContent />} />
    <Route path="/About" element={<About />} />
    <Route path="/Event" element={<Events />} />
    <Route path="/Results" element={<Results />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
</Router>

  );
}

export default App;
