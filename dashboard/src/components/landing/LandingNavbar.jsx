import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingNavbar = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`landing-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
              <img src="/images/logo.png" alt="CABZONE Logo" className="logo-img" />
              <span>CABZONE</span>
            </div>
            <div className="nav-right">
              <ul className="nav-links">
                <li>
                  <a href="#comparison" onClick={(e) => scrollToSection(e, '#comparison')}>
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                    Contact
                  </a>
                </li>
              </ul>
              <div className="nav-buttons">
                <button onClick={onLoginClick} className="login-btn">
                  <i className="fas fa-user"></i> Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;
