import React from 'react';

const PricingSection = () => {
  const pricingPlans = [
    {
      type: 'trial',
      badge: 'Free Trial',
      icon: 'fa-gift',
      title: '7 Days Free',
      price: '₹0',
      period: '',
      features: [
        { text: 'Up to 4 cars', included: true },
        { text: 'Basic document management', included: true },
        { text: 'Email support', included: true },
        { text: 'Mobile access', included: true },
        { text: 'No credit card required', included: false }
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-outline-pricing'
    },
    {
      type: 'monthly',
      icon: 'fa-calendar-alt',
      title: '1 Month Plan',
      price: '2,000',
      period: '/month',
      features: [
        { text: 'Up to 10 cars', included: true },
        { text: 'AI-powered verification', included: true },
        { text: 'Real-time alerts', included: true },
        { text: 'Priority support', included: true },
        { text: 'Cloud storage', included: true }
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-primary'
    },
    {
      type: 'popular',
      badge: 'Most Popular',
      icon: 'fa-star',
      title: '6 Months Plan',
      price: '11,000',
      period: '/6 months',
      save: 'Save ₹1,000',
      features: [
        { text: 'Up to 50 cars', included: true },
        { text: 'AI-powered verification', included: true },
        { text: 'Real-time alerts', included: true },
        { text: '24/7 Premium support', included: true },
        { text: 'Advanced analytics', included: true }
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-primary'
    },
    {
      type: 'yearly',
      icon: 'fa-crown',
      title: '1 Year Plan',
      price: '22,000',
      period: '/year',
      save: 'Save ₹2,000',
      features: [
        { text: '50+ cars', included: true },
        { text: 'AI-powered verification', included: true },
        { text: 'Real-time alerts', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom integrations', included: true }
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-primary'
    }
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Choose Your <span>Plan</span>
          </h2>
          <p>Flexible pricing options to match your fleet size and needs</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.type}`}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              <div className="pricing-icon">
                <i className={`fas ${plan.icon}`}></i>
              </div>
              <h3 className="pricing-title">{plan.title}</h3>
              <div className="pricing-price">
                {plan.price.includes('₹') ? (
                  <span className="price">{plan.price}</span>
                ) : (
                  <>
                    <span className="currency">₹</span>
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </>
                )}
              </div>
              {plan.save && <div className="pricing-save">{plan.save}</div>}
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className={`fas ${feature.included ? 'fa-check' : 'fa-times'}`}></i> {feature.text}
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={scrollToContact} className={`btn ${plan.buttonClass}`}>
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
