import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Timeline from "../pages/Timeline/Timeline";
import Contact from "../pages/Contact/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;