import React from 'react';

const ComparisonSection = () => {
  const traditionalFeatures = [
    { icon: 'fa-folder', text: 'Paper-based storage' },
    { icon: 'fa-user-check', text: 'Manual verification' },
    { icon: 'fa-bell-slash', text: 'No compliance alerts' },
    { icon: 'fa-building', text: 'Office-only access' },
    { icon: 'fa-hourglass-half', text: 'Slow processing' },
    { icon: 'fa-exclamation-triangle', text: 'High error rate' }
  ];

  const cabzoneFeatures = [
    { icon: 'fa-cloud', text: 'Secure cloud storage' },
    { icon: 'fa-robot', text: 'AI-powered automation' },
    { icon: 'fa-bell', text: 'Real-time smart alerts' },
    { icon: 'fa-globe', text: 'Access from anywhere' },
    { icon: 'fa-bolt', text: 'Instant processing' },
    { icon: 'fa-check-double', text: '99.9% accuracy' }
  ];

  return (
    <section id="comparison" className="comparison-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Why <span>Choose Us?</span>
          </h2>
          <p>Experience the difference between traditional methods and modern fleet management</p>
        </div>
        <div className="comparison-grid">
          <div className="comparison-card old-way">
            <div className="comparison-header">
              <i className="fas fa-times-circle"></i>
              <h3>Traditional Method</h3>
            </div>
            <ul className="comparison-list">
              {traditionalFeatures.map((feature, index) => (
                <li key={index}>
                  <i className={`fas ${feature.icon}`}></i> {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="comparison-card new-way">
            <div className="comparison-header">
              <i className="fas fa-check-circle"></i>
              <h3>CABZONE Platform</h3>
              <span className="badge">Recommended</span>
            </div>
            <ul className="comparison-list">
              {cabzoneFeatures.map((feature, index) => (
                <li key={index}>
                  <i className={`fas ${feature.icon}`}></i> {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
