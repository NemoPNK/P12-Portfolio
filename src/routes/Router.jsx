import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Skills from "../pages/Skills/Skills";
import Road from "../pages/Road/Road";
import Contact from "../pages/Contact/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/competences" element={<Skills />} />
      <Route path="/parcours" element={<Road />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;