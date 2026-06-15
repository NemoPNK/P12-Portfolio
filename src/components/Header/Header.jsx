import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/timeline">TIMELINE</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;