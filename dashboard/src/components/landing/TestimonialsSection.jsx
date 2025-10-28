import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "CABZONE has transformed how we manage our fleet. The digital documentation system saves us hours every week and ensures we're always compliant.",
      author: 'John Smith',
      position: 'Fleet Manager, Express Cabs',
      animation: 'animate__fadeInLeft'
    },
    {
      rating: 5,
      text: "The automated alerts have saved us from compliance issues multiple times. Their customer service is exceptional and always ready to help.",
      author: 'Sarah Johnson',
      position: 'Operations Director, City Rides',
      animation: 'animate__fadeInUp'
    },
    {
      rating: 5,
      text: "As a small cab company, staying organized was a challenge until we found CABZONE. Now we can focus on growing our business instead of paperwork.",
      author: 'Michael Chen',
      position: 'Owner, Green Cab Co.',
      animation: 'animate__fadeInRight'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate__animated animate__fadeIn">
            What Our Customers Say
          </h2>
          <p>Real experiences from our satisfied customers</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card animate__animated ${testimonial.animation}`}>
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
