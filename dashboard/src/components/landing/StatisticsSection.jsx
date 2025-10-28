import React, { useEffect, useRef } from 'react';
import { Line, Bar } from 'recharts';

const StatisticsSection = () => {
  const ridesCanvasRef = useRef(null);
  const customersCanvasRef = useRef(null);

  useEffect(() => {
    // Initialize Chart.js charts
    if (window.Chart && ridesCanvasRef.current && customersCanvasRef.current) {
      // Monthly Rides Chart
      const ridesCtx = ridesCanvasRef.current.getContext('2d');
      const ridesChart = new window.Chart(ridesCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'New Cabowners',
            data: [1200, 1900, 2300, 2800, 3500, 4200, 4800, 5300, 5900, 6500, 7200, 8000],
            backgroundColor: 'rgba(67, 97, 238, 0.2)',
            borderColor: 'rgba(67, 97, 238, 1)',
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#ffffff',
            pointBorderColor: 'rgba(67, 97, 238, 1)',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: 10,
              titleFont: {
                size: 14
              },
              bodyFont: {
                size: 14
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });

      // Customer Growth Chart
      const customersCtx = customersCanvasRef.current.getContext('2d');
      const customersChart = new window.Chart(customersCtx, {
        type: 'bar',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{
            label: 'New Customers',
            data: [1500, 2300, 3100, 4200],
            backgroundColor: [
              'rgba(67, 97, 238, 0.7)',
              'rgba(114, 9, 183, 0.7)',
              'rgba(58, 134, 255, 0.7)',
              'rgba(90, 24, 154, 0.7)'
            ],
            borderRadius: 8,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: 10,
              titleFont: {
                size: 14
              },
              bodyFont: {
                size: 14
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.05)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });

      // Cleanup
      return () => {
        ridesChart.destroy();
        customersChart.destroy();
      };
    }
  }, []);

  return (
    <section id="statistics" className="statistics-section">
      <div className="container">
        <h2 className="section-title">
          Our <span>Growth</span>
        </h2>
        <p className="section-subtitle">See how we're expanding our services</p>
        
        <div className="stats-container">
          <div className="stat-chart">
            <canvas ref={ridesCanvasRef} id="ridesChart"></canvas>
            <h3>New Cabowners</h3>
          </div>
          <div className="stat-chart">
            <canvas ref={customersCanvasRef} id="customersChart"></canvas>
            <h3>Customer Growth</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
