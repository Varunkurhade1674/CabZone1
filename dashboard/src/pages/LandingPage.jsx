import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/landing/HeroSection';
import ChallengesSection from '../components/landing/ChallengesSection';
import ComparisonSection from '../components/landing/ComparisonSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import PricingSection from '../components/landing/PricingSection';
import FAQSection from '../components/landing/FAQSection';
import ContactSection from '../components/landing/ContactSection';
import StatisticsSection from '../components/landing/StatisticsSection';
import LandingNavbar from '../components/landing/LandingNavbar';
import '../styles/landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Smooth scroll for hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <LandingNavbar onLoginClick={handleLoginClick} />
      <HeroSection />
      <ChallengesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <StatisticsSection />
    </div>
  );
};

export default LandingPage;
