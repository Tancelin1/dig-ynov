import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="main-nav">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="DigYnov" />
          <span>DigYnov</span>
        </Link>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/realisations" 
              className={isActive('/realisations') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link 
              to="/equipe" 
              className={isActive('/equipe') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Équipe
            </Link>
          </li>
          <li>
            <Link 
              to="/a-propos" 
              className={isActive('/a-propos') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              À Propos
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;