import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // bloque scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <nav
      className="main-nav"
      style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img src="/logo-digynov-blanc.png" alt="DigYnov" />
        </Link>

        {/* MENU */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>POGNON</Link></li>
          <li><Link to="/services/" className={isActive('/services/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/realisations/" className={isActive('/realisations/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Réalisations</Link></li>
          <li><Link to="/equipe/" className={isActive('/equipe/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Notre Équipe</Link></li>
          <li><Link to="/a-propos/" className={isActive('/a-propos/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>À Propos</Link></li>
          <li><Link to="/contact/" className={isActive('/contact/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          <li style={{ display: "none" }}><Link to="/ticketing/" className={isActive('/ticketing/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Ticketing</Link></li>
        </ul>

        {/* HAMBURGER */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;