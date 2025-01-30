import NavBar from "./Component/NavBar";
import HomeContent from "./Component/Home";
import Results from "./Component/Results";
import About from "./Component/About";
import Events from "./Component/Events";
import Contact from "./Component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/Home" element={<HomeContent />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Event" element={<Events />}></Route>
        <Route path="/Results" element={<Results />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
