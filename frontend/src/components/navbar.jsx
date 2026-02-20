import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <div className="nav-left">
        <h2 className="logo">FC Football</h2>
      </div>

      <div className={`nav-right ${open ? "active" : ""}`}>
        <Link to="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
        <Link to="/teams" onClick={()=>setOpen(false)}>Teams</Link>
        <Link to="/achievements" onClick={()=>setOpen(false)}>Achievements</Link>
        <Link to="/tournaments" onClick={()=>setOpen(false)}>Tournaments</Link>
        <Link to="/gallery" onClick={()=>setOpen(false)}>Gallery</Link>
        <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger" onClick={()=>setOpen(!open)}>
        ☰
      </div>

    </nav>
  );
}