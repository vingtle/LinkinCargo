import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // if using React Router
import newlogo from '../../assets/images/newlogo.png';
import './header.css';

function Header() {
  const navigate = useNavigate();            // React Router hook
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation handler
  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo" onClick={() => handleNavigate("/")}>
          <img 
            src={newlogo} 
            alt="logo"
            style={{ cursor: "pointer" }}
          />
        </div>
        <section className='nav-container'>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <span className="nav-link" onClick={() => handleNavigate("/about")}>
            About
          </span>
          <span className="nav-link" onClick={() => handleNavigate("/services")}>
            Services
          </span>
          <span className="nav-link" onClick={() => handleNavigate("/quotes")}>
            Quotes
          </span>
          <span className="nav-link" onClick={() => handleNavigate("/support")}>
            Support
          </span>
          <button className="contact-btn" onClick={() => handleNavigate("/contact")}>
            Contact
          </button>
        </nav>
        </section>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
