import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">ACCUEIL</Link>
        <Link to="/about">À PROPOS</Link>
        <Link to="/projects">PROJETS</Link>
        <Link to="/skills">COMPÉTENCES</Link>
        <Link to="/timeline">PARCOURS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header