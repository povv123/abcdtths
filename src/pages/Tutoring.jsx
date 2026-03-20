import React from "react";
import "../styles/Tutoring.css";

const Tutoring = () => {
  const options = [
    {
      title: "One-on-One Support",
      desc: "Personalized attention tailored to the student's specific learning speed and curriculum needs.",
      image: "https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg"
    },
    {
      title: "Small Group Sessions",
      desc: "Collaborative learning environment (3-5 students) to build confidence and teamwork.",
      image: "https://images.pexels.com/photos/710743/pexels-photo-710743.jpeg"
    },
    {
      title: "At Our Campus",
      desc: "Learn in our dedicated, distraction-free environment with full access to school resources.",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"
    },
    {
      title: "In-Home Tutoring",
      desc: "Maximum convenience and comfort. Our expert tutors come directly to your doorstep.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
    }
  ];

  const miniStories = [
    { name: "Leo R.", text: "My Math grade went from C to A in just one term!", tag: "Grade 11" },
    { name: "Maya T.", text: "The home tutoring is so convenient for my busy schedule.", tag: "English" },
    { name: "Kevin J.", text: "I finally understand Physics thanks to my amazing tutor.", tag: "Grade 12" },
    { name: "Elena S.", text: "Small group sessions helped me speak more confidently.", tag: "Speaking" }
  ];

  return (
    <div className="tutoring-page">
      {/* Hero Header */}
      <header className="tutoring-hero">
        <div className="container">
          <h1 className="title-bold">Premium <span className="text-green">Tutoring</span></h1>
          <p className="subtitle-gray">Flexible learning solutions designed to fit your family's lifestyle.</p>
        </div>
      </header>

      {/* Main Feature Grid */}
      <section className="container tutoring-grid-section">
        <div className="options-grid">
          {options.map((item, index) => (
            <div key={index} className="tutoring-card">
              <div className="card-thumb">
                <img src={item.image} alt={item.title} className="tutoring-pic" />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mini Stories Section */}
      <section className="mini-stories-section">
        <div className="container">
          <h2 className="serif-title centered">Student <span className="text-green">Experiences</span></h2>
          <div className="stories-ticker">
            {miniStories.map((story, index) => (
              <div key={index} className="mini-story-bubble">
                <span className="story-tag">{story.tag}</span>
                <p>"{story.text}"</p>
                <span className="story-author">— {story.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="tutoring-benefits">
        <div className="container benefits-flex">
          <div className="benefits-text">
            <h2 className="serif-title">Why Choose Our Program?</h2>
            <ul className="modern-list">
              <li><strong>Customized Plans:</strong> Every student receives a diagnostic assessment.</li>
              <li><strong>Verified Tutors:</strong> All staff are background-checked and subject experts.</li>
              <li><strong>Grade 9-12 Focus:</strong> Specialized in secondary school curriculum.</li>
              <li><strong>Progress Tracking:</strong> Monthly reports shared with parents.</li>
            </ul>
            <button className="btn-req-tutor">Request a Tutor</button>
          </div>
          <div className="benefits-image-placeholder">
             <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" alt="Tutor Session" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutoring;