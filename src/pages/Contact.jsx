import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      {/* --- SECTION 1: BOOK A CLASS (Original) --- */}
      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="serif-title white">Contact us</h2>
            <div className="info-item"><span>Phone:</span> (123) 456-7890</div>
            <div className="info-item"><span>Email:</span> hello@reallygreatsite.com</div>
            <div className="info-item"><span>Address:</span> 123 Anywhere St., Any City</div>
          </div>

          <div className="contact-form-box">
            <h3 className="form-inner-title">Book a Class</h3>
            <form className="booking-form">
              <div className="form-row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="tel" placeholder="Phone number" required />
              <input type="email" placeholder="Email" required />
              <select required>
                <option value="" disabled selected>Preferred time slot</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
              <textarea placeholder="Topic you'd like to discuss" rows="3"></textarea>
              <button type="submit" className="btn-submit">Book class</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ASK A QUESTION SLIDE (New) --- */}
      <section className="ask-question-slide">
        <div className="container">
          <div className="ask-box">
            <div className="ask-header-center">
              <h2 className="title-bold">Have a <span className="text-green">Question?</span></h2>
              <p className="subtitle-gray">Fill out the form below and our team will contact you shortly.</p>
            </div>
            
            <form className="ask-form">
              <input type="text" placeholder="Full Name" required />
              <div className="form-row">
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <textarea placeholder="How can we help you?" rows="4" required></textarea>
              <button type="submit" className="btn-ask-submit">Ask Question</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;