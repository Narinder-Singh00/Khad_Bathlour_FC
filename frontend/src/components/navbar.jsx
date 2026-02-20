import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">

      {/* LEFT LOGO */}
      <div className="nav-left">
        <h2 className="logo">FC Football</h2>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* RIGHT MENU */}
      <div className={`nav-right ${menuOpen ? "show" : ""}`}>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/teams" onClick={closeMenu}>Teams</Link>
        <Link to="/achievements" onClick={closeMenu}>Achievements</Link>
        <Link to="/tournaments" onClick={closeMenu}>Tournaments</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

      </div>

    </nav>
  );
}