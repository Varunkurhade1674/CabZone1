import React from 'react';

const HeroSection = () => {
  const scrollToDemo = (e) => {
    e.preventDefault();
    const element = document.querySelector('#statistics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" style={{ marginTop: '70px', paddingTop: 0 }}>
      <div className="hero-background" style={{ top: '70px' }}></div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content animate__animated animate__fadeIn">
            <h2 className="animate__animated animate__fadeInLeft animate__delay-1s">
              Empower Your Fleet Management.
            </h2>
            <p className="animate__animated animate__fadeInRight animate__delay-1s">
              Streamline your cab company operations with automated compliance and digital fleet management.
            </p>
            <div className="hero-buttons animate__animated animate__fadeInUp animate__delay-2s">
              <a href="#fleet" onClick={scrollToDemo} className="btn btn-primary">
                Demo
              </a>
            </div>
            <div className="hero-stats animate__animated animate__fadeIn animate__delay-2s">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">DOC-Verify Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Customer Support</span>
              </div>
            </div>
          </div>
          <div className="hero-car-container animate__animated animate__fadeInRight animate__delay-1s">
            <img src="/images/car.png" alt="CABZONE Car" className="hero-car" />
            <div className="car-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
