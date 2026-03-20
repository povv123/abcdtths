import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">ABCD-WEB</h2>

      {/* Mobile Menu Button */}
      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink to="/" onClick={()=>setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses" onClick={()=>setMenuOpen(false)}>
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink to="/tutoring" onClick={()=>setMenuOpen(false)}>
            Tutoring
          </NavLink>
        </li>

        <li>
          <NavLink to="/how-it-works" onClick={()=>setMenuOpen(false)}>
            How It Works
          </NavLink>
        </li>

        <li>
          <NavLink to="/pricing" onClick={()=>setMenuOpen(false)}>
            Pricing
          </NavLink>
        </li>

        <li>
          <NavLink to="/testimonials" onClick={()=>setMenuOpen(false)}>
            Testimonials
          </NavLink>
        </li>

        <li>
          <NavLink to="/resources" onClick={()=>setMenuOpen(false)}>
            Resources
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={()=>setMenuOpen(false)}>
            Contact
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;