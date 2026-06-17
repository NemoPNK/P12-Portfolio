import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">ACCUEIL</Link>
        <Link to="/a-propos">À PROPOS</Link>
        <Link to="/projets">PROJETS</Link>
        <Link to="/competences">COMPÉTENCES</Link>
        <Link to="/parcours">PARCOURS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header