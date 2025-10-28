import React from 'react';

const ChallengesSection = () => {
  const challenges = [
    {
      icon: 'fa-file-excel',
      title: 'Document Loss & Damage',
      description: 'Say goodbye to lost paperwork. Our cloud-based system ensures your critical documents are always accessible and secure.'
    },
    {
      icon: 'fa-clock',
      title: 'Time-Consuming Verification',
      description: 'Reduce verification time by 90% with AI-powered automated document validation and instant compliance checks.'
    },
    {
      icon: 'fa-calendar-times',
      title: 'Missed Renewal Deadlines',
      description: 'Never miss a deadline again. Smart alerts notify you 30, 15, and 7 days before any document expires.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Compliance Management',
      description: 'Maintain 100% compliance effortlessly. Real-time monitoring keeps your entire fleet regulation-ready.'
    }
  ];

  return (
    <section id="challenges" className="challenges-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Challenges <span>We Solve</span>
          </h2>
          <p>Transform your fleet operations by eliminating these critical pain points</p>
        </div>
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="challenge-card">
              <div className="challenge-icon">
                <i className={`fas ${challenge.icon}`}></i>
              </div>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
