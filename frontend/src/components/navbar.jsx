import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <h2 className="logo">FC Football</h2>

      <div className={`nav-right ${open ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}