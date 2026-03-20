import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Assessment",
      method: "Diagnostic testing to identify learning gaps and vocational interests.",
      delivery: "In-Person / Online"
    },
    {
      id: "02",
      title: "Custom Path",
      method: "Personalized curriculum following the National Standards (Grade 9-12).",
      delivery: "Hybrid"
    },
    {
      id: "03",
      title: "Active Training",
      method: "Live interactive sessions, lab work for science, and coding workshops.",
      delivery: "Live Stream / Lab"
    },
    {
      id: "04",
      title: "Certification",
      method: "Final evaluation and Bac II preparation mock exams.",
      delivery: "In-Person"
    }
  ];

  return (
    <div className="how-it-works">
      <section className="container">
        {/* --- HEADER BLOCK --- */}
        <div className="graph-header">
    
          <h2 className="graph-title">Methodology & <span className="text-green">Delivery</span></h2>
          <div className="header-line"></div>
        </div>

        {/* --- METHODOLOGY GRID --- */}
        <div className="method-grid">
          {steps.map((step) => (
            <div key={step.id} className="method-card">
              <div className="method-top">
                <span className="step-id">{step.id}</span>
                <span className="delivery-tag">{step.delivery}</span>
              </div>
              <div className="method-body">
                <h3>{step.title}</h3>
                <p>{step.method}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SCHEDULE & DELIVERY TABLE --- */}
        <div className="info-block-classic">
          <div className="info-column">
            <h4>Schedules</h4>
            <ul className="graph-list">
              <li><strong>Morning:</strong> 08:00 AM — 11:00 AM</li>
              <li><strong>Afternoon:</strong> 01:30 PM — 04:30 PM</li>
              <li><strong>Evening:</strong> 05:30 PM — 08:30 PM</li>
            </ul>
          </div>
          <div className="info-column">
            <h4>Delivery Mode</h4>
            <div className="delivery-box">
              <div className="mode">
                <span className="mode-title">Online Learning</span>
                <p>Interactive via Zoom/Google Meet with digital whiteboards.</p>
              </div>
              <div className="mode">
                <span className="mode-title">In-Person School</span>
                <p>Traditional classroom setting located in Phnom Penh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;