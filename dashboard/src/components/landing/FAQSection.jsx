import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      icon: 'fa-lock',
      question: 'How secure is my fleet data?',
      answer: 'Your data security is our top priority. We employ bank-level 256-bit encryption, multi-factor authentication, and comply with international data protection standards. Your documents are stored in secure cloud servers with automatic backups.'
    },
    {
      icon: 'fa-mobile-alt',
      question: 'Can I manage my fleet on mobile?',
      answer: 'Absolutely! Our platform is fully responsive and works seamlessly on desktop, tablet, and smartphone. Manage your entire fleet, upload documents, and receive alerts from anywhere in the world.'
    },
    {
      icon: 'fa-magic',
      question: 'How does AI verification work?',
      answer: 'Our advanced AI engine automatically scans uploaded documents, extracts key information, validates authenticity, checks expiry dates, and flags compliance issues - all in seconds. This reduces manual verification time by over 90%.'
    },
    {
      icon: 'fa-bell',
      question: 'How do expiry alerts work?',
      answer: "Our smart alert system monitors all document expiry dates 24/7. You'll receive notifications via email and dashboard alerts at 30, 15, and 7 days before expiry, ensuring you never miss a renewal deadline."
    },
    {
      icon: 'fa-users',
      question: 'Can multiple team members access the platform?',
      answer: 'Yes! You can add unlimited team members with customizable role-based access controls. Assign different permission levels to managers, operators, and admin staff to maintain security and workflow efficiency.'
    },
    {
      icon: 'fa-headset',
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 customer support via email, chat, and phone. Our dedicated team is always ready to help with onboarding, troubleshooting, and any questions you may have about managing your fleet.'
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p>Everything you need to know about our platform</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-icon">
                <i className={`fas ${faq.icon}`}></i>
              </div>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
